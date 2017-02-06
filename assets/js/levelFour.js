$( function() {
	$( "#sortable" ).sortable();
	$( "#sortable" ).disableSelection();
} );
//localStorage.clear();
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
// $('#iggy-char').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
// $('#purple-char').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
// $('#neba-char').sprite({fps: 4, no_of_frames: 5, play_frames: 14});

$('#iggy-char-2').sprite({fps: 4, no_of_frames: 7});
$('#purple-char-2').sprite({fps: 4, no_of_frames: 5});
$('#neba-char-2').sprite({fps: 4, no_of_frames: 5});


function youWin(){
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}
if(localStorage.getItem("lvFourStar1")){
	TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
	$num_three.setAttribute("class", "invisible");
	$num_five.setAttribute("class", "number-five");
}else{
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('three')){
			TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
			$num_three.setAttribute("class", "invisible");
			$num_five.setAttribute("class", "number-five");
			localStorage.setItem("lvFourStar1", 1);
			//numTwo();
			$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
			$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
			$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
		}
	});
 }
//function numTwo(){
if(localStorage.getItem("lvFourStar2")){
	TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
	$num_five.setAttribute("class", "invisible");
	$num_two.setAttribute("class", "number-two");
} else{
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('five')){
			TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
			$num_five.setAttribute("class", "invisible");
			$num_two.setAttribute("class", "number-two");
			//numThree();
			localStorage.setItem("lvFourStar2", 2);
			$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
			$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
			$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
		}
	});
 }
//}
//function numThree(){
if(localStorage.getItem("lvFourStar3")){ //return;
	TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
	$num_two.setAttribute("class", "invisible");
	$num_one.setAttribute("class", "number-one");
}else{
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('two')){
			TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
			$num_two.setAttribute("class", "invisible");
			$num_one.setAttribute("class", "number-one");
			localStorage.setItem("lvFourStar3", 3);
			//numFour();
			$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
			$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
			$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
		}
	});
	}
//}
//function numFour(){
if(localStorage.getItem("lvFourStar4")){
	TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
	$num_one.setAttribute("class", "invisible");
	$num_four.setAttribute("class", "number-four");
}else{
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('one')){
			TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
			$num_one.setAttribute("class", "invisible");
			$num_four.setAttribute("class", "number-four");
			localStorage.setItem("lvFourStar4", 4);
			//numFive();
			$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
			$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
			$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
		}
	});
}
//}
// function numFive(){
if(localStorage.getItem("lvFourStar5")){
	TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
	$num_four.setAttribute("class", "invisible");
	// localStorage.clear();
}else{
	$("ul li").mouseup(function(){
		if ($( "ul li" ).first().hasClass('four')){
			TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
			$num_four.setAttribute("class", "invisible");
			localStorage.setItem("lvFourStar5", 5);
			$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
			$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
			$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
			window.setTimeout( youWin, 1000 );
		}
	});
}
//}