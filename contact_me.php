<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'kontakt@linkmarketing.rs, ivan.sibinovic@yahoo.com, mladen.sibin@gmail.com'; // Add your email address 
$email_subject = "Website Contact Form:  $name";
$email_body = "Primili ste poruku sa Vašeg veb-sajta\n\n"."Pošiljalac\n\nIme: $name\n\nEmail: $email_address\n\nTelefon: $phone\n\nSadržaj poruke:\n$message";
$headers = "From: noreply@linkmarketing.rs\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
header("Location: index.html?message_sent");
return true;         
?>