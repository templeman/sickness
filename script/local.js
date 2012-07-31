$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() < 20) {
			$('nav').fadeIn();	
		} else {
			$('nav').fadeOut();
		}
	});
});
