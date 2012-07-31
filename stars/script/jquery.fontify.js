(function($) {
	$.fn.fontify = function(){
		
	// create array of possible fonts
	var fonts = ["Times New Roman", "Georgia", "Verdana", "Arial", "CarbonTypeRegular", "Syncopate", "VT323"];
	
		this.each(function() {
						   
			// pick a random index of the fonts array
			var rand_index = Math.floor(Math.random()*fonts.length);		   
			
			$(this).css('font-family', fonts[rand_index]);
		
		});
	};
	
	
}(jQuery));