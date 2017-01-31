var levelselect = $('.level-select'),
	currentSelect = $('.level-select.current');

levelselect.on("click", function (e){
	//	e.preventDefault();

	var clickLevel = $(this);

	if (clickLevel.hasClass('current')){
	}else{

		levelselect.removeClass('current');
		levelselect.attr('src', 'assets/img/parents/unselected.png');
		clickLevel.addClass('current');
		clickLevel.attr('src', 'assets/img/parents/selected.png');
	}
});


(function () {
	// grab variables all my global variable
	var numbuttons = $('.parent-num'),
		pwdinput = $('#parent-pwd'),
		msg = "";
		
	// when a number button is clicked
	numbuttons.on('click', function (evt) {
		evt.preventDefault();

		var clickVal = $(this).val(),
			val = pwdinput.val(),
			realVal = val + clickVal;

		console.log(clickVal);

		pwdinput.val( pwdinput.val()+clickVal );

		if (pwdinput.val() == "112") {
			//go to next page
			console.log("go to next page");
			window.location.href = "parentHome.html";
		} else if (pwdinput.val().length > 2) {
			setTimeout(function() {
				pwdinput.val("");
			}, 200);
		}
	});
})();

// var $color = $('.color');
// // Delay tween by a random number between 1 & 2
// TweenMax.to($color, 1, {x:'85', delay: delay});

var left = getRandom(700, 710);
var right = getRandom(820, 830);
var delay = getRandom(1, 2.5);
//basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
//var color = document.querySelectorAll('.color');
function getRandom(min, max) {
	return min + Math.random() * (max - min);
}

TweenMax.to(".color-one", 1, {left:left+"px", yoyo:true, delay: 2, repeat:40, repeatDelay: 2, ease:Linear.easeNone});
TweenMax.to(".color-two", 1, {left:left+"px", yoyo:true, delay: 2, repeat:40, repeatDelay: 2, ease:Linear.easeNone});
TweenMax.to(".color-three", 1, {left:left+"px", yoyo:true, delay: 3, repeat:40, repeatDelay: 3, ease:Linear.easeNone});
TweenMax.to(".color-four", 1, {left:left+"px", yoyo:true, delay: 3, repeat:40, repeatDelay: 3, ease:Linear.easeNone});
TweenMax.to(".color-five", 1.5, {left:left+"px", yoyo:true, delay: delay, repeat:40, repeatDelay: 4, ease:Linear.easeNone});
TweenMax.to(".color-six", 1.5, {left:left+"px", yoyo:true, delay: 4, repeat:40, repeatDelay: 4, ease:Linear.easeNone});
TweenMax.to(".color-seven", 1.5, {left:right+"px", yoyo:true, delay: 5, repeat:40, repeatDelay: 5, ease:Linear.easeNone});
TweenMax.to(".color-eight", 1.5, {left:right+"px", yoyo:true, delay: 5, repeat:40, repeatDelay: 5, ease:Linear.easeNone});
TweenMax.to(".color-eight", 2, {left:right+"px", yoyo:true, delay: 1, repeat:40, repeatDelay: 1, ease:Linear.easeNone});
TweenMax.to(".color-nine", 2, {left:right+"px", yoyo:true, delay: 1, repeat:40, repeatDelay: 1, ease:Linear.easeNone});
TweenMax.to(".color-ten", 2, {left:right+"px", yoyo:true, delay: delay, repeat:40, repeatDelay: delay, ease:Linear.easeNone});



// function onRepeat() {
//   count++;
//   box.innerHTML = count;
//   TweenLite.set(box, {backgroundColor:"hsl(" + Math.random() * 255 + ", 90%, 60%)"});
// }  
//drag and drop
// $( function() {
// 	$( ".draggable" ).draggable();
// 	$( "#droppable" ).droppable({
// 	drop: function( event, ui ) {
// 		$( this )
// 		  .addClass( "ui-state-highlight" )
// 		  .find( "p" )
// 		    .html( "Dropped!" );
// 		}
// 	});
// } );

// /*
// See http://www.greensock.com/draggable/ for details. 
// This demo uses ThrowPropsPlugin which is a membership benefit of Club GreenSock, http://www.greensock.com/club/
// */

// var $snap = $("#snap"),
//   $liveSnap = $("#liveSnap"),
// 	$container = $("#container"),
// 	gridWidth = 196,
// 	gridHeight = 100,
// 	gridRows = 6,
// 	gridColumns = 5,
// 	i, x, y;

