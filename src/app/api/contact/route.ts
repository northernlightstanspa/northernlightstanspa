import { NextRequest, NextResponse } from 'next/server';
import { getMailer, getMailFrom, getMailTo } from '@/lib/mailer';
import {
  HONEYPOT_FIELD,
  cleanText,
  escapeHtml,
  findTooLongField,
  guardFormRequest,
  isValidEmail,
} from '@/lib/security';

const SUCCESS_MESSAGE = 'Thank you for your message! We will get back to you soon.';

export async function POST(request: NextRequest) {
  const blocked = guardFormRequest(request, {
    name: 'contact',
    maxBodyBytes: 32 * 1024,
    rateLimit: 5,
    rateLimitWindowMs: 15 * 60 * 1000,
  });
  if (blocked) return blocked;

  try {
    let data: Record<string, unknown>;
    try {
      data = await request.json();
    } catch {
      return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
    }
    if (!data || typeof data !== 'object') {
      return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
    }

    // Bots fill in the hidden honeypot field; pretend it worked and drop it.
    if (cleanText(data[HONEYPOT_FIELD])) {
      return NextResponse.json({ message: SUCCESS_MESSAGE, status: 'success' });
    }

    const firstName = cleanText(data.firstName);
    const lastName = cleanText(data.lastName);
    const email = cleanText(data.email);
    const comment = cleanText(data.comment, { multiline: true });

    // Validate required fields
    if (!firstName || !lastName || !email || !comment) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const tooLongField = findTooLongField([
      ['First name', firstName, 100],
      ['Last name', lastName, 100],
      ['Email', email, 254],
      ['Message', comment, 5000],
    ]);
    if (tooLongField) {
      return NextResponse.json(
        { message: `${tooLongField} is too long.` },
        { status: 400 }
      );
    }

    // Validate email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

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

    await getMailer().sendMail({
      from: getMailFrom(),
      to: getMailTo(),
      replyTo: email,
      subject: `New Contact Form Message - ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({
      message: SUCCESS_MESSAGE,
      status: 'success',
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
