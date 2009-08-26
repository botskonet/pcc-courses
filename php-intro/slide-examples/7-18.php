<?php

class MyClass {
	
	private $message = 'it worked!';
	
	public function getMessage(){
		return $this->message;
	}
}

$MyClass = new MyClass;
print $MyClass->getMessage();

?>
