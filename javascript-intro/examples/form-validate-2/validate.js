
// Basic demo and example of form validation
function validate(){
	
	// Begin array of errors, which at the moment is empty
	var errors = new Array;
	
	/**
	 * VALIDATION RULES
	 */
	
	// Grab the first name field, check if it's empty
	var fname = document.getElementById('first_name');
	if(fname.value == ''){
		fname.style.border = '1px solid red';
		errors.push('Please provide your first name.');
	}
	
	// Grab the last name field, check if it's empty
	var lname = document.getElementById('last_name');
	if(lname.value == ''){
		lname.style.border = '1px solid red';
		errors.push('Please provide your last name.');
	}
	
	// Grab the email field, check if it's empty
	var email = document.getElementById('email');
	if(email.value == ''){
		email.style.border = '1px solid red';
		errors.push('Please provide your email address.');
	}
	
	// Grab the state field, check if it's empty
	var state = document.getElementById('state');
	if(state.value == 1){
		state.style.border = '1px solid red';
		errors.push('Please choose a state.');
	}
	
	// Grab the web address field, check if it's empty
	var website = document.getElementById('website');
	if(website.value == '' || website.value == 'http://'){
		website.style.border = '1px solid red';
		errors.push('Please provide a website address.');
	}
	
	// Grab the gender radio fields, check if none selected empty
	var gender = document.forms[0].gender;
	if( typeof(gender.value) == 'undefined' ){
		document.getElementById('li_6').style.border = '1px solid red';
		errors.push('Please choose a gender.');
	}
	
	// Grab the skills checkbox fields, check if none selected empty
	var skills = document.forms[0].skills;
	console.log(skills);
	if( typeof(skills.value) == 'undefined' ){
		document.getElementById('li_7').style.border = '1px solid red';
		errors.push('Please choose a skill.');
	}
	
	
	// If the errors array has a length (size), it's not empty
	// Which means we need to display errors
	if(errors.length){
		
		// We use the document object to create a new HTML element
		// which in this case, is an Unordered List
		// http://www.w3schools.com/tags/tag_ul.asp
		var error_ul = document.createElement('ul');
		error_ul.setAttribute('id', 'error_message');

		// For every error set, we create a new list item
		// and append it to our UL
		// http://www.w3schools.com/tags/tag_li.asp
		for( x in errors){
			var li = document.createElement('li');
			li.innerHTML = errors[x];
			error_ul.appendChild(li);
		}

		// Then, we grab the elements div, find it's parent
		// and then ask the parent to insert our UL before the elements div
		var f = document.getElementById('elements');
		f.parentNode.insertBefore(error_ul, f);
		// https://developer.mozilla.org/en/DOM/element.insertBefore
				
	}
	
	return false;
	
}
