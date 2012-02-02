$(function(){

	var base = $('#content article')

	for (var i = 0; i < 3; i++){
		base.clone().appendTo('#content')
	};
})
