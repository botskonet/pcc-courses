
/**
 * 23 Lines
 * In pure javascript this finds all text input elements on the page and displays the values in the output div
 * 
 * Pros:
 *    - No external libraries needed, 
 *    - Uses plain javascript, no need to learn external library API
 *    - Uses event listeners to keep javascript out of HTML
 *
 * Cons:
 *    - May not be cross-browser compatible, requires full testing
 *    - Does not wait until document has fully loaded, may add event listener too early
 *    - Longer, requires use of variables
 *    - Need to use different event listening methods for different browsers
 *
 */
function getValues(){

	document.getElementById('output').innerHTML = '';
	
	for(f = 0; f < document.forms.length; f++){
	
		var elements = document.forms[f].elements;
	
		for(i = 0; i < elements.length; i++){
		
			var elm = elements[i];
		
			if(elm.type == 'text' || elm.type == 'textarea'){
				document.getElementById('output').innerHTML += elm.name + ': ' + elm.value+"<br>";
			}
			
			if(elm.type == 'select-one'){
				document.getElementById('output').innerHTML += elm.name + ': ' + elm.options[elm.selectedIndex].value+"<br>";
			}	
		}
	}

	return false;
	
}

var getvals = document.getElementById('getvals');
try{
	getvals.addEventListener("click", getValues, false);
} catch(err){
	getvals.attachEvent("click", getValues, false);
}




/**
 * 6 Lines
 * In jQuery, this finds all text input elements on the page and displays the values in the output div
 * 
 * Pros:
 *    - Much less user-written code
 *    - Use of CSS selectors, which web devs also need to know
 *    - Tested to work properly in all supported browsers
 *    - Graceful error handling
 *    - No javascript inside of HTML required
 *    - One event listener for all browsers
 *
 * Cons:
 *    - Requires external js library (jQuery)
 *    - Requires understanding of that library
 *
 */
$(document).ready(function(){
	
	$('#j-getvals').click(function(){
		
		$('#output').html('');
		
		$('input[type!=submit], textarea, select').each( function(){ $('#output').append(this.name + ': ' + $(this).val()+"<br>") });
	});
});