$(function() {

  var images = ["geo.png", "geo-x.png", "geo-xx.png", "geo-xxx.png", "geo-xxxx.png", "geo-xxxxx.png", "geo-xxxxxx.png", "geo-xxxxxxx.png", "geo-xxxxxxxx.png", "geo-xxxxxxxxx.png", "geo-xxxxxxxxxx.png", "geo-xxxxxxxxxx.png"];

  var x = 1;

  $('img').click(function(){
    if(x < 11) {
      $(this).attr("src", "assets/images/blind-hunters/"+images[x]);
      x++;
    } else if(x == 11) {
      $(this).remove();
      x++;
    }
  });

});
