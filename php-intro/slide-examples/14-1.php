<?php

$url = 'http://www.trellisdev.com/index.php';

preg_match('/www\.(.*)\.(.*)\/(.*)$/', $url, $matches);
print 'domain: ' . $matches[1] . '<br>';
print 'tld: ' . $matches[2];

?>