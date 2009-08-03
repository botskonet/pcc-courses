
/**
 * 24 Lines
 * Basic javascript XHR request script, loads response into div
 */
function callAjax(){
	
	var xhr;
	
	// code for IE7+, Firefox, Chrome, Opera, Safari
	if (window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}
	else if (window.ActiveXObject){
		// code for IE6, IE5
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
	}
	
	xhr.onreadystatechange = function(){

		if(xhr.readyState == 4){
			
			var op =  document.getElementById('output');
			op.innerHTML = xhr.responseText;
				
		}
	}
	
	xhr.open("GET","fake-resp.html",true);
	xhr.send(null);
	
}

var ajax = document.getElementById('ajax');
try{
	ajax.addEventListener("click", callAjax, false);
} catch(err){
	ajax.attachEvent("click", callAjax, false);
}


/**
 * 5 Lines
 * Basic jquery XHR load request script, loads response into div
 */
$(document).ready(function(){
	$('#j-ajax').click(function(){
		$("#output").load("fake-resp.html");
	});
});