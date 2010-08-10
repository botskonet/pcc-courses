<?php
 
// basic function
function printMyVariable($myvariable){
	print $myvariable; 
}
printMyVariable('Hello World');


// basic function with local variable
function testScope(){
	$myvariable = 'it worked';
	return $myvariable;
}
print testScope();


// basic function with argument
function testArg($mytext){
	print $mytext;
}
testArg('Hello Class!');


// Lab:
function multiply($a, $b){
	return $a * $b;
}

print multiply(5,5);
print multiply(12,12);

?>