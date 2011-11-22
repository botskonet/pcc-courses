<?php

if(!empty($_POST)){
	if(!empty($_POST['your_name'])){
		print json_encode(array('success'=>1));
	}
}
?>