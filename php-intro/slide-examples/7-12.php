<?php

class MyClass {
	
	private $message;
	
	public function __construct(){
		$this->message = 'it worked!';
	}
	
	public function printMessage(){
		print $this->message;
	}
}

$MyClass = new MyClass;
$MyClass->printMessage();

?>
