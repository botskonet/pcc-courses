<?php

date_default_timezone_set('UTC');

print time();
print "<br>";

print date("Y/m/d");
print "<br>";

print strtotime("Thursday, October 16, 2008");
print "<br>";

print date("Y/m/d", strtotime("Thursday, October 16, 2008"));
print "<br>";

print mktime(0, 0, 0, 10, 2, 2010);
print "<br>";

print date("Y/m/d", mktime(0, 0, 0, date('m')+12, date('d'), date('Y')));
print "<br>";

print date("Y/m/d", strtotime("+1 year"));
print "<br>";


// 5.2.0+
$date = new DateTime('2011-01-01');
print $date->format('Y-m-d H:i:s');
print "<br>";

$date = new DateTime('2011-01-01');
$date->add(new DateInterval('P10D'));
print $date->format('Y-m-d');
print "<br>";

$gm = gmdate('Y-m-d h:i:s a');
print $gm;
print "<br>";
$date = new DateTime($gm);
$date->setTimeZone(new DateTimeZone('America/Los_Angeles'));
print $date->format('Y-m-d h:i:s a');
print "<br>";

?>