<?php

/**
 * Arrays
 */
$students = array('Mike', 'Bob', 'Sue');
print_r($students);

print $students[0]; // prints "Mike"
print $students[2]; // prints "Sue"

// Setting the keys

$states = array('OR' => 'Oregon', 'WA' => 'Washington');
print_r($states);

$states = array();
$states['OR'] = 'Oregon';
$states['WA'] = 'Washington';



/**
 * Loops
 */
// Using foreach with arrays
$staff = array('Mike', 'Jay');
foreach($staff as $person){
	print $person . "<br>";
}


$staff = array('Mike', 'Jay');
foreach($staff as $key => $person){
	print $key . ' ' . $person . "<br>";
}


$states = array('OR'=>'Oregon', 'WA'=>'Washington');
foreach($states as $abbr => $state){
	print $abbr . ' ' . $state . "<br>";
}

?>