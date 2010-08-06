<?php

session_start();

if(array_key_exists('curtime', $_SESSION)){
	print $_SESSION['curtime'];
}

?>