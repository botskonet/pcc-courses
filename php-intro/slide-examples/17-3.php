<?php

$conn = mysql_connect('localhost', 'root', '')
		or die ('Error connecting to mysql');
mysql_select_db('learning_db');


$query = 'SELECT * FROM partners';
$result = mysql_query($query);

while($row = mysql_fetch_array($result)){
	print "<tr>";
	print "<td>" . $row['partner_id'] . "</td>";
	print "<td>" . $row['name'] . "</td>";
	print "</tr>";
}

?>