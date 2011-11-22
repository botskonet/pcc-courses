var v = {
	errors: 0,
	rules: {
		'email': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		'url': /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
	},
	is_valid: function( form ){
		v.errors = 0;
		$(form).find('.required').each(function(){
			var elem = $(this), rule = v.rules[ elem.data('valid') ];
			if(elem.val() == '' || (typeof rule !== 'undefined' && !rule.test( elem.val() )) ){
				v.errors++;
				elem.css('border','1px solid red');
			}
		});
		return !this.errors;
	}
}



$(function(){
	
	$('.frm-success').hide();
	
	// Override the form submit function and instead pass all of it's data
	$('#contact-us form').submit(function(){
		if(v.is_valid( this )){
			$.post('form.php', $('#contact-us form').serialize(), function(json){
					// On successful return from server, we need to slide up the contact form.
					// display the success message (delayed until after the contact slide is
					// is finised) and then close the success message, reset the link color
					if(json.success == 1){
						$('#contact-us').slideUp(500, function(){
							$('.frm-success').slideDown().delay(7000).slideUp(500, function(){
								$('#contact').css('background-color','#2B393C');
							});
						});
					}
				}, 'json'
			);
		}
		return false;
	});
	
	// Previous class/filler script:

	// Display the contact form when the link is clicked
	$('#contact a').click(function(){
		if($('#contact-us').is(':visible')){
			$(this).parent().css('background-color','#2B393C');
		} else {
			$(this).parent().css('background-color','#4A626F');
		}
		$('#contact-us').slideToggle();
		return false;
	});
	// Gray-out the contact form when the navigation items are hovered
	$('#nav li:not(li#contact)').hover(function(){
		$('#contact-us,.form-msg').css('opacity','0.5');
	},	function(){
		$('#contact-us,.form-msg').css('opacity','1');
	});

});