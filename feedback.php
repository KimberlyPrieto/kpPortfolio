<?php
 $visitor  = $_POST['visitor'];
 $visitdate    = $_POST['visitDate'];
 $ftopic    = $_POST['ftopic'];
 $rating   = $_POST['rating'];
 $destination_email = "kkp2454@rit.edu,jim.habermas@rit.edu";
$email_subject = "<< Brooklyn, New York >>  - << Prieto, Kimberly >>";
$email_body = "Visitor name  $visitor\n";
$email_body .= "Date Visited $visitDate\n";
$email_body .= "Favorite Topic $ftopic\n";
$email_body .= "\nRating -> $rating\n";

mail($destination_email, $email_subject, $email_body);
echo "Data Sent\n";
echo "Email looks like -->  $email_body";
?>