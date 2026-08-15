<?php
/**
 * Future Career Hub — Contact Form Mail Handler
 *
 * SETUP (once you have Hostinger hosting + a mailbox):
 * 1. Replace TO_EMAIL below with your real Hostinger mailbox.
 * 2. Upload this file to public_html/ alongside your other site files.
 * 3. Test the form once live — if mail() doesn't deliver, ask Hostinger support to
 *    enable PHP mail(), or switch to SMTP (PHPMailer) using your mailbox's SMTP
 *    credentials from hPanel > Emails > Connect Devices.
 *
 * NOTE: the "From" header is set to the submitter's own email address (per request),
 * not a same-domain address. Some mail providers may flag or spam-box this since it
 * doesn't match Hostinger's sending domain — if delivery becomes unreliable, switch
 * to SMTP (PHPMailer) and keep the submitter's email in Reply-To only.
 */

header('Content-Type: application/json');

// ---- CONFIG: update this line ----
const TO_EMAIL = 'bdm@futurecareerhub.org.uk';
// -----------------------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function clean($v) {
    return trim(strip_tags($v ?? ''));
}

$formType   = clean($_POST['formType'] ?? 'consultation');
$email      = clean($_POST['email'] ?? '');
$phone      = clean($_POST['phone'] ?? '');
$submitIp   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$submitTime = date('Y-m-d H:i:s') . ' (server time)';

if ($formType === 'partner') {
    $businessName   = clean($_POST['businessName'] ?? '');
    $contactName    = clean($_POST['contactName'] ?? '');
    $location       = clean($_POST['location'] ?? '');
    $businessType   = clean($_POST['businessType'] ?? '');
    $yearsOperating = clean($_POST['yearsOperating'] ?? '');
    $message        = clean($_POST['message'] ?? '');

    if ($businessName === '' || $contactName === '' || $email === '' || $phone === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
        exit;
    }

    $subject = "New Partner Application — $businessName";

    $body = "New partner application from futurecareerhub website:\n\n"
        . "Business / Consultancy: $businessName\n"
        . "Contact Person: $contactName\n"
        . "Email: $email\n"
        . "Phone/WhatsApp: $phone\n"
        . "City / Country: " . ($location ?: '—') . "\n"
        . "Business Type: " . ($businessType ?: '—') . "\n"
        . "Years in Operation: " . ($yearsOperating ?: '—') . "\n"
        . "Message:\n" . ($message ?: '—') . "\n\n"
        . "— Submitted $submitTime from IP $submitIp —\n";

    $headers = "From: $contactName <$email>\r\n"
        . "Reply-To: $contactName <$email>\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n";
} else {
    $fullName     = clean($_POST['fullName'] ?? '');
    $destination  = clean($_POST['destination'] ?? '');
    $message      = clean($_POST['message'] ?? '');

    if ($fullName === '' || $email === '' || $phone === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
        exit;
    }

    $subject = "New Consultation Request — $fullName";

    $body = "New contact form submission from futurecareerhub website:\n\n"
        . "Name: $fullName\n"
        . "Email: $email\n"
        . "Phone/WhatsApp: $phone\n"
        . "Preferred Destination: " . ($destination ?: '—') . "\n"
        . "Message:\n" . ($message ?: '—') . "\n\n"
        . "— Submitted $submitTime from IP $submitIp —\n";

    $headers = "From: $fullName <$email>\r\n"
        . "Reply-To: $fullName <$email>\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n";
}

$sent = mail(TO_EMAIL, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent. Check Hostinger PHP mail() or SMTP settings.']);
}
