<?php
	$namedog = $_POST["namedog"];
	$name = $_POST["name"];
	$ves = $_POST["vess"];
	$vozr = $_POST["vozr"];
	$email = $_POST["email"];
	$kcal = $_POST["kcal"];
	$tu = $_POST["tur"];
	$be = $_POST["beef"];
	$ch = $_POST["chick"];
	$pr = $_POST["pork"];
   	$z = $_POST["zip"];
	$ca = $_POST["castr"];
	$food = $_POST["food"];
	$por = $_POST["por"];
	$sl = $_POST["sl"];
	$has = $_POST["has"];
	$ideal = $_POST["ideal"];
 	 $msg = "You received this email because you left a request for dog food.";
 	 $msg2 = "<strong>Your dog's data:</strong> " . "\n" . "
 	 <strong>Nickname:</strong> $namedog," . "\n" . "
 	 <strong>Weight:</strong> $ves," . "\n" . "
 	 <strong>Age:</strong> $vozr," . "\n" . "
 	 <strong>Daily feeding rate (calculated):</strong> $kcal kcal." . "\n" . "
 	 <strong>Email:</strong> $email" . "\n" . "
 	 <strong>ZIP code:</strong> $z" . "\n" . "
 	 <strong>Dog $castr castrated"</strong> . "\n" . "
 	 <strong>Preferences:</strong> $food" . "\n" . "
 	 <strong>The specified breed:</strong> $por" . "\n" . "
 	 <strong>Diet:</strong> $sl" . "\n" . "
 	 <strong>Health problems:</strong> $has" . "\n" . "
 	 <strong>Ideal weight:</strong> $ideal" . "\n" . "
 	 <strong>Selected flavors:</strong>" . "\n" . " $tu" . "\n" . " $be" . "\n" . " $ch" . "\n" . " $pr
 	 ";
 	 mail($email, "", $msg);
 	 mail("dogwellfed@gmail.com", "New application from the site", $msg2);
?>