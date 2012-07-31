$(function() {

	var d 		 = 30,
			divNum = 48,
			speeds = new Array();

	function setMin() {
		var r = Math.random();
		if (r <= .2) {
			return 5;
		} else if ((r > .2) && (r <= .5)) {
			return 500;
		} else {
			return 100;
		}
	}

	function randomMinToMax(min, max_v) {
		var range = max_v - min + 1;
		// console.log(range);
		return Math.floor(Math.random()*range + min);
	}

	for(i = 0; i <= divNum; i++) {
		speeds.push(randomMinToMax(setMin(), 50));
		// console.log(speeds);
	}

	$('.container > div:not(#trees)').css({
		'-moz-animation-name': 'rotate',
 		'-moz-animation-duration': d+'s',
 		'-moz-animation-timing-function': 'linear',
 		'-moz-animation-delay': '0s',
 		'-moz-animation-iteration-count': 'infinite', 
		'-webkit-animation-name': 'rotate',
 		'-webkit-animation-duration': d+'s',
 		'-webkit-animation-timing-function': 'linear',
 		'-webkit-animation-delay': '0s',
 		'-webkit-animation-iteration-count': 'infinite', 
		'-ms-animation-name': 'rotate',
 		'-ms-animation-duration': d+'s',
 		'-ms-animation-timing-function': 'linear',
 		'-ms-animation-delay': '0s',
 		'-ms-animation-iteration-count': 'infinite',
		'animation-name': 'rotate',
 		'animation-duration': d+'s',
 		'animation-timing-function': 'linear',
 		'animation-delay': '0s',
 		'animation-iteration-count': 'infinite'
	});

	$('.container > div:not(#trees)').each(function(n) {
		// console.log(speeds[n]+'s');
		$(this).css({
			'-moz-animation-duration': speeds[n]+'s',
			'-webkit-animation-duration': speeds[n]+'s',
			'-ms-animation-duration': speeds[n]+'s',
			'animation-duration': speeds[n]+'s'
		});
	});

});
