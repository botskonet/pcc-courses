var aObj = {
	
	test : "methods/vars like this are public",
	
	mytest : function(){
		console.log(this.test);	
	}
}

aObj.mytest();

a2Obj = aObj;
a2Obj.mytest();

//====================

var bObj = function(){

	this.testpublic = 'I am public'; // public
	
	this.printPublic = function(){
		console.log(this.testpublic);	
	}
	
	
	
	var testprivate = 'I am private'; // public
	
	this.printPrivate = function(){
		console.log(testprivate);	
	}
	
	
	function myTest3(){ // private function
		console.log(this.test);	
	}
	
}
exObj2 = new bObj();
exObj2.printPublic();
exObj2.printPrivate();
console.log(exObj2.testpublic);
console.log(exObj2.testprivate);