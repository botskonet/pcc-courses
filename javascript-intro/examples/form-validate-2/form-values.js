
/**
 * 19 Lines
 * In pure javascript this finds all text input elements on the page and displays the values in the output div
 * 
 * Pros:
 *    - No external libraries needed, 
 *    - Uses plain javascript, no need to learn external library API
 *
 * Cons:
 *    - May not be cross-browser compatible, requires full testing
 *    - Does not wait until document has fully loaded, may add event listener too early
 *    - Longer, requires use of variables
 *
 */
function getValues(){

	document.getElementById('output').innerHTML = '';
	
	for(f = 0; f < document.forms.length; f++){
	
		var elements = document.forms[f].elements;
	
		for(i = 0; i < elements.length; i++){
		
			var elm = elements[i];
		
			if(elm.type == 'text'){
				document.getElementById('output').innerHTML += elm.value+"<br>";
			}	
		}
	}

	return false;
	
}

try{
	window.addEventListener("click", getValues, false);
} catch(err){
	var button = document.getElementById('but-pure-js');
	button.attachEvent("click", getValues, false);
}




/**
 * 6 Lines
 * In jQuery this finds all text input elements on the page and displays the values in the output div
 * 
 * Pros:
 *    - Much less user-written code
 *    - Tested to work properly in all supported browsers
 *    - Graceful error handling
 *    = Does not need to iterate forms first
 *
 * Cons:
 *    - Requires external js library
 *    - Requires understanding of that library
 *
 */
$(document).ready(function(){
	
	$('#but-jquery').click(function(){
		
		$('#output').html('');
		
		$('input[type=text]').each( function(){ $('#output').append($(this).val()+"<br>") });
	});
});