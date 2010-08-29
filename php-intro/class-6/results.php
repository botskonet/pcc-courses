<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<title>Form Example</title>
	<style type="text/css">@import url('screen.css');</style>
</head>

<body>
	
	<h1>Submissions</h1>
	
	<?php
	
	$db = mysql_connect('localhost', 'root', '');
	mysql_select_db('pcc_php',$db);
	$result = mysql_query('SELECT * FROM students');
	
	?>
	
	<table>
		<tr>
			<th>ID</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Email</th>
			<th>Zip</th>
		</tr>
	<?php 
	if(mysql_num_rows($result) > 0){
		while ($row = mysql_fetch_assoc($result)){ ?>
		<tr>
			<td><?= $row['id'] ?></td>
			<td><?= $row['first_name'] ?></td>
			<td><?= $row['last_name'] ?></td>
			<td><?= $row['email'] ?></td>
			<td><?= $row['zip'] ?></td>
		</tr>
	<?php
		}
	} else {
	?>
	<tr><td colspan="3">There were no results returned!</td></tr>
	<?php } ?>
	</table>
	
</body>
</html>