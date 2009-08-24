

// exObj = {}
// exObj.setColor = function(){
// 	
// 	var test;
// 	
// 	this.test = 'hello';
// 	console.log(this.test);
// 	
// 	//console.log(self);
// 	
// 	
// 	//document.body.style.backgroundColor = 'purple';
// }
// 
// 
// exObj.setColor();

var aObj = {
	
	test : "mystring",
	
	mytest : function(){
		console.log(this.test);	
	}
}

console.log( aObj.test );
aObj.mytest();

//====================

// var myObj = function(){
// 
// 	this.test = 'string';
// 	
// 	this.myTest = function(){
// 		console.log(this.test);	
// 	},
// 	
// 	myTest2 : function(){
// 		console.log(this.test);	
// 	}
// 	
// }
// exObj2 = new myObj();
// exObj2.myTest();
// exObj2.myTest2();