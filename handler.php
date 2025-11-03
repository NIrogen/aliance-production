<?php
$user_name = htmlspecialchars($_POST["username"]);
$user_phone = htmlspecialchars($_POST["userphone"]);

$token = "8595919228:AAF1CDog6JUrnFCMWkIWOpzbGUUlnHfX9cg";
$chat_id = "-5002922365";

$formData = array(
  "Клиент: " => $user_name,
  "Телефон: " => $user_phone
);

$text = "";
foreach($formData as $key => $value) {
  $text .= $key . "<b>" . urlencode($value) . "</b>" . "%0A" ;
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");
