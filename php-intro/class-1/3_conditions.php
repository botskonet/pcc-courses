<?php

$myname = 'Mike';

// if & else
if($myname == 'Mike'){
	print 'Hello Mike';
} else {
	print 'Hello Guest!';
}


// if, elseif, else
if($myname == 'Mike'){
	print 'Hello Mike';
}
elseif($myname == 'Jay'){
	print 'Hello Jay';
} else {
	print 'Hello Guest!';
}


// switch
switch($value){
	case 'Mike':
		print 'Hey Mike!';
		break;
	default:
		print 'Hey, Guest!';
		break;
}

// ternary
$value = 'Mike';
print ($value == 'Mike' ? 'Hello Mike!' : 'Hello Guest!');

?>