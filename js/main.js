// Anon wrapper
(function(){

	// Jquery ready
	$(function(){

		// Animate 'Back to top' link
		$('#toTop').click(function(e) {
			e.preventDefault();
			$('body,html').animate({scrollTop:0},1200);
		});


	});

}());
