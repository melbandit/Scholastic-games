$('#iggy-char-2').sprite({fps: 4, no_of_frames: 7});
$('#purple-char-2').sprite({fps: 4, no_of_frames: 5});
$('#neba-char-2').sprite({fps: 4, no_of_frames: 5});
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
var $audio_whoops = document.getElementById("audio--whoops");
var $audio_nah = document.getElementById("audio--nah");
window.onload = function() {
    // $(".fade").css("display", "none");
    // $(".fade").fadeIn(2000);
	// monsterDance();
	numOne();
	// numTwo();
	// numThree();
	// numFour();
	// numFive();
}

function monsterDance(){
	$('#iggy-char-lv4').sprite({fps: 4, no_of_frames: 7, play_frames: 14});
	$('#purple-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});	
	$('#neba-char-lv4').sprite({fps: 4, no_of_frames: 5, play_frames: 14});
}
function youWin(){
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}
function numOne(){
	if(localStorage.getItem("lvFourStar1")){
		$star_one.setAttribute("class", "star-one");
		TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
		$num_three.setAttribute("class", "invisible");
		$num_five.setAttribute("class", "number-five");
		numTwo();
	}else{
		$("ul.choices--numbers li").mouseup(function(){
			if ($( "ul.choices--numbers li" ).first().hasClass('three')){
				TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
				$num_three.setAttribute("class", "invisible");
				$num_five.setAttribute("class", "number-five");
				localStorage.setItem("lvFourStar1", 1);
				numTwo();
				monsterDance();
			 } 
			 //else{
			// 	$audio_whoops.play();
			// }
		});
	}
}
function numTwo(){
	if(localStorage.getItem("lvFourStar2")){
		$star_two.setAttribute("class", "star-two");
		TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
		$num_five.setAttribute("class", "invisible");
		$num_two.setAttribute("class", "number-two");
		numThree();
	} else{
		$("ul.choices--numbers li").mouseup(function(){
			if ($( "ul.choices--numbers li" ).first().hasClass('five')){
				//console.log($( "ul.choices--numbers li" ).first());
				TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
				$num_five.setAttribute("class", "invisible");
				$num_two.setAttribute("class", "number-two");
				localStorage.setItem("lvFourStar2", 2);
				monsterDance();
				numThree();
			}
		});
		
	}
}
function numThree(){
	if(localStorage.getItem("lvFourStar3")){ //return;
		$star_three.setAttribute("class", "star-three");
		TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
		$num_two.setAttribute("class", "invisible");
		$num_one.setAttribute("class", "number-one");
		numFour();
	}else{
		$("ul.choices--numbers li").mouseup(function(){
			if ($( "ul.choices--numbers li" ).first().hasClass('two')){
				TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
				$num_two.setAttribute("class", "invisible");
				$num_one.setAttribute("class", "number-one");
				localStorage.setItem("lvFourStar3", 3);
				monsterDance();
				numFour();
			} 
			// else{
			// 	//$audio_whoops.play();
			// }
		});
		
	}
}
function numFour(){
	if(localStorage.getItem("lvFourStar4")){
		$star_four.setAttribute("class", "star-four");
		TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
		$num_one.setAttribute("class", "invisible");
		$num_four.setAttribute("class", "number-four");
		numFive();
	}else{
		$("ul.choices--numbers li").mouseup(function(){
			if ($( "ul.choices--numbers li" ).first().hasClass('one')){
				TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
				$num_one.setAttribute("class", "invisible");
				$num_four.setAttribute("class", "number-four");
				localStorage.setItem("lvFourStar4", 4);
				monsterDance();
				numFive();
			} 
			// else{
			// 	//$audio_nah.play();
			// }
		});
		
	}
}
function numFive(){
	if(localStorage.getItem("lvFourStar5")){
		$star_five.setAttribute("class", "star-five");
		TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
		$num_four.setAttribute("class", "invisible");
		// localStorage.clear();
	}else{
		$("ul.choices--numbers li").mouseup(function(){
			if ($( "ul.choices--numbers li" ).first().hasClass('four')){
				TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
				$num_four.setAttribute("class", "invisible");
				localStorage.setItem("lvFourStar5", 5);
				monsterDance();
				window.setTimeout( youWin, 1000 );
			} 
			// else{
			// 	//$audio_whoops.play();
			// }
		});
		//localStorage.clear();
	}
}