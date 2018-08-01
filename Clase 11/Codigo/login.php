<?php

$name=$_POST['nombrePHP'];
$password=$_POST['passwordPHP'];

if($name && $password)
{
	echo "Funciona";
}
else
{
	echo "No funciona";
}

?>