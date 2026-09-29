import { NextRequest, NextResponse } from 'next/server';

// Production hostnames that are always allowed to submit forms, in case the
// app runs behind a proxy that rewrites the Host header.
const ALLOWED_HOSTS = ['northernlightstanspa.com', 'www.northernlightstanspa.com'];

// Name of the hidden "honeypot" form field. Real visitors never see or fill it;
// spam bots that fill every input do.
export const HONEYPOT_FIELD = 'website';

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Stricter than "anything@anything.anything" so values like `a,b@c.com` or
// `"x" <y@z.com>` can't smuggle extra recipients into the Reply-To header.
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL_REGEX.test(email);
}

/**
 * Normalizes an untrusted form value: trims it and removes control characters.
 * Single-line fields also have line breaks removed so they are safe to use in
 * email headers such as the subject.
 */
export function cleanText(value: unknown, { multiline = false } = {}): string {
  if (typeof value !== 'string') return '';
  const withoutControlChars = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  const normalized = multiline ? withoutControlChars : withoutControlChars.replace(/[\r\n\t]+/g, ' ');
  return normalized.trim();
}

/** Returns the label of the first field that exceeds its max length, or null. */
export function findTooLongField(fields: [label: string, value: string, maxLength: number][]): string | null {
  for (const [label, value, maxLength] of fields) {
    if (value.length > maxLength) return label;
  }
  return null;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

const rateLimitBuckets = new Map<string, number[]>();

/**
 * Simple in-memory sliding-window rate limiter keyed by client IP.
 * Returns true if the request is allowed.
 */
function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (rateLimitBuckets.get(key) || []).filter((time) => now - time < windowMs);

  if (recent.length >= limit) {
    rateLimitBuckets.set(key, recent);
    return false;
  }

  recent.push(now);
  rateLimitBuckets.set(key, recent);

  // Keep memory bounded by dropping stale entries once the map grows large.
  if (rateLimitBuckets.size > 5000) {
    for (const [bucketKey, times] of rateLimitBuckets) {
      if (times.every((time) => now - time >= windowMs)) rateLimitBuckets.delete(bucketKey);
    }
  }

  return true;
}

function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const allowedHosts = new Set(ALLOWED_HOSTS);
  const host = request.headers.get('host');
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0].trim();
  if (host) allowedHosts.add(host);
  if (forwardedHost) allowedHosts.add(forwardedHost);

  return allowedHosts.has(originHost);
}

interface RequestGuardOptions {
  /** Identifies the endpoint so each form has its own rate limit. */
  name: string;
  /** Maximum accepted request body size in bytes. */
  maxBodyBytes: number;
  /** Maximum submissions per IP within the window. */
  rateLimit: number;
  rateLimitWindowMs: number;
}

/**
 * Runs the checks every public form endpoint needs before touching the body:
 * same-origin request, body size limit, and per-IP rate limit.
 * Returns an error response to send back, or null if the request may proceed.
 */
export function guardFormRequest(request: NextRequest, options: RequestGuardOptions): NextResponse | null {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: 'Forbidden.' }, { status: 403 });
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (!contentLength || contentLength > options.maxBodyBytes) {
    return NextResponse.json({ message: 'Request is too large.' }, { status: 413 });
  }

  const key = `${options.name}:${getClientIp(request)}`;
  if (!checkRateLimit(key, options.rateLimit, options.rateLimitWindowMs)) {
    return NextResponse.json(
      { message: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  return null;
}
