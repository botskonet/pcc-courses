<?php

$a = 0;
$b = 1;


/**
 * Operators
 * ==, ===, !=, >/>=, </<= AND/&& OR/||
 */

if($a == 0 && $b == 1){}

if($a == 0 || $b == 1){}

if($a != 1){}

if($a < 1){}

if($a <= 1){}

if($a > 1){}

if($a >= 1){}


/**
 * Strict comparisons
 */

if($a){} // false, zero values equate to false
if(!$a){} // (if $a is a false) true

if($b){} // true, numbers/text are seen as true


if($a === false){} // false, because $a is 0
if($a === 0){} // true

if(1 == '1'){}  // true, because datatype is ignored
if(1 === '1'){}  // false, because datatype must match

?>