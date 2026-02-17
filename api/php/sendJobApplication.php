<?php
// Increase PHP limits for handling larger uploads
ini_set('memory_limit', '256M');
ini_set('upload_max_filesize', '10M');
ini_set('post_max_size', '15M');
ini_set('max_execution_time', 300);

// Set content type first to ensure JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Disable HTML error output to prevent JSON parsing issues
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
ini_set('html_errors', 0);
error_reporting(E_ALL);

// Custom error handler to ensure JSON output
set_error_handler(function($severity, $message, $file, $line) {
    http_response_code(500);
    echo json_encode(['message' => "PHP Error: $message in $file on line $line"]);
    exit;
});

set_exception_handler(function($exception) {
    http_response_code(500);
    echo json_encode(['message' => "Exception: " . $exception->getMessage()]);
    exit;
});

register_shutdown_function(function() {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        http_response_code(500);
        echo json_encode(['message' => "Fatal Error: {$error['message']}"]);
        exit;
    }
});

function sendError($message) {
    http_response_code(400);
    echo json_encode(['message' => $message]);
    exit;
}

// Check if the request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendError('Invalid request method');
}

// Check for POST data limits
if (empty($_POST) && empty($_FILES) && isset($_SERVER['CONTENT_LENGTH']) && $_SERVER['CONTENT_LENGTH'] > 0) {
    $displayMaxSize = ini_get('post_max_size');
    sendError("Posted data is too large. Maximum allowed size is {$displayMaxSize}");
}

