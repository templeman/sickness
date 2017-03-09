$(function(){

  $('#dragSource').dragscrollable({dragSelector: '.dragger:first', acceptPropagatedEvent: false});

	var head = 0;

	function checkComplete(el){
		if (el.hasClass('headgroupDrag')){
			head += 1;
			console.log(head);
			if(head == 14){
				$('#jaw').css({
					'-webkit-animation-name': 'speak',
					'-webkit-animation-duration': '550ms',
					'-webkit-animation-iteration-count': 'infinite',
					'-webkit-animation-direction': 'alternate'
				});
				/*
				$('#head').css({
					'-webkit-animation-name': 'speak',
					'-webkit-animation-duration': '1150ms',
					'-webkit-animation-iteration-count': 'infinite',
					'-webkit-animation-direction': 'alternate'
					});
					*/

				console.log("FINISHED!");
				return false;
			}
		}
	}

	// randomize divs
	$("div").not('#dragSource').css({'position':'absolute'});
	$('div.random').each(function() {
		var posx = (Math.random() * (1920 - $(this).width())).toFixed();
		var posy = (Math.random() * (1200 - $(this).height())).toFixed();
		$(this).css({
			'left':posx+'px',
			'top':posy+'px',
			'display':'none'
		}).fadeIn(1000);
	});

	$('.headgroupDrag').multiDraggable({ group: $('.headgroup'), dragNative : function () {}});
	$('.draggable').draggable();
	$('.torsogroupDrag').multiDraggable({ group: $('.torsogroup'), dragNative : function () {}});

  $("#eye-lt-tar").droppable({
    accept: '.eye-lt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 32, left: 55}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      // $(this).append(ui.helper.children());
      // console.log($(ui.draggable).attr('id')+"removed");
      // $(ui.draggable).remove();
      console.log("dropped");
    }
  });

  $("#eye-rt-tar").droppable({
      /*
    accept: function( event, ui ) {
    if(event.has('.eye-rt')){
        return true;
      }
    },
    */
    accept: '.eye-rt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 32, left: 115}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#socket-rt-tar").droppable({
    accept: '.socket-rt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 50, left: 115}).appendTo($('#head').parent());
      ui.draggable.draggable('disable', true);
      console.log($(this));
      console.log("dropped");
    }
  });

  $("#socket-lt-tar").droppable({
    accept: '.socket-lt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 50, left: 60}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#torso-tar").droppable({
    accept: '.torsogroup',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 100, left: 50}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#torso-tar-clone").droppable({
      /*
    accept: function( event, ui ) {
    if(event.has('.head')){
        return true;
      }
    },
    */
    accept: '#head-container',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      var currentId = ui.draggable.attr('id');
      ui.draggable.detach().css({top: -100, left: -50}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#jaw-tar").droppable({
      /*
    accept: function( event, ui ) {
      if(event.has('.jaw')){
        return true;
      }
    },
    */
    accept: '#jaw-container',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 70, left: 70}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#jaw-tar-clone").droppable({
    accept: '#head-container',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      var currentId = ui.draggable.attr('id');
      ui.draggable.detach().css({top: -80, left: -72}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#horn-lt-tar").droppable({
    accept: '.horn-lt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 20, left: 0}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#horn-rt-tar").droppable({
    accept: '.horn-rt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 20, left: 185}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#tail-tar").droppable({
    accept: '.tail',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      var dropped = ui.draggable;
      checkComplete(dropped);
      // if((ui.draggable).hasClass('headgroupDrag')){
        //head += 1;
      //}
      ui.draggable.detach().css({top: 30, left: 100}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
      $("#feedback").html('Got it!').fadeIn(500).delay(2000).fadeOut(1000);
    }
  });

  $("#belly-button-tar").droppable({
    accept: '.belly-button',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 90, left: 50}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#haunch-lt-tar").droppable({
    accept: '.haunch-lt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 50, left: 10}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#haunch-rt-tar").droppable({
    accept: '.haunch-rt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 50, left: 90}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#leg-lt-tar").droppable({
    accept: '.leg-lt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 55, left: -20}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });

  $("#leg-rt-tar").droppable({
    accept: '.leg-rt',
    drop: function( event, ui ) {
      ui.draggable.addClass('headgroupDrag');
      checkComplete(ui.draggable);
      ui.draggable.detach().css({top: 55, left: 100}).appendTo($(this).parent());
      ui.draggable.draggable('disable', true);
      console.log("dropped");
    }
  });
});
