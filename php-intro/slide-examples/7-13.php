<?php

class MyClass {
	
	private $message;
	
	public function __construct($message_arg){
		$this->message = $message_arg;
	}
	
	public function printMessage(){
		print $this->message;
	}
}

$MyClass = new MyClass('it worked!');
$MyClass->printMessage();

?>
