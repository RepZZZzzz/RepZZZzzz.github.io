<?php
	$namedog = $_POST["namedog"];
	 $name = $_POST["name"];
	 $ves = $_POST["vess"];
	 $vozr = $_POST["vozr"];
	 $email = $_POST["email"];
	 $kcal = $_POST["kcal"];
 	 $msg = "Здравствуйте, $name, данные вашей собаки: " . "\n" . "
 	 Кличка: $namedog," . "\n" . "
 	 Вес: $ves," . "\n" . "
 	 Возраст: $vozr," . "\n" . "
 	 Дневная норма кормления (рассчитано): $kcal kcal.
 	 ";
 	 mail($email, "Расчеты калькулятора", $msg)
?>