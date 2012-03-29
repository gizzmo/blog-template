// Anon wrapper
(function(){

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
		$.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?callback=?&count=1&trim_user=1&screen_name=justgiz', function(data)
		{
			// Twitter text the tweet
			var _the_tweet = twttr.txt.autoLink(data[0].text, {
				usernameIncludeSymbol: true
			}),

			// Get the relative time stamp
			_the_date = relative_time(data[0].created_at);


			// Load the tweet into the box
			$('#latest-tweet .tweet').html(_the_tweet);

			// Update the time
			$('#latest-tweet .timestamp').html(_the_date);
		});


	});

	// Convert Twitter API Timestamp to "Time Ago"
	function relative_time(time_value)
	{
		var values = time_value.split(" ");
		time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
		var parsed_date = Date.parse(time_value);
		var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
		var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
		delta = delta + (relative_to.getTimezoneOffset() * 60);

		var r = '';
		if (delta < 60) {
			r = 'a minute ago';
		} else if(delta < 120) {
			r = 'couple of minutes ago';
		} else if(delta < (45*60)) {
			r = (parseInt(delta / 60)).toString() + ' minutes ago';
		} else if(delta < (90*60)) {
			r = 'an hour ago';
		} else if(delta < (24*60*60)) {
			r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
		} else if(delta < (48*60*60)) {
			r = '1 day ago';
		} else {
			r = (parseInt(delta / 86400)).toString() + ' days ago';
		}

		return r;
	}


}());
