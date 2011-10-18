
$(function(){
	

	/* ---- Working with attributes ---- */
	
	// read the class
	//console.log( $('p').attr('class') );
	
	// set the class
	// $('p').attr('class', 'sel');
	
	// remove an attribute
	//$('p').removeAttr('class');
	
	// Adding a class
	// $('p').addClass('sel');
	
	// Remove class
	// $('p').removeClass('sel');
	
	// Data attributes
	// $('p').data('info', 'val');
	
	// console.log( $('p').data('info') );
	
	
	/* ---- Traversal ---- */
	
	// Children
	// console.log( $('section:eq(0)').children() );
	
	// Closest (the same as  .parents('article:eq(0)') )
	// console.log( $('section:eq(0)').closest('article') );
	
	// Find
	// console.log( $('section:eq(0)').find('h1') );
	
	// Next
	// console.log( $('section:eq(0)').next() );
	
	// NextAll
	// console.log( $('section:eq(0)').nextAll() );
	
	// NextUntl
	// console.log( $('section:eq(0)').nextUntil('.divs') );
	
	// Parent
	// console.log( $('section:eq(0)').parent() );
	
	// Siblings
	// console.log( $('section:eq(1)').siblings() );
	
	// Prev
	// console.log( $('section').prev() );
	
	// Remember, CHAIN!
	// $('a').next('p').addClass('sel');
	
	// Iterating Children
	// $('section:eq(0)').children().each(function(){
	// 		$(this).addClass('sel');
	// 	});
	
	// LAB: Combining selectors
	// Starting with the H1 only, highlight all children in the next section
	// $('h1').parent().next().children().addClass('sel')
	
	
	
	/* ---- Events ---- */
	
	
	// Scroll
	// $(window).scroll(function(){
	// 		console.log( $(document).scrollTop() );
	// 	});
	
	// Resize
	// $(window).resize(function(){
	// 		console.log( $(document).width() );
	// 	});
	// see: http://benalman.com/code/projects/jquery-resize/docs/files/jquery-ba-resize-js.html
	
	
	// focus, change, submit, select, blur
	
	// Form field focus
	// $('input').focus(function(){
	// 		$(this).addClass('sel');
	// 	});
	
	// Blur form field focus
	// $('input').blur(function(){
	// 		$(this).addClass('sel');
	// 	});
	
	// Change
	// $('select').change(function(){
	// 		$(this).addClass('sel');
	// 	});
	
	// Text selection event
	// $('input').select(function(){
	// 		$(this).addClass('sel');
	// 	});
	
	// Form submission
	// $('form').submit(function(){
	// 		$(this).addClass('sel');
	// 		return false;
	// 	});
	
	// Key down (once a key is pressed)
	// $('input').keydown(function(){
	// 		console.log('fired');
	// 	});
	
	// Key press, fires with every character insertion
	// $('input').keypress(function(){
	// 	console.log('fired');
	// });
	
	// Hover
	// $('p').hover(
	// 		function(){
	// 			$(this).addClass('sel');
	// 		},
	// 		function(){
	// 			$(this).removeClass('sel');
	// 		}
	// 	);
	
	
	
	/* ---- Manipulation ---- */
	
	var el = $('<div class="sel" />');
	
	// Pre/Appending an element
	// $('h1').prepend( el );
	// $('h1').append( el );
	
	// AppendTo
	// el.appendTo('h1');
	
	// Before
	// $('h1').before( el );
	
	// After
	// $('h1').after( el );
	
	// Insert After
	// el.insertAfter('h1');
	
	// Wrap
	// $('h1').wrap(el);
	
	// Empty
	// $('a').empty();
	
	// Remove
	// $('a').remove();
	
	// [LAB] Clone, hide it, add to dom, fade in
	// $('h1').clone().hide().insertAfter('h1').fadeIn();
	
	
	/* ---- Event Bubbling ---- */
	
	// Event Bubbling Example:
	// $('h1').click(function(){
	// 		// do nothing
	// 	});
	
	// This stops the bubble:
	// $('h1').click(function(e){
	// 	// do nothing
	// 	e.stopPropagation();
	// });
	
	// $('section').click(function(){
	// 	alert('oops');
	// });
	
	
	/* ---- Live / Delegate ---- */
	
	var new_elem = $('<p>My Test</p>');
	
	// Solution 1: If building the element new, attach a click event
	// new_elem.click(function(){ alert('hi'); });
	// $('h1').after( new_elem );
	
	// or
	
	// Solution 2: Use Live
	
	// $('h1+p').live('click', function(){
	// 	alert('hi');
	// });
	// $('h1').after( new_elem );
	
	// or
	
	// Solution 3: (better) Delegate
	
	// $('section').delegate('h1+p', 'click', function(){
	// 	alert('hi');
	// });
	// $('h1').after( new_elem );
	
	// LAB: Adding a P that when clicked duplicates itself
	// $('section').delegate('p', 'click', function(){
	// 		$(this).clone().insertAfter(this);
	// 	});
	
});