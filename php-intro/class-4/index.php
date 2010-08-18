<?php

require('Peregrine.php');
$clean = new Peregrine;
$clean->init();

$errors = array();

if($clean->post->keyExists('first_name')){
	
	// validate the form data
	if(!$clean->post->isName('first_name')){
		$errors[] = 'You must enter a valid first name.';
	}
	
	if(!$clean->post->isEmail('email')){
		$errors[] = 'You must enter a valid email address.';
	}
	
	if(empty($errors)){
		
		$sql = sprintf('INSERT INTO entries (first_name, email) VALUES ("%s","%s")', 
					$clean->post->getName('first_name'), 
					$clean->post->getEmail('email'));
		
		// save to our database
		$db = mysql_connect('localhost', 'root', '');
		mysql_select_db('pcc_php',$db);
		$result = mysql_query($sql);
		
		header("Location: thanks.php");
		exit;
		
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
					<input type="text" id="first_name" name="first_name" value="<?= $clean->post->getName('first_name'); ?>">
				</li>
				<li>
					<label for="email">E-mail Address</label>
					<input type="text" id="email" name="email" value="<?= $clean->post->getEmail('email'); ?>">
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