<?php
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

// Read JSON body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if ($data === null) {
    sendError('Invalid JSON data');
}

// Extract fields
$firstName = trim($data['firstName'] ?? '');
$lastName = trim($data['lastName'] ?? '');
$email = trim($data['email'] ?? '');
$comment = trim($data['comment'] ?? '');

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($comment)) {
    sendError('Please fill in all required fields.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendError('Please provide a valid email address.');
}

// Escape data to prevent XSS
function escape($value) {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

// Recipient email
$to = 'mdpanna600@gmail.com';
$subject = 'New Contact Form Message - ' . escape($firstName) . ' ' . escape($lastName);

// Prepare HTML email content
$htmlContent = '<!DOCTYPE html>
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
      <p>Submitted by ' . escape($firstName) . ' ' . escape($lastName) . '</p>
    </div>
    <div class="email-body">
      <div class="section">
        <h3 class="section-title">Contact Details</h3>
        <div class="field">
          <span class="field-name">Name:</span>
          <span class="field-value">' . escape($firstName) . ' ' . escape($lastName) . '</span>
        </div>
        <div class="field">
          <span class="field-name">Email:</span>
          <span class="field-value"><a href="mailto:' . escape($email) . '">' . escape($email) . '</a></span>
        </div>
      </div>
      <div class="section">
        <h3 class="section-title">Message</h3>
        <div class="comment-box">' . escape($comment) . '</div>
      </div>
    </div>
    <div class="footer">
      <p>This message was submitted via the Northern Lights Tan & Wellness website contact form.</p>
    </div>
  </div>
</body>
</html>';

// Prepare email headers
$headers = "From: teri@northernlightstanspa.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send email
$success = mail($to, $subject, $htmlContent, $headers);

if ($success) {
    echo json_encode([
        'message' => 'Thank you for your message! We will get back to you soon.',
        'status' => 'success'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to send email. Please try again later.']);
}
?>
