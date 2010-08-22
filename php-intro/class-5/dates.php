<?php

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

?>