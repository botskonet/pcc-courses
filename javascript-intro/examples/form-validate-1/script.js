function checkForm(){

	var myf = document.forms[0];
	
	for( elm in myf.elements){
		
		var element = myf.elements[elm];
	
		if( element.type == 'textarea' && element.value == ''){
			alert('invalid');
			return false;
		}
	}
}