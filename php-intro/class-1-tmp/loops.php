<?php

$i = 1;
while($i <= 10){
	print $i;
	$i++;
}


for($i = 1; $i <= 10; $i++){
	print $i;
}


$staff = array('Mike', 'Jay');
foreach($staff as $person){
	print $person . "<br>";
}


$staff = array('Mike', 'Jay');
foreach($staff as $key => $person){
	print $key . ' ' . $person . "<br>";
}


$states = array('OR'=>'Oregon', 'WA'=>'Washington');
foreach($states as $abbr => $state){
	print $abbr . ' ' . $state . "<br>";
}

?>
