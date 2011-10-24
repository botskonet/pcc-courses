$(function(){
	
	$('.frm-success').hide();
	
	// Override the form submit function and instead pass all of it's data
	$('#contact-us form').submit(function(){
		
		// Validation to be replaced by plugin next class
		
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
	// handle li:hover for IE, which is really only for IE<=6
	if($.browser.msie){
		$('#nav>li').hover(
			function(){
				$(this).find('ul').show()
			},
			function(){
				$(this).find('ul').hide()
			}
		);
	}
});