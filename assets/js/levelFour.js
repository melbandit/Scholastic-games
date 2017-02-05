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

var $youWin_bkg = document.querySelector(".you-win-bkg");

function youWin(){
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}
$("ul li").mouseup(function(){
	if ($( "ul li" ).first().hasClass('three')){
		TweenMax.to(".star-one", 1, {scale:1});
		$num_three.setAttribute("class", "invisible");
		$num_five.setAttribute("class", "number-five");
		numTwo();
	}
});
function numTwo(){
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('five')){
			TweenMax.to(".star-two", 1, {scale:1});
			$num_five.setAttribute("class", "invisible");
			$num_two.setAttribute("class", "number-two");
			numThree();
		}
	});
}
function numThree(){
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('two')){
			TweenMax.to(".star-three", 1, {scale:1});
			$num_two.setAttribute("class", "invisible");
			$num_one.setAttribute("class", "number-one");
			numFour();
		}
	});
}
function numFour(){
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('one')){
			TweenMax.to(".star-four", 1, {scale:1});
			$num_one.setAttribute("class", "invisible");
			$num_four.setAttribute("class", "number-four");
			numFive();
		}

	});
}
function numFive(){
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('four')){
			TweenMax.to(".star-five", 1, {scale:1});
			$num_four.setAttribute("class", "invisible");
			window.setTimeout( youWin, 1000 );
		}
	});
}