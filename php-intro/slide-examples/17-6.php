<?php
$conn = mysql_connect('localhost', 'root', '')
		or die ('Error connecting to mysql');
mysql_select_db('learning_db');

$result = mysql_query('SELECT * FROM partners');
?>

<table>
	<tr><th>Id</th><th>Name</th></tr>
<?php 
if(mysql_num_rows($result)){
	while($row = mysql_fetch_array($result)){ 
?>
	<tr>
	<td><?php print $row['partner_id']  ?></td>
	<td><?php print $row['name'] ?></td>
	</tr>
<?php
	}
} else {
?>
	<td colspan="2">No records!</td>

<?php } ?>

</table>