<?php

class MyClass {
	
	private $message = 'it worked!';
	
	public function printMessage(){
		print $this->message;
	}
}

$MyClass = new MyClass;
$MyClass->printMessage();

?>
