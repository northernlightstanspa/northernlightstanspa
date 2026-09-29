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

const SUCCESS_MESSAGE = 'Application submitted successfully!';
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

// Allowed resume formats. The file's first bytes must match the signature, so a
// renamed executable or script can't be passed off as a document.
const RESUME_TYPES: Record<string, { contentType: string; signature: number[] }> = {
  pdf: { contentType: 'application/pdf', signature: [0x25, 0x50, 0x44, 0x46, 0x2d] }, // %PDF-
  doc: { contentType: 'application/msword', signature: [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1] },
  docx: {
    contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    signature: [0x50, 0x4b, 0x03, 0x04], // ZIP container
  },
};

function formatDate(value: string): string {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return 'Not provided';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function parseTanningExperience(value: FormDataEntryValue | null): string[] | null {
  if (value === null) return [];
  if (typeof value !== 'string') return null;
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed) || parsed.length > 20) return null;
    const items = parsed.map((item) => cleanText(item)).filter(Boolean);
    return items.every((item) => item.length <= 100) ? items : null;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const blocked = guardFormRequest(request, {
    name: 'job-application',
    maxBodyBytes: MAX_RESUME_BYTES + 256 * 1024,
    rateLimit: 5,
    rateLimitWindowMs: 60 * 60 * 1000,
  });
  if (blocked) return blocked;

  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
    }

    // Bots fill in the hidden honeypot field; pretend it worked and drop it.
    if (cleanText(formData.get(HONEYPOT_FIELD))) {
      return NextResponse.json({ message: SUCCESS_MESSAGE, status: 'success' });
    }

    const field = (name: string) => cleanText(formData.get(name));
    const multilineField = (name: string) => cleanText(formData.get(name), { multiline: true });

    // Extract form fields
    const firstName = field('firstName');
    const lastName = field('lastName');
    const email = field('email');
    const phone = field('phone');
    const address = field('address');
    const city = field('city');
    const state = field('state');
    const zipCode = field('zipCode');
    const birthDate = field('birthDate');
    const position = field('position');
    const availability = field('availability');
    const startDate = field('startDate');
    const desiredPay = field('desiredPay');
    const experience = multilineField('experience');
    const education = multilineField('education');
    const skills = multilineField('skills');
    const availabilityMonday = field('availabilityMonday');
    const availabilityTuesday = field('availabilityTuesday');
    const availabilityWednesday = field('availabilityWednesday');
    const availabilityThursday = field('availabilityThursday');
    const availabilityFriday = field('availabilityFriday');
    const availabilitySaturday = field('availabilitySaturday');
    const availabilitySunday = field('availabilitySunday');
    const tanningExperience = parseTanningExperience(formData.get('tanningExperience'));
    const references = multilineField('references');
    const whyInterested = multilineField('whyInterested');
    const additionalInfo = multilineField('additionalInfo');
    const resumeValue = formData.get('resume');
    const resumeFile = resumeValue instanceof File && resumeValue.size > 0 ? resumeValue : null;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position || !availability || !experience || !whyInterested) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!tanningExperience) {
      return NextResponse.json({ message: 'Invalid tanning experience selection.' }, { status: 400 });
    }

    const tooLongField = findTooLongField([
      ['First name', firstName, 100],
      ['Last name', lastName, 100],
      ['Email', email, 254],
      ['Phone', phone, 30],
      ['Address', address, 200],
      ['City', city, 100],
      ['State', state, 50],
      ['Zip code', zipCode, 20],
      ['Date of birth', birthDate, 30],
      ['Position', position, 100],
      ['Availability', availability, 100],
      ['Start date', startDate, 30],
      ['Desired pay', desiredPay, 50],
      ['Work experience', experience, 5000],
      ['Education', education, 5000],
      ['Skills', skills, 5000],
      ['Monday availability', availabilityMonday, 100],
      ['Tuesday availability', availabilityTuesday, 100],
      ['Wednesday availability', availabilityWednesday, 100],
      ['Thursday availability', availabilityThursday, 100],
      ['Friday availability', availabilityFriday, 100],
      ['Saturday availability', availabilitySaturday, 100],
      ['Sunday availability', availabilitySunday, 100],
      ['References', references, 5000],
      ['Why interested', whyInterested, 5000],
      ['Additional information', additionalInfo, 5000],
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

    // Validate the resume before doing anything else with it
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    if (resumeFile) {
      if (resumeFile.size > MAX_RESUME_BYTES) {
        return NextResponse.json(
          { message: 'File size should not exceed 5MB.' },
          { status: 400 }
        );
      }

      const extension = resumeFile.name.split('.').pop()?.toLowerCase() || '';
      const resumeType = RESUME_TYPES[extension];
      const content = Buffer.from(await resumeFile.arrayBuffer());

      if (!resumeType || !resumeType.signature.every((byte, i) => content[i] === byte)) {
        return NextResponse.json(
          { message: 'Only PDF, DOC, and DOCX files are allowed.' },
          { status: 400 }
        );
      }

      // Never trust the uploaded file name; build a safe one instead.
      const safeName = `${firstName}-${lastName}`.replace(/[^A-Za-z0-9-]+/g, '_').slice(0, 60);
      attachments.push({
        filename: `Resume-${safeName}.${extension}`,
        content,
        contentType: resumeType.contentType,
      });
    }

    // Build tanning experience HTML
    let tanningExpHtml = '';
    if (tanningExperience.length > 0) {
      tanningExpHtml = '<ul style="margin: 5px 0; padding-left: 20px;">';
      for (const exp of tanningExperience) {
        tanningExpHtml += `<li>${escapeHtml(exp)}</li>`;
      }
      tanningExpHtml += '</ul>';
    } else {
      tanningExpHtml = '<span style="color: #999;">Not specified</span>';
    }

    // Format dates
    const birthDateFormatted = formatDate(birthDate);
    const startDateFormatted = formatDate(startDate);

    // Build full address
    let fullAddress = '';
    if (address) {
      fullAddress = escapeHtml(address);
      if (city) fullAddress += ', ' + escapeHtml(city);
      if (state) fullAddress += ', ' + escapeHtml(state);
      if (zipCode) fullAddress += ' ' + escapeHtml(zipCode);
    }

    // Build HTML email
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
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
      margin-bottom: 25px;
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
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
    }
    .field-name {
      font-weight: 600;
      color: #f97316;
      width: 200px;
      flex-shrink: 0;
    }
    .field-value {
      flex: 1;
      min-width: 250px;
      color: #444;
    }
    .text-box {
      background-color: #fffbf5;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #fed7aa;
      margin-top: 5px;
      white-space: pre-wrap;
      color: #444;
    }
    .schedule-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .schedule-table th, .schedule-table td {
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid #fed7aa;
    }
    .schedule-table th {
      background-color: #fff7ed;
      color: #f97316;
      font-weight: 600;
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
      <h1>New Job Application</h1>
      <p>Application submitted by ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p>Position: ${escapeHtml(position)}</p>
      ${resumeFile ? '<p>Resume attached to this email</p>' : ''}
    </div>
    <div class="email-body">

      <div class="section">
        <h3 class="section-title">Personal Information</h3>
        <div class="field">
          <span class="field-name">Full Name:</span>
          <span class="field-value">${escapeHtml(firstName)} ${escapeHtml(lastName)}</span>
        </div>
        <div class="field">
          <span class="field-name">Email:</span>
          <span class="field-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></span>
        </div>
        <div class="field">
          <span class="field-name">Phone:</span>
          <span class="field-value"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></span>
        </div>
        <div class="field">
          <span class="field-name">Date of Birth:</span>
          <span class="field-value">${birthDateFormatted}</span>
        </div>
        ${fullAddress ? `
        <div class="field">
          <span class="field-name">Address:</span>
          <span class="field-value">${fullAddress}</span>
        </div>` : ''}
      </div>

      <div class="section">
        <h3 class="section-title">Position Details</h3>
        <div class="field">
          <span class="field-name">Position:</span>
          <span class="field-value">${escapeHtml(position)}</span>
        </div>
        <div class="field">
          <span class="field-name">Availability:</span>
          <span class="field-value">${escapeHtml(availability)}</span>
        </div>
        <div class="field">
          <span class="field-name">Earliest Start Date:</span>
          <span class="field-value">${startDateFormatted}</span>
        </div>
        ${desiredPay ? `
        <div class="field">
          <span class="field-name">Desired Hourly Pay:</span>
          <span class="field-value">${escapeHtml(desiredPay)}</span>
        </div>` : ''}
      </div>

      <div class="section">
        <h3 class="section-title">Experience &amp; Qualifications</h3>
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Previous Work Experience:</strong>
          <div class="text-box">${escapeHtml(experience)}</div>
        </div>
        ${education ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Education Background:</strong>
          <div class="text-box">${escapeHtml(education)}</div>
        </div>` : ''}
        ${skills ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Relevant Skills:</strong>
          <div class="text-box">${escapeHtml(skills)}</div>
        </div>` : ''}
      </div>

      <div class="section">
        <h3 class="section-title">Weekly Availability Schedule</h3>
        <table class="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Monday</td><td>${escapeHtml(availabilityMonday) || '<em>Not specified</em>'}</td></tr>
            <tr><td>Tuesday</td><td>${escapeHtml(availabilityTuesday) || '<em>Not specified</em>'}</td></tr>
            <tr><td>Wednesday</td><td>${escapeHtml(availabilityWednesday) || '<em>Not specified</em>'}</td></tr>
            <tr><td>Thursday</td><td>${escapeHtml(availabilityThursday) || '<em>Not specified</em>'}</td></tr>
            <tr><td>Friday</td><td>${escapeHtml(availabilityFriday) || '<em>Not specified</em>'}</td></tr>
            <tr><td>Saturday</td><td>${escapeHtml(availabilitySaturday) || '<em>Not specified</em>'}</td></tr>
            <tr><td>Sunday</td><td>${escapeHtml(availabilitySunday) || '<em>Not specified</em>'}</td></tr>
          </tbody>
        </table>
      </div>

      <div class="section">
        <h3 class="section-title">Tanning Industry Experience</h3>
        ${tanningExpHtml}
      </div>

      <div class="section">
        <h3 class="section-title">Additional Information</h3>
        ${references ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">References:</strong>
          <div class="text-box">${escapeHtml(references)}</div>
        </div>` : ''}
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Why interested in Northern Lights Tan &amp; Wellness:</strong>
          <div class="text-box">${escapeHtml(whyInterested)}</div>
        </div>
        ${additionalInfo ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Something interesting about themselves:</strong>
          <div class="text-box">${escapeHtml(additionalInfo)}</div>
        </div>` : ''}
      </div>

    </div>
    <div class="footer">
      <p>This application was submitted via the Northern Lights Tan &amp; Wellness website.</p>
    </div>
  </div>
</body>
</html>`;

    // Send the email
    await getMailer().sendMail({
      from: getMailFrom(),
      to: getMailTo(),
      replyTo: email,
      subject: `New Job Application: ${position} - ${firstName} ${lastName}`,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json({
      message: SUCCESS_MESSAGE,
      status: 'success',
    });
  } catch (error) {
    console.error('Error sending job application:', error);
    return NextResponse.json(
      { message: 'Failed to send application. Please try again later.' },
      { status: 500 }
    );
  }
}
