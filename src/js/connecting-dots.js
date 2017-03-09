$(function() {

      function updateButtons(i, direction) {
        // console.log(i);
        $.ajax({
          url: "/assets/data/connecting-dots/get-handler.php",
          data: "iteration=" + i,
          type: "POST",
        }).done(function(response){
          $('form').html('');
          // console.log(response);
          // console.log(i);
          var binaries = response.split(",");
          console.log(binaries.length);
          jQuery.each(binaries, function() {
            if(this == 'true') {
              var truebox = $('<input>').attr({
                type: 'checkbox',
                name: 'checkbox[]',
                checked: 'true',
              }).css('margin', '2.5px');
              $('form').append(truebox);
            } else {
              var falsebox = $('<input>').attr({
                type: 'checkbox',
                name: 'checkbox[]',
              }).css('margin', '2.5px');
              $('form').append(falsebox);
            }
          });
          if(i == 22) {
            direction = 'reverse';
          } else if(i == 1) {
            direction = 'forward';
          }
          if( direction == 'reverse') {
            i--;
          } else {
            i++;
          }
          // setTimeout(function() { updateButtons(i) }, 100);
          updateButtons(i, direction);
        });
        /*
        i = Number(i) + 1;
          console.log(i);
        return i;
         */

        // setTimeout("updateButtons()", 2000, [i]);
      }

(function ($) {

     $.fn.serialize = function (options) {
         return $.param(this.serializeArray(options));
     };

     $.fn.serializeArray = function (options) {
         var o = $.extend({
         checkboxesAsBools: false
     }, options || {});

     var rselectTextarea = /select|textarea/i;
     var rinput = /text|hidden|password|search/i;

     return this.map(function () {
         return this.elements ? $.makeArray(this.elements) : this;
     })
     .filter(function () {
         return this.name && !this.disabled &&
             (this.checked
             || (o.checkboxesAsBools && this.type === 'checkbox')
             || rselectTextarea.test(this.nodeName)
             || rinput.test(this.type));
         })
         .map(function (i, elem) {
             var val = $(this).val();
             return val == null ?
             null :
             $.isArray(val) ?
             $.map(val, function (val, i) {
                 return { name: elem.name, value: val };
             }) :
             {
                 name: elem.name,
                 value: (o.checkboxesAsBools && this.type === 'checkbox') ? //moar ternaries!
                        (this.checked ? 'true' : 'false') :
                        val
             };
         }).get();
     };

})(jQuery);

$(document).ready(function() {

  var direction = 'forward';
  var i = 1;
  // var interval = setInterval(function() { updateButtons(i); }, 4000);
  // console.log(interval);

   updateButtons(i, direction);

    $("form#buttons").submit(function(){
      var dataString = $('input:checkbox').serialize({ checkboxesAsBools: true });
      $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: dataString,
      }).done(function(response){
        $('#result').html('Changes Saved');
      });
      return false;
    });

    $("input#clear").click(function(){
      $("input[type=checkbox]").each(function() {
        this.checked = false;
      });
    });
});

});
