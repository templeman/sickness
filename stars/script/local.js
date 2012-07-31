$(function() {
	// randomize divs
	$("div").not('#near #far #mid #superFar').css({'position':'absolute'});

	$("div#superFar > div").each(function() {
		var posx = (Math.random() * (2500 - $(this).width())).toFixed();
		var posy = (Math.random() * (2500 - $(this).height())).toFixed();
		$(this).css({
			'left':posx+'px',
			'top':posy+'px'
		});
	});

	$("div#far > div").each(function() {
		var posx = (Math.random() * (3000 - $(this).width())).toFixed();
		var posy = (Math.random() * (3000 - $(this).height())).toFixed();
		$(this).css({
			'left':posx+'px',
			'top':posy+'px'
		});
	});

	$("div#mid > div").each(function() {
		var posx = (Math.random() * (3500 - $(this).width())).toFixed();
		var posy = (Math.random() * (3500 - $(this).height())).toFixed();
		$(this).css({
			'left':posx+'px',
			'top':posy+'px'
		});
	});

	$("div#near > div").each(function() {
		var posx = (Math.random() * (4000 - $(this).width())).toFixed();
		var posy = (Math.random() * (4000 - $(this).height())).toFixed();
		$(this).css({
			'left':posx+'px',
			'top':posy+'px'
		});
	});

var divNum = $('.shell').length,
		speeds = new Array();

function setMin() {
	var r = Math.random();
	if (r <= .2) {
		return 7;
	} else if ((r > .2) && (r <= .5)) {
		return 2;
	} else {
		return 1;
	}
}

function randomMinToMax(min, max_v) {
	var range = max_v - min + 1;
	// console.log(range);
	return Math.floor(Math.random()*range + min);
}

for(i = 0; i <= divNum; i++) {
	speeds.push(randomMinToMax(setMin(), 7));
	// console.log(speeds);
}

// randomize glow speeds
$('div#near div.ring').each(function(n) {
	$uniqueSpeed = speeds[n]/2;
	$(this).css({
		'-moz-animation-duration': $uniqueSpeed+'s',
		'-webkit-animation-duration': $uniqueSpeed+'s',
		'-ms-animation-duration': $uniqueSpeed+'s',
		'animation-duration': $uniqueSpeed+'s'
	});
});

$('div#mid div.ring, div#superFar div.ring').each(function(n) {
	$uniqueSpeed = speeds[n];
	$(this).css({
		'-moz-animation-duration': $uniqueSpeed+'s',
		'-webkit-animation-duration': $uniqueSpeed+'s',
		'-ms-animation-duration': $uniqueSpeed+'s',
		'animation-duration': $uniqueSpeed+'s'
	});
});

$('div#far div.ring').each(function(n) {
	$uniqueSpeed = speeds[n]/3;
	$(this).css({
		'-moz-animation-duration': $uniqueSpeed+'s',
		'-webkit-animation-duration': $uniqueSpeed+'s',
		'-ms-animation-duration': $uniqueSpeed+'s',
		'animation-duration': $uniqueSpeed+'s'
	});

});

	
	jQuery('#superFar, #far, #mid, #near').parallax({mouseport:'#wrapper'});



});
