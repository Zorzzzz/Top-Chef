<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // ✨ غيرها وحط إيميلك انت
    $to = "YOUR_EMAIL@example.com";  
    $subject = "📬 Feedback جديد من $name";
    $body = "الاسم: $name\nالبريد: $email\n\nالرسالة:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ شكراً! تم إرسال رسالتك بنجاح.";
    } else {
        echo "❌ حصل خطأ أثناء الإرسال، حاول تاني.";
    }
}
?>
