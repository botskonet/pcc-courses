
// Basic demo and example of form validation
function validate(){
	
	var errors = new Array;
	
	var fname = document.getElementById('first_name');
	if(fname != ''){
		fname.style.border = '1px solid red';
		errors.push('Please provide your first name.');
	}
	
	if(errors.length){
		
		var error_ul = document.createElement('ul');
		error_ul.setAttribute('id', 'error_message');

		for( x in errors){
			var li = document.createElement('li');
			li.innerHTML = errors[x];
			error_ul.appendChild(li);
		}

		var f = document.getElementById('elements');
		f.parentNode.insertBefore(error_ul, f);
		// https://developer.mozilla.org/en/DOM/element.insertBefore
				
	}
	
	return false;
	
}
