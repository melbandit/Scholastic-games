$('#iggy-char-2').sprite({fps: 4, no_of_frames: 7});
$('#purple-char-2').sprite({fps: 4, no_of_frames: 5});
$('#neba-char-2').sprite({fps: 4, no_of_frames: 5});
$( function() {
	$( "#sortable" ).sortable({
		stop: dottedLineDropped
	});
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
var $audio_whoops = document.getElementById("audio--whoops");
var $audio_nah = document.getElementById("audio--nah");
var $audio_match = document.getElementById("audio--match");
window.onload = function() {
	firstNumDisplayed();
}

function monsterDance(){
	$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
	$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});	
	$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
}
function youWin(){
    console.log("You Win!!");
    localStorage.setItem("level4complete", 4);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}





function firstNumDisplayed(){
	if(localStorage.getItem("lvFourStar1")){
		$star_one.setAttribute("class", "star-one");
		TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
		$num_three.setAttribute("class", "invisible");
		$num_five.setAttribute("class", "number-five");
		secondNumDisplayed();
	}else{
		$(window).on("line-dropped", firstNumCheck);
	}
}
function firstNumCheck(event, position) {
	console.log("line-dropped", position);
	if (position == 2) {
		TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
		$num_three.setAttribute("class", "invisible");
		$num_five.setAttribute("class", "number-five");
		localStorage.setItem("lvFourStar1", 1);
		secondNumDisplayed();
		monsterDance();
		$(window).off("line-dropped", firstNumCheck);
	} else{
		$audio_whoops.play();
	}
}




function secondNumDisplayed(){
	if(localStorage.getItem("lvFourStar2")){
		$star_two.setAttribute("class", "star-two");
		TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
		$num_five.setAttribute("class", "invisible");
		$num_two.setAttribute("class", "number-two");
		thirdNumDisplayed();
	} else{
		$(window).on("line-dropped", secondNumCheck);
	}
}

function secondNumCheck(event, position){
	if (position == 4) {
		TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
		$num_five.setAttribute("class", "invisible");
		$num_two.setAttribute("class", "number-two");
		localStorage.setItem("lvFourStar2", 2);
		monsterDance();
		thirdNumDisplayed();
		$(window).off("line-dropped", secondNumCheck);
	} else {
		$audio_nah.play();
	}
}




function thirdNumDisplayed(){
	if(localStorage.getItem("lvFourStar3")){ //return;
		$star_three.setAttribute("class", "star-three");
		TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
		$num_two.setAttribute("class", "invisible");
		$num_one.setAttribute("class", "number-one");
		fourthNumDisplayed();
	}else{
		$(window).on("line-dropped", thirdNumCheck);	
	}
}
function thirdNumCheck(event, position){
	if ( position == 1 ) {
		TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
		$num_two.setAttribute("class", "invisible");
		$num_one.setAttribute("class", "number-one");
		localStorage.setItem("lvFourStar3", 3);
		monsterDance();
		fourthNumDisplayed();
		$(window).off("line-dropped", thirdNumCheck);
	} else{
		$audio_whoops.play();
	}
}



function fourthNumDisplayed(){
	if(localStorage.getItem("lvFourStar4")){
		$star_four.setAttribute("class", "star-four");
		TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
		$num_one.setAttribute("class", "invisible");
		$num_four.setAttribute("class", "number-four");
		fifthNumDisplayed();
	}else{
		$(window).on("line-dropped", fourthNumCheck);	
	}
}
function fourthNumCheck(event, position){
	if ( position == 0 ) {
		TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
		$num_one.setAttribute("class", "invisible");
		$num_four.setAttribute("class", "number-four");
		localStorage.setItem("lvFourStar4", 4);
		monsterDance();
		fifthNumDisplayed();
		$(window).off("line-dropped", fourthNumCheck);
	} else{
		$audio_nah.play();
	}
}




function fifthNumDisplayed() {
	if(localStorage.getItem("lvFourStar5")){
		$star_five.setAttribute("class", "star-five");
		TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
		$num_four.setAttribute("class", "invisible");
		$audio_match.pause();
	}else{
		$(window).on("line-dropped", fifthNumCheck);
	}
}
function fifthNumCheck(event, position){
	if ( position == 3 ) {
		TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
		$num_four.setAttribute("class", "invisible");
		localStorage.setItem("lvFourStar5", 5);
		monsterDance();
		window.setTimeout( youWin, 1000 );
		$(window).off("line-dropped", fifthNumCheck);
	} else{
		$audio_whoops.play();
	}
}




var dottedLineDropped = function(event, ui){
	// var $dottedLine = $(ui.item[0]);
	var $dottedLine = $(".choices--dotted-line .one");
	$(window).trigger("line-dropped", $dottedLine.index());
};