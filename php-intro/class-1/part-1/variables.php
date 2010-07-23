<?php

/**
 * Variables
 */
$myvariable = 'Hello World';
print $myvariable;

/**
 * Constants
 */
define('MYCONSTANT', 'Trellis');
print MYCONSTANT;


/**
 * Data Types
 */

// Strings
$string = 'Hi';
$string = "Hi";
$string = "Hi \"Class\"";
$string = "Hi " . 'Class';
print $string;

// Ints/Floats
$value = 5;
$value = 5.5;

// Adding by 1, these all do the same thing
$value = $value + 1;
$value += 1;
$value++;

// Bools
$bool = true; // anything besides "0", false NULL is considered true
$bool = false; // zero, false, and null are considered false

// Null - no value at all
$null = null;

/**
 * Arrays
 */
$myArray = array('name' => 'Mike', 'gender' => 'Male');
print_r($myArray);

$myArray = array();
$myArray['name'] = 'Mike';

?>