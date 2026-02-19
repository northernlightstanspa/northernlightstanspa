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
    const formData = await request.formData();

    // Extract form fields
    const firstName = (formData.get('firstName') as string || '').trim();
    const lastName = (formData.get('lastName') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const phone = (formData.get('phone') as string || '').trim();
    const address = (formData.get('address') as string || '').trim();
    const city = (formData.get('city') as string || '').trim();
    const state = (formData.get('state') as string || '').trim();
    const zipCode = (formData.get('zipCode') as string || '').trim();
    const birthDate = (formData.get('birthDate') as string || '').trim();
    const position = (formData.get('position') as string || '').trim();
    const availability = (formData.get('availability') as string || '').trim();
    const startDate = (formData.get('startDate') as string || '').trim();
    const desiredPay = (formData.get('desiredPay') as string || '').trim();
    const experience = (formData.get('experience') as string || '').trim();
    const education = (formData.get('education') as string || '').trim();
    const skills = (formData.get('skills') as string || '').trim();
    const availabilityMonday = (formData.get('availabilityMonday') as string || '').trim();
    const availabilityTuesday = (formData.get('availabilityTuesday') as string || '').trim();
    const availabilityWednesday = (formData.get('availabilityWednesday') as string || '').trim();
    const availabilityThursday = (formData.get('availabilityThursday') as string || '').trim();
    const availabilityFriday = (formData.get('availabilityFriday') as string || '').trim();
    const availabilitySaturday = (formData.get('availabilitySaturday') as string || '').trim();
    const availabilitySunday = (formData.get('availabilitySunday') as string || '').trim();
    const tanningExperienceJson = formData.get('tanningExperience') as string || '[]';
    const tanningExperience: string[] = JSON.parse(tanningExperienceJson) || [];
    const references = (formData.get('references') as string || '').trim();
    const whyInterested = (formData.get('whyInterested') as string || '').trim();
    const additionalInfo = (formData.get('additionalInfo') as string || '').trim();
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position || !availability || !experience || !whyInterested) {
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
    const birthDateFormatted = birthDate
      ? new Date(birthDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : 'Not provided';
    const startDateFormatted = startDate
      ? new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : 'Not provided';

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

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'noreply@northernlightstanspa.com',
        pass: '5NgLPLnnXdY0dTkP&',
      },
    });

    // Prepare attachments
    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    if (resumeFile && resumeFile.size > 0) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { message: 'Only PDF, DOC, and DOCX files are allowed.' },
          { status: 400 }
        );
      }

      // Validate file size (5MB limit)
      if (resumeFile.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { message: 'File size should not exceed 5MB.' },
          { status: 400 }
        );
      }

      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename: resumeFile.name,
        content: Buffer.from(arrayBuffer),
        contentType: resumeFile.type,
      });
    }

    // Send the email
    await transporter.sendMail({
      from: '"Northern Lights Tan & Wellness" <noreply@northernlightstanspa.com>',
      to: 'teri@mwtan.com',
      replyTo: email,
      subject: `New Job Application: ${position} - ${firstName} ${lastName}`,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json({
      message: 'Application submitted successfully!',
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
