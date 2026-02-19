import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const firstName = (data.firstName || '').trim();
    const lastName = (data.lastName || '').trim();
    const email = (data.email || '').trim();
    const comment = (data.comment || '').trim();

    // Validate required fields
    if (!firstName || !lastName || !email || !comment) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP configuration: SMTP_USER and SMTP_PASS environment variables are required.');
      return NextResponse.json(
        { message: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 700px;
      margin: 0 auto;
      background-color: #fff8f0;
    }
    .email-container {
      border: 1px solid #f97316;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.15);
    }
    .email-header {
      background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
      color: #ffffff;
      padding: 25px;
      text-align: center;
    }
    .email-header h1 {
      margin: 0;
      font-size: 24px;
      color: #ffffff;
      font-weight: 600;
    }
    .email-header p {
      color: rgba(255, 255, 255, 0.9);
      margin: 8px 0 0;
      font-size: 14px;
    }
    .email-body {
      padding: 25px;
      background-color: #ffffff;
    }
    .section {
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      border-left: 4px solid #f97316;
      box-shadow: 0 2px 8px rgba(249, 115, 22, 0.08);
    }
    .section-title {
      margin-top: 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #fed7aa;
      color: #f97316;
      font-size: 18px;
      font-weight: 600;
    }
    .field {
      margin-bottom: 12px;
      display: flex;
      flex-wrap: wrap;
    }
    .field-name {
      font-weight: 600;
      color: #f97316;
      width: 120px;
      flex-shrink: 0;
    }
    .field-value {
      flex: 1;
      min-width: 200px;
      color: #444;
    }
    .comment-box {
      background-color: #fffbf5;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #fed7aa;
      margin-top: 10px;
      white-space: pre-wrap;
      color: #444;
    }
    .footer {
      text-align: center;
      padding: 15px;
      background-color: #1e293b;
      color: #ffffff;
      font-size: 12px;
    }
    .footer p {
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>New Contact Form Message</h1>
      <p>Submitted by ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
    </div>
    <div class="email-body">
      <div class="section">
        <h3 class="section-title">Contact Details</h3>
        <div class="field">
          <span class="field-name">Name:</span>
          <span class="field-value">${escapeHtml(firstName)} ${escapeHtml(lastName)}</span>
        </div>
        <div class="field">
          <span class="field-name">Email:</span>
          <span class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></span>
        </div>
      </div>
      <div class="section">
        <h3 class="section-title">Message</h3>
        <div class="comment-box">${escapeHtml(comment)}</div>
      </div>
    </div>
    <div class="footer">
      <p>This message was submitted via the Northern Lights Tan & Wellness website contact form.</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Northern Lights Tan & Wellness" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'teri@mwtan.com',
      replyTo: email,
      subject: `New Contact Form Message - ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({
      message: 'Thank you for your message! We will get back to you soon.',
      status: 'success',
    });
  } catch (error: unknown) {
    const err = error as Error & { code?: string; responseCode?: number };
    console.error('Error sending contact email:', {
      message: err.message,
      code: err.code,
      responseCode: err.responseCode,
      stack: err.stack,
    });
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
