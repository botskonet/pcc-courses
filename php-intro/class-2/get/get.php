<pre>
<?php
if(!empty($_GET)){

	// let's say the user is going to load a "next step" page based on the input value.
	// WARNING: NEVER EVER EVER DO THIS!
	include($_GET['next_page']);
	
}
?>
</pre>