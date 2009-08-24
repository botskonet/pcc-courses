function dualSelect(){
	
	// var options = new Array();
	// options['Oregon'] = ['Portland','Beaverton'];
	// options['Washington'] = ['Seattle','Tacoma'];
	
	var options = {
					'Oregon' : ['Portland','Beaverton'],
					'Washington' : ['Seattle','Tacoma']
				   }
	
	var first = document.getElementById('first');
	var second = document.getElementById('second');
	second.length = 0;
	
	if(first.value != ''){
		for(city in options[ first.value ]){
			city_name = options[first.value][city];
			var option = document.createElement('option');
			option.value = city_name;
			option.text = city_name;
			second.options.add(option);
		}
	} else {
		var option = document.createElement('option');
		option.text = 'Choose a state...';
		second.options.add(option);
	}
}


var select = document.getElementById('first');
try {
	select.addEventListener("change", dualSelect, false);
} catch(err){
	select.attachEvent("change", dualSelect, false);
}




function wordCount(){
	
	var word_count = document.getElementById('word_count');
	
	document.getElementById('words').innerHTML = word_count.value.split(' ').length;
	document.getElementById('words').innerHTML = word_count.value.split(/\s+/).length;
	document.getElementById('words').innerHTML = word_count.value.match(/[A-Za-z\'\-]+/g).length;
	
	document.getElementById('chars').innerHTML = word_count.value.length;
	document.getElementById('chars-left').innerHTML = (140 - word_count.value.length);
	
	if(word_count.value.length >= 140){
		word_count.value = word_count.value.slice(0,140);
	}
}


var word_count = document.getElementById('word_count');
try {
	word_count.addEventListener("keyup", wordCount, false);
} catch(err){
	word_count.attachEvent("keyup", wordCount, false);
}