// Extract form fields from POST data (flat FormData)
$firstName = trim($_POST['firstName'] ?? '');
$lastName = trim($_POST['lastName'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$address = trim($_POST['address'] ?? '');
$city = trim($_POST['city'] ?? '');
$state = trim($_POST['state'] ?? '');
$zipCode = trim($_POST['zipCode'] ?? '');
$birthDate = trim($_POST['birthDate'] ?? '');
$position = trim($_POST['position'] ?? '');
$availability = trim($_POST['availability'] ?? '');
$startDate = trim($_POST['startDate'] ?? '');
$desiredPay = trim($_POST['desiredPay'] ?? '');
$experience = trim($_POST['experience'] ?? '');
$education = trim($_POST['education'] ?? '');
$skills = trim($_POST['skills'] ?? '');
$availabilityMonday = trim($_POST['availabilityMonday'] ?? '');
$availabilityTuesday = trim($_POST['availabilityTuesday'] ?? '');
$availabilityWednesday = trim($_POST['availabilityWednesday'] ?? '');
$availabilityThursday = trim($_POST['availabilityThursday'] ?? '');
$availabilityFriday = trim($_POST['availabilityFriday'] ?? '');
$availabilitySaturday = trim($_POST['availabilitySaturday'] ?? '');
$availabilitySunday = trim($_POST['availabilitySunday'] ?? '');
$tanningExperienceJson = $_POST['tanningExperience'] ?? '[]';
$tanningExperience = json_decode($tanningExperienceJson, true) ?? [];
$references = trim($_POST['references'] ?? '');
$whyInterested = trim($_POST['whyInterested'] ?? '');
$additionalInfo = trim($_POST['additionalInfo'] ?? '');

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || 
    empty($position) || empty($availability) || empty($experience) || empty($whyInterested)) {
    sendError('Please fill in all required fields.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendError('Please provide a valid email address.');
}

// Check if resume file is present and handle upload errors
$resumeFile = false;
if (isset($_FILES['resume'])) {
    switch ($_FILES['resume']['error']) {
        case UPLOAD_ERR_OK:
            $resumeFile = true;
            break;
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            sendError('File is too large. Maximum size is 5MB.');
            break;
        case UPLOAD_ERR_PARTIAL:
            sendError('File was only partially uploaded. Please try again.');
            break;
        case UPLOAD_ERR_NO_FILE:
            break;
        default:
            sendError('File upload failed. Please try again.');
            break;
    }
}

// Escape data to prevent XSS
function escape($value) {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

// Recipient email
$to = 'mdpanna600@gmail.com';
$subject = 'New Job Application: ' . escape($position) . ' - ' . escape($firstName) . ' ' . escape($lastName);

// Build tanning experience list
$tanningExpHtml = '';
if (!empty($tanningExperience)) {
    $tanningExpHtml = '<ul style="margin: 5px 0; padding-left: 20px;">';
    foreach ($tanningExperience as $exp) {
        $tanningExpHtml .= '<li>' . escape($exp) . '</li>';
    }
    $tanningExpHtml .= '</ul>';
} else {
    $tanningExpHtml = '<span style="color: #999;">Not specified</span>';
}

// Format birth date
$birthDateFormatted = !empty($birthDate) ? date('F j, Y', strtotime($birthDate)) : 'Not provided';
$startDateFormatted = !empty($startDate) ? date('F j, Y', strtotime($startDate)) : 'Not provided';

// Build the full address
$fullAddress = '';
if (!empty($address)) {
    $fullAddress = escape($address);
    if (!empty($city)) $fullAddress .= ', ' . escape($city);
    if (!empty($state)) $fullAddress .= ', ' . escape($state);
    if (!empty($zipCode)) $fullAddress .= ' ' . escape($zipCode);
}

// Prepare HTML email content
$htmlContent = '<!DOCTYPE html>
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
      <p>Application submitted by ' . escape($firstName) . ' ' . escape($lastName) . '</p>
      <p>Position: ' . escape($position) . '</p>';

if ($resumeFile) {
    $htmlContent .= '<p>Resume attached to this email</p>';
}

$htmlContent .= '
    </div>
    <div class="email-body">

      <!-- Personal Information -->
      <div class="section">
        <h3 class="section-title">Personal Information</h3>
        <div class="field">
          <span class="field-name">Full Name:</span>
          <span class="field-value">' . escape($firstName) . ' ' . escape($lastName) . '</span>
        </div>
        <div class="field">
          <span class="field-name">Email:</span>
          <span class="field-value"><a href="mailto:' . escape($email) . '">' . escape($email) . '</a></span>
        </div>
        <div class="field">
          <span class="field-name">Phone:</span>
          <span class="field-value"><a href="tel:' . escape($phone) . '">' . escape($phone) . '</a></span>
        </div>
        <div class="field">
          <span class="field-name">Date of Birth:</span>
          <span class="field-value">' . $birthDateFormatted . '</span>
        </div>';

if (!empty($fullAddress)) {
    $htmlContent .= '
        <div class="field">
          <span class="field-name">Address:</span>
          <span class="field-value">' . $fullAddress . '</span>
        </div>';
}

$htmlContent .= '
      </div>

      <!-- Position Details -->
      <div class="section">
        <h3 class="section-title">Position Details</h3>
        <div class="field">
          <span class="field-name">Position:</span>
          <span class="field-value">' . escape($position) . '</span>
        </div>
        <div class="field">
          <span class="field-name">Availability:</span>
          <span class="field-value">' . escape($availability) . '</span>
        </div>
        <div class="field">
          <span class="field-name">Earliest Start Date:</span>
          <span class="field-value">' . $startDateFormatted . '</span>
        </div>';

if (!empty($desiredPay)) {
    $htmlContent .= '
        <div class="field">
          <span class="field-name">Desired Hourly Pay:</span>
          <span class="field-value">' . escape($desiredPay) . '</span>
        </div>';
}

$htmlContent .= '
      </div>

      <!-- Experience & Qualifications -->
      <div class="section">
        <h3 class="section-title">Experience &amp; Qualifications</h3>
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Previous Work Experience:</strong>
          <div class="text-box">' . escape($experience) . '</div>
        </div>';

if (!empty($education)) {
    $htmlContent .= '
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Education Background:</strong>
          <div class="text-box">' . escape($education) . '</div>
        </div>';
}

if (!empty($skills)) {
    $htmlContent .= '
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Relevant Skills:</strong>
          <div class="text-box">' . escape($skills) . '</div>
        </div>';
}

$htmlContent .= '
      </div>

      <!-- Weekly Availability Schedule -->
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
            <tr><td>Monday</td><td>' . (escape($availabilityMonday) ?: '<em>Not specified</em>') . '</td></tr>
            <tr><td>Tuesday</td><td>' . (escape($availabilityTuesday) ?: '<em>Not specified</em>') . '</td></tr>
            <tr><td>Wednesday</td><td>' . (escape($availabilityWednesday) ?: '<em>Not specified</em>') . '</td></tr>
            <tr><td>Thursday</td><td>' . (escape($availabilityThursday) ?: '<em>Not specified</em>') . '</td></tr>
            <tr><td>Friday</td><td>' . (escape($availabilityFriday) ?: '<em>Not specified</em>') . '</td></tr>
            <tr><td>Saturday</td><td>' . (escape($availabilitySaturday) ?: '<em>Not specified</em>') . '</td></tr>
            <tr><td>Sunday</td><td>' . (escape($availabilitySunday) ?: '<em>Not specified</em>') . '</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Tanning Industry -->
      <div class="section">
        <h3 class="section-title">Tanning Industry Experience</h3>
        ' . $tanningExpHtml . '
      </div>

      <!-- Additional Information -->
      <div class="section">
        <h3 class="section-title">Additional Information</h3>';

if (!empty($references)) {
    $htmlContent .= '
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">References:</strong>
          <div class="text-box">' . escape($references) . '</div>
        </div>';
}

$htmlContent .= '
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Why interested in Northern Lights Tan &amp; Wellness:</strong>
          <div class="text-box">' . escape($whyInterested) . '</div>
        </div>';

if (!empty($additionalInfo)) {
    $htmlContent .= '
        <div style="margin-bottom: 15px;">
          <strong style="color: #f97316;">Something interesting about themselves:</strong>
          <div class="text-box">' . escape($additionalInfo) . '</div>
        </div>';
}

$htmlContent .= '
      </div>
    </div>

    <div class="footer">
      <p>This application was submitted via the Northern Lights Tan &amp; Wellness website.</p>
    </div>
  </div>
</body>
</html>';

// Prepare email with multipart (for attachment support)
$boundary = md5(uniqid(time()));
$headers = "From: teri@northernlightstanspa.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

$message = "--{$boundary}\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$message .= $htmlContent;
$message .= "\r\n";

// Handle resume file upload if present
if ($resumeFile) {
    $fileTmpPath = $_FILES['resume']['tmp_name'];
    $fileName = $_FILES['resume']['name'];
    $fileSize = $_FILES['resume']['size'];
    $fileType = $_FILES['resume']['type'];

    // Validate file type
    $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!in_array($fileType, $allowedTypes)) {
        sendError('Only PDF, DOC, and DOCX files are allowed.');
    }

    // Validate file size (5MB limit)
    if ($fileSize > 5 * 1024 * 1024) {
        sendError('File size should not exceed 5MB.');
    }

    // Read file content
    $fileContent = chunk_split(base64_encode(file_get_contents($fileTmpPath)));

    // Add file attachment to email
    $message .= "--{$boundary}\r\n";
    $message .= "Content-Type: {$fileType}; name=\"{$fileName}\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n\r\n";
    $message .= $fileContent;
    $message .= "\r\n";
}

$message .= "--{$boundary}--";

// Send email
$success = mail($to, $subject, $message, $headers);

if ($success) {
    echo json_encode([
        'message' => 'Application submitted successfully!',
        'status' => 'success'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to send application. Please try again later.']);
}
?>
