<?php

if(file_exists('anotherfile.php')){
	include('anotherfile.php');
} else {
	print 'File not found!';
}

?>
