<?php

$errors = array();

if(array_key_exists('first_name', $_POST)){
	
	// validate the form data
	if(!ctype_alpha($_POST['first_name'])){
		$errors[] = 'You must enter a valid first name';
	}
}

function getFieldValue($key){
	
	if(isset($_POST[$key])){
		// return $_POST[$key]; // fatal, allows script attack: "><script>alert('attack!')</script>
		// return strip_tags($_POST[$key]); // bad, allows "> to cause problems
		return htmlentities(strip_tags($_POST[$key])); // pretty safe!
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<title>Form Example</title>
	<style type="text/css">@import url('screen.css');</style>
</head>

<body>
	
	<?php if(!empty($errors)){ ?>
	<ul class="error">
		<?php foreach($errors as $error){ ?>
		<li><?php print $error; ?></li>
		<?php } ?>
	</ul>
	<?php } ?>
	
	<form action="index.php" method="post">
		<fieldset>
			<legend>Example Form</legend>
			<ul>
				<li>
					<label for="first_name">First Name</label>
					<input type="text" id="first_name" name="first_name" value="<?= getFieldValue('first_name'); ?>">
				</li>
				<li>
					<input type="submit" name="submit" value="Submit">
					<input type="reset" name="reset" value="Reset">
				</li>
			</ul>
		</fieldset>
	</form>
	
</body>
</html>