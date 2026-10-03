/**
 * ============================================================================
 * GOOGLE APPS SCRIPT: COURSE REGISTRATION & EMAIL DISPATCH (SMTP)
 * ============================================================================
 * 
 * This Google Apps Script receives course registrations from your website,
 * automatically saves them to this Google Sheet, and sends email notifications
 * (acting as an SMTP/email service) to both the admissions team and the applicant.
 *
 * QUICK SETUP INSTRUCTIONS (Takes ~2 minutes):
 * ----------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new) and name it (e.g., "Pinch Course Registrations").
 * 2. In the top menu, click: Extensions > Apps Script.
 * 3. Delete any default code in Code.gs, paste this entire file, and click Save (Ctrl+S / Cmd+S).
 * 4. (Optional) Customize ADMIN_EMAIL below with your notification email address.
 * 5. Click the blue "Deploy" button (top-right) > "New deployment".
 * 6. Select type: "Web app" (click the gear icon > Web app).
 * 7. Configure:
 *    - Description: "Pinch Registration Webhook"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (CRITICAL: Must be "Anyone" so the website can submit without Google login).
 * 8. Click "Deploy", review permissions, and authorize the script.
 * 9. Copy the generated "Web App URL" (ends in /exec).
 * 10. Paste this URL into your website's .env file:
 *     VITE_REGISTRATION_SHEET_URL=https://script.google.com/macros/s/.../exec
 * ============================================================================
 */

// CONFIGURATION: Set the notification recipient email
const ADMIN_EMAIL = 'contact@pinchstudio.in'; // Replace with admissions/admin email
const SENDER_NAME = 'Pinch Admissions';

// Column Headers for the Google Sheet
const HEADERS = [
  'Timestamp',
  'Reference Code',
  'Full Name',
  'Email',
  'Phone',
  'Date of Birth',
  'Gender',
  'City',
  'Address',
  'Course',
  'Start Date',
  'Delivery Mode',
  'Batch Timing',
  'Qualification',
  'Applicant Message',
];

/**
 * Handles incoming POST requests from the website registration form.
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#F4EFE6');
      sheet.setFrozenRows(1);
    }

    // Parse incoming data (supports JSON or Form post)
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const refCode = data.refCode || 'REG-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);

    // Prepare row matching the header order
    const row = [
      timestamp,
      refCode,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.dob || '',
      data.gender || '',
      data.city || '',
      data.address || '',
      data.course || '',
      data.startDate || '',
      data.mode || '',
      data.batch || '',
      data.qualification || '',
      data.message || '',
    ];

    // Append row to Google Sheet
    sheet.appendRow(row);

    // Send Admin Notification Email (SMTP Equivalent)
    try {
      sendAdminNotification(data, refCode, timestamp);
    } catch (mailErr) {
      Logger.log('Admin email error: ' + mailErr.toString());
    }

    // Send Applicant Confirmation Email (SMTP Equivalent)
    if (data.email) {
      try {
        sendApplicantConfirmation(data, refCode);
      } catch (mailErr) {
        Logger.log('Applicant confirmation email error: ' + mailErr.toString());
      }
    }

    // Return success JSON
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Registration logged successfully',
      refCode: refCode
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('doPost Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles incoming GET requests for health check testing.
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    service: 'Pinch Course Registration Webhook',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Sends a detailed email notification to the admissions/admin team.
 */
function sendAdminNotification(data, refCode, timestamp) {
  const subject = `[New Registration] ${data.course || 'Course'} - ${data.fullName || 'Applicant'} (${refCode})`;
  
  const body = `
New Course Registration Received:

Reference Code : ${refCode}
Date & Time    : ${timestamp}

--- APPLICANT DETAILS ---
Full Name      : ${data.fullName || '—'}
Email          : ${data.email || '—'}
Phone          : ${data.phone || '—'}
Date of Birth  : ${data.dob || '—'}
Gender         : ${data.gender || '—'}
City           : ${data.city || '—'}
Address        : ${data.address || '—'}

--- COURSE ENROLLMENT ---
Selected Course: ${data.course || '—'}
Start Date     : ${data.startDate || '—'}
Delivery Mode  : ${data.mode || '—'}
Batch Timing   : ${data.batch || '—'}
Qualification  : ${data.qualification || '—'}

--- APPLICANT NOTE ---
${data.message || 'No additional note provided.'}
  `.trim();

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    body: body,
    name: SENDER_NAME,
    replyTo: data.email || undefined
  });
}

/**
 * Sends a welcome & confirmation email to the applicant.
 */
function sendApplicantConfirmation(data, refCode) {
  const firstName = (data.fullName || '').trim().split(' ')[0] || 'Applicant';
  const subject = `Your Course Registration Confirmation - ${refCode} | Pinch Studio`;

  const body = `
Dear ${firstName},

Thank you for registering for ${data.course || 'your course'} with Pinch Studio!

We have successfully reserved your application under Reference Code: ${refCode}

Summary of your registration:
- Course: ${data.course || '—'}
- Anticipated Start Date: ${data.startDate || '—'}
- Delivery Mode: ${data.mode || '—'}
- Preferred Batch: ${data.batch || '—'}

What happens next?
1. Our admissions coordinator is reviewing your application details.
2. We will contact you at ${data.phone || 'your phone'} / ${data.email} within one business day with the syllabus breakdown, schedule, and onboarding instructions.

If you have any urgent questions, simply reply to this email.

Warm regards,
Admissions Team
Pinch Studio
https://pinchstudio.in
  `.trim();

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    body: body,
    name: SENDER_NAME,
    replyTo: ADMIN_EMAIL
  });
}
