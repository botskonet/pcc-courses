<?php $page = array_pop(explode('/', $_SERVER['SCRIPT_FILENAME'])); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<title>PHP Includes</title>
	
	<style type="text/css">
		li { list-style: none; display: inline; }
		.at { background-color: #ccc; }
		.at a { text-decoration: none; }
	</style>
	
</head>

<body>
	
	<ul>
		<li<?php print $page == 'index.php' ? ' class="at"' : ''; ?>><a href="index.php">Home</a></li>
		<li<?php print $page == 'about.php' ? ' class="at"' : ''; ?>><a href="about.php">About Us</a></li>
	</ul>