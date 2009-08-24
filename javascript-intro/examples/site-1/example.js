
var jsExampleSuite = function(){

	// Highlights all anchors on the page
	this.highlightAnchors = function(){
		
		var page = document.getElementById('page');
		var anchors = page.getElementsByTagName('a');
		
		for( x in anchors){
			if(anchors[x].style){
				anchors[x].style.background = '#CDCF19';
				anchors[x].style.color = '#000';
			}
		}
		
		//$('#page a').css('color', '#000').css('background', '#CDCF19'); // jQuery Syntax
	}
	
	// Lists all image source attributes in a new div
	this.listImages = function(){

		var images = document.getElementsByTagName('img');
		
		for( x in images){
			if(images[x].src){
				printImgSrc(images[x].src);
			}
		}
		
		//$('img').each( function(){ printImgSrc(this.src); }); // jQuery Syntax
	}
	
	// private function for use with the list images function
	function printImgSrc(src){
		
		var d = document.createElement('div');
		d.innerHTML = src;
		
		var content = document.getElementById('content');
		content.parentNode.insertBefore(d, content);
		
		//$('#content').prepend('<div>'+src+'</div>'); // jQuery Syntax
		
	}
	
	
	// Allows the user to specify the css color
	this.personalize = function(){
		
		var color = prompt('Enter a color (i.e. red, blue, yellow, etc...)');
		
		var paras = document.getElementsByTagName('p');
		
		for( x in paras){
			if(paras[x].style){
				paras[x].style.color = color;
			}
		}
		
		//$('p').css('color', color); // jQuery Syntax
	}
	
	// Toggles display of the sidebar
	this.toggleSidebar = function(){
		
		var sidebar = document.getElementById('sidebar');

		// We use a single-line conditional (ternary) since it's simple.
		sidebar.style.display = (sidebar.style.display == 'none' ? 'block' : 'none');
		
		$('#sidebar').toggle(); // jQuery Syntax
		
	}
}


// With this we assign event listeners to our menu anchors
$(document).ready(function(){
	var jsEx = new jsExampleSuite();
	$('#highlight-anchors').click(function(){ jsEx.highlightAnchors(); return false; });
	$('#list-images').click(function(){ jsEx.listImages(); });
	$('#personalize').click(function(){ jsEx.personalize(); return false; });
	$('#toggle-sidebar').click(function(){ jsEx.toggleSidebar(); return false; });
});