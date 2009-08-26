<?php

$conn = mysql_connect('localhost', 'root', '')
		or die ('Error connecting to mysql');
mysql_select_db('learning_db');


$query = 'SELECT * FROM partners';
$result = mysql_query($query);

while($row = mysql_fetch_array($result)){
?>
	<tr>
	<td><?php print $row['partner_id']  ?></td>
	<td><?php print $row['name'] ?></td>
	</tr>
<?php
}

?>