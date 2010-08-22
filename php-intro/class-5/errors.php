<?php

// Turns on all errors, allows them to be printed to the page
// DO NOT USE IN LIVE SITE!
error_reporting(E_ALL);
ini_set('display_errors', true);

// Backtrace

// Exceptions:
// try {
//   throw new Exception("I am a custom error message from your code");
// } catch (Exception $e) {
//   echo "An error occurred: ".$e->getMessage();
// }


// Catching normal errors
function myerrors($number, $message, $file, $line){
	print '<pre>';
	print 'Error #'.$number.' - '.$message.' on file '.$file.', line '.$line."\n\n";
	debug_print_backtrace();
	print '</pre>';
	exit;
}
set_error_handler('myerrors');


// This causes a parse error:
// print $_GET['nothere'];
trigger_error('I\'m just testing the errors.');


?>