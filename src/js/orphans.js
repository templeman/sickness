$(function() {

  // special function to randomly shuffle an array
  function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  // declare the array to house all exploded fragments
  master = [];

  // retrieve values from poetry.xml
  $.ajax({
    type: "GET",
    url: "assets/data/orphans.xml",
    dataType: "xml",
    success: parseXml
  });

  function parseXml(xml) {
    // get every fragment
    $(xml).find("passage").each(function(i) {
      // (re)set temp array to hold characters
      currentBits = [];

      // for each fragment,
      // parse it into its individual characters
      // and fill array
      currentFrag = $(this).find("body").text();
      for (var property in currentFrag) {
        currentBits.push(currentFrag[property]);
      }

      // take the array storing the individual
      // fragment characters and add to master array
      master.push(currentBits);
    });

    // once the master array has been built, randomize it
    shuffle(master);

    // when everything is ready, loop over the master array
    for (var i = 0; i < 4; i++) {
      // for each item in the master array,
      // loop over its contents and append them to page one by one
      for (var j = 0; j < master[i].length; j++) {
        $('.block').append('<span class = "character">' + master[i][j] + '</span>');
      }
      // add a line break after each fragment
      $('.block').append('<br />');
    }

    // when all the letters have been added,
    // fade them in one by one
    var faders = $('.block').children().hide();
    i = 0;

    function awesomeFaders() {
      $(faders[i++]).delay(10).fadeIn(100, arguments.callee);
    };
    awesomeFaders();
  }

});
