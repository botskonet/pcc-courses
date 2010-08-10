<?php

// Basic class
class MyClass {

	function printText(){
		print 'it worked!';
	}
}
$MyClass = new MyClass;
$MyClass->printText();



// Complete example of healthy class
class MyClass {
	
	protected $areacode;
	protected $prefix;
	protected $suffix;
	
	public function __construct($phone){
		if(strlen($phone) == 10){
			$this->areacode = substr($phone, 0, 3);
			$this->prefix = substr($phone, 3, 3);
			$this->suffix = substr($phone, 6, 4);
		}
	}
	
	public function printPhone(){
		printf('%s-%s-%s', $this->areacode, $this->prefix, $this->suffix);
	}
}

$myclass = new MyClass('5031234567');
$myclass->printPhone();

?>