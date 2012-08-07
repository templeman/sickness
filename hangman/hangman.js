// a custom replace function of some kind
String.prototype.replaceAt=function(index, char) {
	return this.substr(0, index) + char + this.substr(index+char.length);
}

$(function() {

	/*** initialize variables ***/
	var pageWidth = $(document).width(),
			pageHeight = $(document).height(),

			// DOM elements
			phrase = $('div#phrase'),
			letters = $('div.letters dl'),
			alphabet = $('div#alphabet'),
			commentBlock = $('div#comments'),
			answerAttempt = $('input#answerArea'),
			answer = $('div#answer'),
			container = $('div#container'),
			victim = $('div#victim'),
			overlay = $('div#dimScreen'),
			reincarnate = $('li#newGame'),
			game = $('div#game'),
			oblivion = $('li#quit'),
			buttons = $('ul#buttons'),
			overlayMessages = $('div#overlayMessages'),
			overlaySubMessages = $('div#overlaySubMessages'),
			skipLink = $('div#skipLink>a'),
			statusBar = $('div#statusWrapper'),
			reincarnationCount = $('dd.reincarnationCount'),
			score = $('dd.score'),

			// other elements
			errors = 0,
			correct = 0,
			answerIndex = "",
			frontQuote = "",
			frontCitation = "",
			canPlay = false,
			canComment = false,

			// arrays
			phrases = [],
			prices = [],
			suggestion = [],
			already = [],
			opening = [],
			opencitation = [],
			comments = [],
			comment = [],
			correctArray = [],
			correctComments = [],

			// easter egg!
			easterEgg = {},

			// media elements
			ropecreak = document.getElementsByTagName("audio")[0],
			bodyfall = document.getElementsByTagName("audio")[1],
			source1 = document.createElement('source'),
			source2 = document.createElement('source');

		// set button data to not-yet-clicked
		$(".button").data('clicked', false);

	// detect codec support and append source tags
	if (ropecreak.canPlayType('audio/mpeg;')) {
		source1.type = 'audio/mpeg';
		source1.src = 'audio/ropecreak.mp3';
		source2.type = 'audio/mpeg';
		source2.src = 'audio/bodyfall.mp3';
	} else if (ropecreak.canPlayType('audio/ogg;')) {
		source1.type = 'audio/ogg';
		source1.src = 'audio/ropecreak.ogg';
		source2.type = 'audio/ogg';
		source2.src = 'audio/bodyfall.ogg';
	} else if (ropecreak.canPlayType('audio/wav;')) {
		source1.type = 'audio/wav';
		source1.src = 'audio/ropecreak.wav';
		source2.type = 'audio/wav';
		source2.src = 'audio/bodyfall.wav';
	}
	
		ropecreak.appendChild(source1);
		bodyfall.appendChild(source2);
	
	// grab hangman data
	$.ajax({
		type: "GET",
		url: "hangman.xml",
		dataType: "xml",
		success: parseXML
	});
	

	/*** click handlers ***/
	oblivion.click(function(){
		$(this).detach();
		ropecreak.pause();
		reincarnate.detach();
		overlayMessages.text("");
		overlaySubMessages.text("");
		overlay.css('background', '#fcfcfc');
		overlay.animate({ 
			backgroundColor: "#000000"
		}, 'fast', function() {
			$(this).hide(); 
		});
		$('body').append($('<canvas id="pixie"></canvas>'));
		$(function() { new pixies(); });
	});
	
	reincarnate.click(function() {
		var reincarnationNum = parseInt(reincarnationCount.text());
		reincarnationCount.text(reincarnationNum + 1);
		reset();
	});

	skipLink.click(function(e) {
		e.preventDefault();
		overlay.css('display', 'none');
		newRound();
	});


	/*** functions ***/

	function parseXML(xml) {
		// find every element in XML and load it
		// into its corresponding array
		$(xml).find("phrase").each(function(i) {
			phrases.push($(this).find("body").text());
			prices.push($(this).find("value").text());
			opening.push($(this).find("opening").text());
			opencitation.push($(this).find("opencitation").text());
			comments[i] = new Array();
			$(this).find("wrong").find("*").each(function(j) {
				comments[i][j] = $(this).text();
			});
			correctArray[i] = new Array();
			$(this).find("correct").find("*").each(function(j) {
				correctArray[i][j] = $(this).text();
			});
		});
		$(xml).find("alreadyPicked").each(function(i) {
			$(this).find("*").each(function(j) {
				already.push($(this).text());
			});
		});
		$(xml).find("egg").each(function(i) {
			easterEgg[$(this).find("query").text()] = $(this).find("response").text();
		});
		intro();
	}

	function intro(){
		// randomly pick a [new] answer from the phrases list
		answerIndex = Math.floor(Math.random()*phrases.length);
		frontQuote = opening[answerIndex];
		frontCitation = opencitation[answerIndex];
		comment = comments[answerIndex];
		correctComments = correctArray[answerIndex];

		// load [new] text based on answerIndex
		currentPhrase = phrases[answerIndex].toLowerCase();
		currentValue = prices[answerIndex];
		phrase.text(currentPhrase);
		currentSuggestion = suggestion[answerIndex];

		//mask our current word
		phrase.text(phrases[answerIndex].replace(/[a-z]/gi, '_'));
		victim.css('visibility', 'hidden');
		overlayMessages.text(frontQuote);
		overlaySubMessages.text(frontCitation);
		buttons.css('visibility', 'hidden');
		skipLink.css('visibility', 'visible');
		overlay.css('visibility', 'visible');
		setTimeout(function(){
			overlay.fadeOut(8000, function(){ newRound(); })
		}, 7000);
		// console.log(currentValue);
		console.log(phrases.length);
	}


	function reset() {
		// pause audio
		ropecreak.pause();

		// reset variables, text, and highlights 
		errors = 0;
		correct = 0;
		canComment = false;
		$('.wrongLetter').remove();
		overlayMessages.text("");
		overlaySubMessages.text("");
		commentBlock.text("");
		overlay.css('opacity', '1');

		// reset button data to not-yet-clicked
		$(".button").data('clicked', false);
		
		// clear answer input field
		document.getElementById("answerForm").reset();

		// reset and hide the hangman
		victim.css('background-position', '0 -105px');
		victim.css('visibility', 'hidden');
		intro();
	}


	function newRound() {
		canPlay = true;
		container.fadeIn("fast", function() {
			$('div#status ul').slideDown("fast");
			$('div#statusWrapper').animate({
				top: '20px'
			}, 200);
			game.slideDown("fast");
		});
	}


	function subtractPhrase() {
		// removes current phrase and suggestion
		// from phrases and suggestion arrays
		if (phrases.length >= 2) {
			phrases.splice(answerIndex, 1);
			suggestion.splice(answerIndex, 1);
			opening.splice(answerIndex, 1);
			opencitation.splice(answerIndex, 1);
			// comments.splice(answerIndex, 1);
			// correctArray.splice(answerIndex, 1);
		} else {
			alert("Phrases have been depleted!");
			return false;
			// gameOut();
			// reincarnate.detach();
		}
	}

	function roundWin(){
		// when phrase is successfully guessed
		// playing is disabled, correct phrase is revealed,
		// subtractPhrase() is triggered, and message is shown
		canPlay = false;
		swapComment("I'm saved!");
		phrase.text(currentPhrase);
		subtractPhrase();
		setTimeout(gameOut, 4000);
	}


	function gameOut() {
		// appends dynamic overlay, plus any messages and buttons
		skipLink.css('visibility', 'hidden');
		// statusBar.slideUp("slow", function () {
			// container.fadeOut("fast", function () {
				overlay.fadeTo(7000, 0.7, function() {
					buttons.css('visibility', 'visible');
					// buttons.fadeIn(8000); 
				});
				overlayMessages.text('');
				overlaySubMessages.text('');
			// });
		// });
	}


	function roundLose() {
		// action when player fails to guess answer
		canPlay = false;
		phrase.text(currentPhrase);
		score.text(newScore(currentValue));
		// alphabet.fadeOut("slow");
		subtractPhrase();
		commentBlock.fadeOut("fast", function() {
			commentBlock.text('NNNOOOOOOOO..!');
			game.slideUp("slow", function() {
				commentBlock.fadeIn("slow");
				$('#statusWrapper').animate({
					top: '-60px'
				}, 3000, 'linear', function() {
							bodyfall.play();
							victim.animate({
								backgroundPosition: '-1200 0'
							}, 1000, 'easeOutBounce', function() {
								commentBlock.fadeOut('slow');
								ropecreak.play();
								gameOut();
							});
				});
			});
		});
	}


	function newScore(currentValue) {
		var currentScore = score.text();
		currentScore = currentScore.replace('%', '');
		var updatedScore = Math.round(currentScore - (currentScore * currentValue));
		updatedScore = updatedScore + ' %';
		return updatedScore;
	}
		
	function swapComment(comment) {
		commentBlock.fadeOut("slow", function() {
			commentBlock.text(comment);
			commentBlock.fadeIn("slow");
		});
	}

	$('form#answerForm').submit(function() {
		// if player types something in the text field,
		// compare it first to the current word and 
		// then see if it matches an easter egg
		console.log(canComment);
		if (canPlay) {
			var phraseTry = $("input:first").val();
			phraseTry = phraseTry.replace(/[\s!?',-]/g, "");
			phraseTry = $.trim(phraseTry).toLowerCase();
			testPhrase = currentPhrase.replace(/[\s!?',-]/g, "");
			if (phraseTry == testPhrase) {
				roundWin();
			} else if ((easterEgg[phraseTry]) && canComment) {
				console.log("Easter egg match");
				swapComment(easterEgg[phraseTry]);
			} else {
				// roundLose();
				// punishment for guessing wrong??
				return false;
			}
			return false;
		} else {
			return false;
		}
	});


	$(".button").click(function() {
		// for each time a letter is chosen
		// console.log($(this).data('clicked'));
		if(($(this).data('clicked')) && canComment && canPlay) {
			var alreadyIndex = Math.floor(Math.random()*already.length);
			commentBlock.text(already[alreadyIndex]);
			return false;
		} else if (canPlay) {
			$(this).data('clicked', true);
			console.log($(this).data('clicked'));
			choice = this.innerHTML;
			// if our current phrase contains the letter the player chose
			if (currentPhrase.indexOf(choice) != -1) {
				correct++;
				//loop over every letter in our current phrase
				for (var i = 0; i < currentPhrase.length; i++) {
					// and if the letter the player chose matches the letter in our phrase
					if (currentPhrase.charAt(i) === choice) {
						// show that letter at it's correct position in the phrase
						phrase.text(phrase.text().replaceAt(i, choice));

						if (canComment) {
							switch (correct) {
								case 1: swapComment(correctComments[0]);
												break;
								case 2: swapComment(correctComments[1]);
												break;
								case 3: swapComment(correctComments[2]);
												break;
								case 4: swapComment(correctComments[3]);
												break;
								case 5: swapComment(correctComments[4]);
												break;
								case 6: swapComment(correctComments[5]);
												break;
								case 7: swapComment(correctComments[6]);
												break;
							}
						}

						// if the game is won
						if (phrase.text() === currentPhrase) {
							roundWin();
						}
					}
				}
			} else {
				// if choice is not part of phrase
				// increment the errors and add the letter to our wrong letters
				errors++;
				// create letter element on the fly and add to list
				$("<dd/>", {
					text: choice,
					"class": "wrongLetter"
				}).css("display", "none").appendTo(letters).fadeIn('slow');

				switch (errors) {
					case 1: victim.css('visibility', 'visible');
									break;
					case 2: victim.css('background-position', '-200px -105px');
									swapComment(comment[0]);
									canComment = true;
									break;
					case 3: victim.css('background-position', '-400px -105px');
									swapComment(comment[1]);
									break;
					case 4: victim.css('background-position', '-600px -105px');
									swapComment(comment[2]);
									break;
					case 5: victim.css('background-position', '-800px -105px');
									swapComment(comment[3]);
									break;
					case 6: victim.css('background-position', '-1000px -105px');
									swapComment(comment[4]);
									break;
					case 7: victim.css('background-position', '-1200px -105px');
									roundLose();
									break;
				}
			}
		} else {
			return false;
		}
	});



});
