<?php $title = 'Hello Word'; ?>
<html>
	<head>
		<title><?php print $title; ?></title>
	</head>
	<body>
		<h1><?php print $title; ?></h1>
		
		
		<p>
		<?php
		
		if($title == 'Hello World'){
			print 'This is some text for the hello world page!';
		} else {
			print 'This is some default text.';
		}
		?>
		</p>
		
		
	</body>
</html>