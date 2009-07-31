

function eventTest(e){
	
	var output = document.getElementById('output');
	
	output.innerHTML = e.charCode == 0 ? e.keyCode : e.charCode;
	
}