
$(document).ready(function(){
	
	$('form').submit(function(){
		
		// $('body').css('background-color', 'yellow');
	
		// if($('#field1').val() == ''){
		// 	$('#field1').css('border', '1px solid red').after('<span class="error">required</span>');
		// }
		
		$('input, select, textarea').each(function(){
			if($(this).val() == ''){
				$(this).css('border', '1px solid red').after('<span class="error">required</span>');
			}
		});
		
		return false;
	});
});