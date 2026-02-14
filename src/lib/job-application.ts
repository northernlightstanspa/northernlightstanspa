import nodemailer from 'nodemailer';

export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  position: string;
  availability: string;
  startDate: string;
  desiredPay: string;
  experience: string;
  education: string;
  skills: string;
  references: string;
  whyInterested: string;
  additionalInfo: string;
}

export interface JobApplicationResult {
  success: boolean;
  message: string;
  error?: string;
}

export function validateJobApplication(data: JobApplicationData): string | null {
  if (!data.firstName || !data.lastName || !data.email || !data.phone || 
      !data.position || !data.availability || !data.experience || !data.whyInterested) {
    return 'Please fill in all required fields.';
  }
  return null;
}

export function formatJobApplicationEmailHtml(data: JobApplicationData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #f97316, #f59e0b); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Job Application</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9fafb;">
        <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
          Personal Information
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
            <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
          </tr>
          ${data.address ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Address:</td>
            <td style="padding: 8px 0;">
              ${data.address}<br>
              ${data.city ? `${data.city}, ` : ''}${data.state} ${data.zipCode}
            </td>
          </tr>
          ` : ''}
        </table>

        <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px; margin-top: 30px;">
          Position Details
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 40%;">Position:</td>
            <td style="padding: 8px 0;">${data.position}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Availability:</td>
            <td style="padding: 8px 0;">${data.availability}</td>
          </tr>
          ${data.startDate ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Start Date:</td>
            <td style="padding: 8px 0;">${new Date(data.startDate).toLocaleDateString()}</td>
          </tr>
          ` : ''}
          ${data.desiredPay ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Desired Pay:</td>
            <td style="padding: 8px 0;">${data.desiredPay}</td>
          </tr>
          ` : ''}
        </table>

        <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px; margin-top: 30px;">
          Experience & Qualifications
        </h2>
        
        <h3 style="color: #374151; margin-bottom: 10px;">Work Experience:</h3>
        <p style="background-color: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.experience}</p>
        
        ${data.education ? `
        <h3 style="color: #374151; margin-bottom: 10px;">Education:</h3>
        <p style="background-color: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.education}</p>
        ` : ''}
        
        ${data.skills ? `
        <h3 style="color: #374151; margin-bottom: 10px;">Skills:</h3>
        <p style="background-color: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.skills}</p>
        ` : ''}

        <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px; margin-top: 30px;">
          Additional Information
        </h2>
        
        ${data.references ? `
        <h3 style="color: #374151; margin-bottom: 10px;">References:</h3>
        <p style="background-color: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.references}</p>
        ` : ''}
        
        <h3 style="color: #374151; margin-bottom: 10px;">Why interested in Northern Lights Tan Spa:</h3>
        <p style="background-color: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.whyInterested}</p>
        
        ${data.additionalInfo ? `
        <h3 style="color: #374151; margin-bottom: 10px;">Additional Notes:</h3>
        <p style="background-color: white; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.additionalInfo}</p>
        ` : ''}
      </div>

      <div style="background-color: #1e293b; color: white; padding: 15px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">
          This application was submitted via the Northern Lights Tan Spa website.
        </p>
      </div>
    </div>
  `;
}

export function formatJobApplicationEmailText(data: JobApplicationData): string {
  return `
NEW JOB APPLICATION

PERSONAL INFORMATION
---------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}, ${data.city}, ${data.state} ${data.zipCode}` : ''}

POSITION DETAILS
----------------
Position: ${data.position}
Availability: ${data.availability}
${data.startDate ? `Start Date: ${new Date(data.startDate).toLocaleDateString()}` : ''}
${data.desiredPay ? `Desired Pay: ${data.desiredPay}` : ''}

EXPERIENCE & QUALIFICATIONS
---------------------------
Work Experience:
${data.experience}

${data.education ? `Education:\n${data.education}` : ''}

${data.skills ? `Skills:\n${data.skills}` : ''}

ADDITIONAL INFORMATION
----------------------
${data.references ? `References:\n${data.references}` : ''}

Why interested in Northern Lights Tan Spa:
${data.whyInterested}

${data.additionalInfo ? `Additional Notes:\n${data.additionalInfo}` : ''}

---
This application was submitted via the Northern Lights Tan Spa website.
  `;
}

export async function sendJobApplicationEmail(data: JobApplicationData): Promise<JobApplicationResult> {
  // Validate required fields
  const validationError = validateJobApplication(data);
  if (validationError) {
    return {
      success: false,
      message: validationError,
      error: 'validation_error'
    };
  }

  try {
    // Configure nodemailer transporter
    // IMPORTANT: Update these settings with your actual email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your email password or app-specific password
      },
    });

    const emailHtml = formatJobApplicationEmailHtml(data);
    const emailText = formatJobApplicationEmailText(data);

    // Send the email
    await transporter.sendMail({
      from: `"Northern Lights Tan Spa Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER, // Email where applications should be sent
      replyTo: data.email, // Reply directly to applicant
      subject: `New Job Application: ${data.position} - ${data.firstName} ${data.lastName}`,
      text: emailText,
      html: emailHtml,
    });

    return {
      success: true,
      message: 'Application submitted successfully!'
    };
  } catch (error) {
    console.error('Error sending job application:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again later.',
      error: 'email_error'
    };
  }
}
