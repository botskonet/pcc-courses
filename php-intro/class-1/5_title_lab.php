<?php $title = 'Hello World'; ?>
<html>
	<head>
		<title><?php print $title; ?></title>
	</head>
	<body>
		<h1><?php print $title; ?></h1>
		
		<p>
		<?php if($title == 'Hello World'){ ?>
			Here is some text, for the hello world sample!
		<?php } else { ?>
			This is not the hello world page.
		<?php } ?>
		</p>
		
	</body>
</html>