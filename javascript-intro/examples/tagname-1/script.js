
function highlight(){
	
	var elm = document.getElementsByTagName('p');

	for( x in elm){
		if(elm[x].style){
			elm[x].style.border = '1px solid blue';
		}
	}
}