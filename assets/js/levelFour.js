$( function() {
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();
} );

var $star_one = document.querySelector(".star-one");
var $star_two = document.querySelector(".star-two");
var $star_three = document.querySelector(".star-three");
var $star_four = document.querySelector(".star-four");
var $star_five = document.querySelector(".star-five");

var $num_one = document.querySelector(".number-one");
var $num_two = document.querySelector(".number-two");
var $num_three = document.querySelector(".number-three");
var $num_four = document.querySelector(".number-four");
var $num_five = document.querySelector(".number-five");

// var $youWin_bkg = document.querySelector(".you-win-bkg");

// function youWinVal(){
//     console.log("working");
//     if(youWinVal === 1){
//         console.log("youWinVal worked");
//         $link_two.setAttribute("class", "link-two");
//     }
// }
// function youWin(){
//     console.log("You Win!!");
//     youWinVal++;
//     $youWin_bkg.setAttribute("class", "you-win-bkg");
//     console.log(youWinVal);
//     youWinVal();
// }

$("ul li").mouseup(function(){
	if ($( "ul li" ).first().hasClass('three')){
		$star_one.setAttribute("class", "star-one");
		$num_three.setAttribute("class", "invisible");
		$num_five.setAttribute("class", "number-five");
	}
});

$("ul li").mouseup(function(){
	if ($( "ul li" ).first().hasClass('five')){
		$star_two.setAttribute("class", "star-two");
		$num_five.setAttribute("class", "invisible");
		$num_two.setAttribute("class", "number-two");
	}
});

$("ul li").mouseup(function(){
	if ($( "ul li" ).first().hasClass('two')){
		$star_three.setAttribute("class", "star-three");
		$num_two.setAttribute("class", "invisible");
		$num_one.setAttribute("class", "number-one");
	}
});

$("ul li").mouseup(function(){
	if ($( "ul li" ).first().hasClass('one')){
		$star_four.setAttribute("class", "star-four");
		$num_one.setAttribute("class", "invisible");
		$num_four.setAttribute("class", "number-four");
	}
});

$("ul li").mouseup(function(){
	if ($( "ul li" ).first().hasClass('four')){
		$star_five.setAttribute("class", "star-five");
		$num_four.setAttribute("class", "invisible");
		window.setTimeout( youWin, 1000 );
	}
});