// var gridWidth = 204;
// var gridHeight = 128;
// Draggable.create(".box", {
//     type:"x,y",
//     edgeResistance:0.65,
//     bounds:"#container",
//     throwProps:true,
//     liveSnap:true,
//     snap: {
//         x: function(endValue) {
//             return Math.round(endValue / gridWidth) * gridWidth;
//         },
//         y: function(endValue) {
//             return Math.round(endValue / gridHeight) * gridHeight;
//         }
//     }
// });

// //loop through and create the grid (a div for each cell). Feel free to tweak the variables above
// for (i = 0; i < gridRows * gridColumns; i++) {
// 	y = Math.floor(i / gridColumns) * gridHeight;
// 	x = (i * gridWidth) % (gridColumns * gridWidth);
// 	$("<div/>").css({position:"absolute", border:"1px solid #454545", width:gridWidth-1, height:gridHeight-1, top:y, left:x}).prependTo($container);
// }

// //set the container's size to match the grid, and ensure that the box widths/heights reflect the variables above
// TweenLite.set($container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth + 1});
// TweenLite.set(".box", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});

// //the update() function is what creates the Draggable according to the options selected (snapping).
// function update() {
//   var snap = $snap.prop("checked"),
//       liveSnap = $liveSnap.prop("checked");
// 	Draggable.create(".box", {
// 		bounds:$container,
// 		edgeResistance:0.65,
// 		type:"x,y",
// 		throwProps:true,
//     autoScroll:true,
// 		liveSnap:liveSnap,
// 		snap:{
// 			x: function(endValue) {
// 				return (snap || liveSnap) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
// 			},
// 			y: function(endValue) {
// 				return (snap || liveSnap) ? Math.round(endValue / gridHeight) * gridHeight : endValue;
// 			}
// 		}
// 	});
// }

// //when the user toggles one of the "snap" modes, make the necessary updates...
// $snap.on("change", applySnap);
// $liveSnap.on("change", applySnap);

// function applySnap() {
// 	if ($snap.prop("checked") || $liveSnap.prop("checked")) {
// 		$(".box").each(function(index, element) {
// 			TweenLite.to(element, 0.5, {
// 				x:Math.round(element._gsTransform.x / gridWidth) * gridWidth,
// 				y:Math.round(element._gsTransform.y / gridHeight) * gridHeight,
// 				delay:0.1,
// 				ease:Power2.easeInOut
// 			});
// 		});
// 	}
// 	update();
// }

// update();



// var correctCards = 0;
// $( init );

// function init() {

//   // Hide the success message
//   $('#successMessage').hide();
//   $('#successMessage').css( {
//     left: '580px',
//     top: '250px',
//     width: 0,
//     height: 0
//   } );

//   // Reset the game
//   correctCards = 0;
//   $('#cardPile').html( '' );
//   $('#cardSlots').html( '' );

//   // Create the pile of shuffled cards
//   var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//   numbers.sort( function() { return Math.random() - .5 } );

//   for ( var i=0; i<10; i++ ) {
//     $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
//       containment: '#content',
//       stack: '#cardPile div',
//       cursor: 'move',
//       revert: true
//     } );
//   }

//   // Create the card slots
//   var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
//   for ( var i=1; i<=10; i++ ) {
//     $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
//       accept: '#cardPile div',
//       hoverClass: 'hovered',
//       drop: handleCardDrop
//     } );
//   }

// }

// function handleCardDrop( event, ui ) {
//   var slotNumber = $(this).data( 'number' );
//   var cardNumber = ui.draggable.data( 'number' );

//   // If the card was dropped to the correct slot,
//   // change the card colour, position it directly
//   // on top of the slot, and prevent it being dragged
//   // again

//   if ( slotNumber == cardNumber ) {
//     ui.draggable.addClass( 'correct' );
//     ui.draggable.draggable( 'disable' );
//     $(this).droppable( 'disable' );
//     ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
//     ui.draggable.draggable( 'option', 'revert', false );
//     correctCards++;
//   } 
  
//   // If all the cards have been placed correctly then display a message
//   // and reset the cards for another go

//   if ( correctCards == 10 ) {
//     $('#successMessage').show();
//     $('#successMessage').animate( {
//       left: '380px',
//       top: '200px',
//       width: '400px',
//       height: '100px',
//       opacity: 1
//     } );
//   }

// }


