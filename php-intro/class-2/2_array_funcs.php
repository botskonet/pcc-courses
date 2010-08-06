<?php

$test = array('Red', 'Blue', 'Green');


if(is_array($test)){
	print 'Test is an array!';
}


if(array_key_exists(0, $test)){
	print 'Test has an array key of zero!';
}

print count($test);


$test = array_merge(array('Red', 'Yellow'), $test);
print_r($test);

array_push($test, 'purple');
print_r($test);

sort($test);
print_r($test);

?>