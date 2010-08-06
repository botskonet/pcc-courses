<?php

session_start();

if(!array_key_exists('curtime', $_SESSION)){
	$_SESSION['curtime'] = date('Y-m-d H:i:s');
}

?>