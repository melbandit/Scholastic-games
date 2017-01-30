function myFunction(event) {
    var x = event.value;
    document.querySelector("parent-pwd").innerHTML = x;
}
// <input type="text" onkeydown="myFunction(event)"> 

// function myFunction(event) {
//     var x = event.keyCode;
//     if (x == 112) {  // 27 is the ESC key
//         alert ("You pressed the Escape key!");
//     }
// }
// $('#one').val('1');
// $('#two').val('2');
// $('#three').val('3');
// $('#four').val('4');
// $('#five').val('5');
// $('#six').val('6');
// $('#seven').val('7');
// $('#eight').val('8');
// $('#nine').val('9');

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


