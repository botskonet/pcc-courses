<?php

$email = 'mbotsko@trellisdev.com';

print eregi("^(.*)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email);

?>