<?php


/**
 * Remeber to set permissions of the data.txt file to 777.
 */

$fp = fopen('data.txt', 'w');
fwrite($fp, 'Bob');
fclose($fp);

$fp = fopen('data.txt', 'r');
$contents = fread($fp, filesize('data.txt'));
fclose($fp);

print $contents;


?>