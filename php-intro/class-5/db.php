<?php

$db = ADONewConnection($this->config('db_extension'));
$db->SetFetchMode(ADODB_FETCH_ASSOC);
$db->Connect('localhost','db_username','db_password','db_database');


$results = $db->Execute('SELECT * FROM table');


if($results->RecordCount()){
	while($row = $results->FetchRow()){
		
		print_r($row);
		
	}
}


?>