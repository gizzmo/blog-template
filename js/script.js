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



	});



}(window.jQuery))
