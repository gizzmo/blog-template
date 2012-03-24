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


		// Latest Tweet
		$.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?callback=?&count=1&trim_user=1&screen_name=justgiz', function(data){
			// Twitter text the tweet
			var _the_tweet = twttr.txt.autoLink(data[0].text, {
				usernameIncludeSymbol: true
			});

			// Load the tweet into the box
			$('#latest-tweet .tweet').html(_the_tweet);
		});


	});


}(window.jQuery))
