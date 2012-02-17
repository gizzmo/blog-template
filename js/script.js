// Anon wrapper
(function($){

	// Jquery ready
	$(function(){

		// Highlight comments via location.hash
		$(window).bind('hashchange', function(){
			// start with removing all the highlighting
			$('.highlighted').removeClass('highlighted');

			// then add the new one
			if ( location.hash && location.hash.match(/^#comment-\d+$/) ){
				$(location.hash).addClass('highlighted');
			}
		})

		// Animate 'Back to top' link
		$('#toTop').click(function(e) {
			e.preventDefault();
			$('body,html').animate({scrollTop:0},1200);
		});


	});



}(window.jQuery))
