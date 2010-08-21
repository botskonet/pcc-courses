<?php
	$api = file_get_contents('http://services.badbamboo.com/REST/Common.ashx?method=GetWeather&zip='.$_GET['zip']);
	$json = json_decode(str_replace(array('_cb(',')'),'',$api));
	print json_encode($json[0]);
?>