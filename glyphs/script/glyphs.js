$(function() {

	// Generate random unicode glyphs
	var totalGlyphs = 70;
	var glyphCodes = new Array();
	for(j = 0; j <= totalGlyphs; j++) {
		var rand1 = Math.round(Math.random()*9);
		var rand2 = Math.round(Math.random()*9);
		var rand3 = Math.round(Math.random()*9);
		var newGlyph1 = '&#' + rand1 + rand2 + rand3;
		var newGlyph2 = '&#' + rand1 + rand2;
		var newGlyph3 = '&#' + rand1;
		
		(Math.random() < .8) ? newGlyph = newGlyph1 : newGlyph = '&nbsp;';
		//newGlyph2 || newGlyph3 || 
		// Populate the glyph array
		glyphCodes.push(newGlyph);
		//console.log(glyphCodes);
	}

	function getRandIndex() {
		var rand_index = Math.ceil(Math.random()*glyphNum);
		return rand_index;
		//console.log(rand_index);
	}

	var glyphNum = glyphCodes.length - 1;
	//console.log(glyphNum);
				
	for(i = 0; i <= glyphNum; i++) {
		//var rand_index = Math.ceil(Math.random()*glyphNum);
		var glyphDiv = $('<span>' + glyphCodes[getRandIndex()] + '</span>').attr('class', 'glyph');
		$('#sentence').append(glyphDiv);
	}
		 
	setInterval(
		function () {
			//for(k = 0; k <= 20; k++) {
			$(".glyph:nth-child(" + getRandIndex() + ")")
			.html('<span>' + glyphCodes[getRandIndex()] + '</span>');
			//}
		},
		70
	);

});
