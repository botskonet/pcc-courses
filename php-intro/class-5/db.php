<?php

require('adodb/adodb.inc.php');

$db = ADONewConnection('mysql');
$db->SetFetchMode(ADODB_FETCH_ASSOC);
$db->Connect('localhost','root','','pcc_php');

$results = $db->Execute('SELECT * FROM students ORDER BY last_name, first_name');

// $results = $db->Execute('SELECT * FROM students');
// $results = $db->Execute('SELECT * FROM students WHERE state = "VA"');

?>

<table>
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>E-mail</th>
			<th>Address</th>
			<th>City</th>
			<th>State</th>
		</tr>
<?php 
if($results->RecordCount()){
	while($row = $results->FetchRow()){
?>
	<tr>
		<td><?= $row['first_name'] ?></td>
		<td><?= $row['last_name'] ?></td>
		<td><?= $row['email'] ?></td>
		<td><?= $row['address'] ?></td>
		<td><?= $row['city'] ?></td>
		<td><?= $row['state'] ?></td>
	</tr>
<?php		
	}
} else {
?>
	<tr><td colspan="5">There were no results.</td></tr>
<?php } ?>