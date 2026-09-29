import nodemailer, { type Transporter } from 'nodemailer';

// SMTP credentials are read from environment variables (see .env.example).
// Never hardcode them in source files: this repository is public.
let transporter: Transporter | null = null;

export function getMailer(): Transporter {
  if (transporter) return transporter;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error('SMTP_USER and SMTP_PASS environment variables must be set.');
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: (process.env.SMTP_SECURE || 'true') === 'true',
    auth: { user, pass },
    // Emails only contain in-memory content, so block nodemailer from ever
    // reading local files or fetching URLs referenced in a message.
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  return transporter;
}

export function getMailFrom(): string {
  return `"Northern Lights Tan & Wellness" <${process.env.SMTP_USER}>`;
}

export function getMailTo(): string {
  return process.env.MAIL_TO || 'teri@mwtan.com';
}
