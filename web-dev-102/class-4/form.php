<?php
// phpinfo
// phpinfo();

/**
 * Variables
 */
// strings
// $myvariable = 'Hello World';
// print $myvariable;

// Ints/Floats
// $value = 5;
// $value = 5.5;

// Bools
// $bool = true; // anything besides "0", false NULL is considered true
// $bool = false; // zero, false, and null are considered false


/**
 * Conditions
 */
// $myname = 'Mike';

// if & else
// if($myname == 'Mike'){
// 	print 'Hello Mike';
// } else {
// 	print 'Hello Guest!';
// }

// Condition lab
// $a = rand(0, 10);
// if($a <= 5){
// 	print 'My variable is less than five';
// } else {
// 	print 'My variable is greater than five';
// }


/**
 * Arrays
 */
// $students = array('Mike', 'Bob', 'Sue');
// print_r($students);
// or
// $states = array();
// $states['OR'] = 'Oregon';
// $states['WA'] = 'Washington';


/**
 * Superglobals: POST
 */

// basic dump
// print '<pre>'; // simply to make print_r look better without viewing source
// print_r($_POST);
// print '</pre>';

if(!empty($_POST)){
	
	if(!empty($_POST['your_name'])){
		print json_encode(array('success'=>1));
	}
}
?>