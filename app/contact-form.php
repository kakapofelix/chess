<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "erdos@viktorchess.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an email from ".$name.".\n\n".$message;

	header("Location: contact.php?mailsend");
	if(mail($mailTo, $txt, $header)) 

	{
		echo "Message was sent successfully ";
		}
		else
		{
		echo "Message was not sent, please try again later";
	}
}
