<?php

class MyClass {
	public function printMessage(){
		print 'the parent';
	}
}

class MyNewClass extends MyClass  {
	public function printMessage(){
		print 'the child';
	}
}

$MyClass = new MyNewClass('it worked!');
$MyClass->printMessage();

?>
