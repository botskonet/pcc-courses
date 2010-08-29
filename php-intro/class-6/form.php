<?php

ini_set('display_errors', true);
error_reporting(E_ALL);

if(!empty($_POST)){
	
	$sql = sprintf('INSERT INTO students (first_name, last_name, email, zip) VALUES ("%s","%s","%s","%s")', 
				$_POST['first_name'], 
				$_POST['last_name'],
				$_POST['email'],
				$_POST['zip']);
	
	// save to our database
	$db = mysql_connect('localhost', 'root', '');
	mysql_select_db('pcc_php',$db);
	$result = mysql_query($sql);
	
	if($result){
		header("Location: thanks.html");
		exit;
	}
}
?>