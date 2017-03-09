// fade nav in/out

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() < 20) {
      $('nav').fadeIn();
    } else {
      $('nav').fadeOut();
    }
  });


// css3 stars

  // first test for browser support
  // if(Modernizr.cssanimations && Modernizr.cssgradients) {

  $('div.grid__item').not("div.special").mouseover(function() {
    $(this).css({
      "background-color": "black",
    })
  });

  $('a.special').not("a.super-special").mouseover(function() {
    $(this).css({
      "background-color": "red",
    })
  });

  $('a.super-special').mouseover(function() {
    $(this).css({
      "background-color": "#45CEEF",
      "-webkit-animation": "pulse 1s infinite alternate"
    })
  });

  // var grid_container = $('div.grid');
  // $("div.grid__item:nth-child(4)").after("<div class='special'></div>");


    // var grid_container = $('div.grid');
    // stars_container.attr({
    //  id: 'stars',
    //  class: 'clearfix'
    // });
    // stars_container.prependTo($("body"));

    // var star_count = 101;
    // for(var i = 1; i < star_count; i++) {
    //  var star = $('<div></div>');
    //  star.attr('class', 'star'+i);
    //   star.css({
    //   "position": "absolute",
    // });
    //  star.appendTo(stars_container);
    // }

    // var stars = $('div#stars > div');

    // // randomize glow speeds based on size
    // function uniqueSpeed(el) {
    //  var dimension = parseInt(el.css("width"));
    //  var uniqueSpeed = Math.floor(Math.sqrt(dimension));
    //  return uniqueSpeed;
    // };

    // // randomize star divs and fade in one-by-one
    // function arrangeStar() {
      // var positionx = Math.floor(Math.random() * 100);
      // var positiony = (Math.floor(Math.random() * 100));
    //  stars.eq(index).css({
        // 'margin-left':positionx+'%',
        // 'top':positiony+'%'
    //  });
    //    index++;

    //  // remove timer after iterating through all stars
    //  if (index >= length) {
    //    clearInterval(timer);

    //  // recursive function to fade in stars once they are in position
    //  (function starNext(jq){
    //    var el = jq.eq(0);
    //    el.fadeIn(1000, function(){
    //    var s = uniqueSpeed(el);
    //    el.css({
    //      '-webkit-animation': 'pulsate ' + s + 's ease-out',
    //      '-webkit-animation-iteration-count': 'infinite',
    //      '-moz-animation': 'pulsate ' + s + 's ease-out',
    //      '-moz-animation-iteration-count': 'infinite',
    //      '-ms-animation': 'pulsate ' + s + 's ease-out',
    //      '-ms-animation-iteration-count': 'infinite',
    //      '-o-animation': 'pulsate ' + s + 's ease-out',
    //      '-o-animation-iteration-count': 'infinite',
    //      'animation': 'pulsate ' + s + 's ease-out',
    //      'animation-iteration-count': 'infinite'
    //    });
    //      (jq=jq.slice(1)).length && starNext(jq);
    //    });
    //  })(stars);
    //  }
    // };

    // // initialize stars
    // var timer = setInterval(arrangeStar, 100),
    // length = stars.length,
    // index = 0;

  // } // end modernizr test
});
