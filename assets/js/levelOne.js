//$('#bird').sprite({fps: 12, no_of_frames: 3});
$('#iggy-char-2').sprite({fps: 4, no_of_frames: 7});
$('#purple-char-2').sprite({fps: 2, no_of_frames: 5});
$('#neba-char-2').sprite({fps: 2, no_of_frames: 5});

var youWinVal;
var $star_one = document.querySelector(".star-one");
var $star_two = document.querySelector(".star-two");
var $star_three = document.querySelector(".star-three");
var $star_four = document.querySelector(".star-four");
var $star_five = document.querySelector(".star-five");

var $youWin_bkg = document.querySelector(".you-win-bkg");

var $lv1_item_one = document.getElementById("lv1_item-one");
var $lv1_item_two = document.getElementById("lv1_item-two");//never used
var $lv1_item_three = document.getElementById("lv1_item-three");
var $lv1_item_four = document.getElementById("lv1_item-four");
var $lv1_item_five = document.getElementById("lv1_item-five");
var $lv1_item_six = document.getElementById("lv1_item-six");

var $audio_arms = document.getElementById("audio--arms");
var $audio_nose = document.getElementById("audio--nose");
var $audio_mouth = document.getElementById("audio--mouth");
var $audio_legs = document.getElementById("audio--legs");
var $audio_eyes = document.getElementById("audio--eyes");
var $audio_whoops = document.getElementById("audio--whoops");
var $audio_nah = document.getElementById("audio--nah");
var $link_two = document.querySelector("link-two");

var $activate_level_two = document.querySelector("activateLevelTwo");
window.onload = function() {
    console.log(youWinVal);
    // $(".fade").css("display", "none");
    // $(".fade").fadeIn(2000);
    // TweenMax.to(".back--button", 1, {scaleX:5, scaleY:5});
    // TweenMax.to("#lv1_item-one", 0.5, {top: 50});
    // TweenMax.to("#lv1_item-two", 0.75, {left: 550, delay: 0.25});
    // TweenMax.from("#lv1_item-three", 1, {top: 250, alpha: 0, delay: 0.5});
    // TweenMax.from("#lv1_item-four", 1, {top: 330, alpha: 0, delay: 1});
    // TweenMax.from("#lv1_item-six", 1, {alpha: 0, delay: 2});
    //document.body.className = "animate";
    $audio_arms.play();
    audioOnePlay();
}
//function
//first play audio 
//if you select the first correct lv1_item, then a star appears. scales from 0 to 100%;
//correct lv1_item choosen spins and zooms off the screen
    //add star to first position.
    //start next audio, call function.

function youWinLevelOne(){
    console.log("You Win Lovel One!!");
    localStorage.setItem("level1complete", 1);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}
function audioOnePlay(){
    console.log("audio played");
    $lv1_item_one.addEventListener("click", function(){
        $star_one.setAttribute("class", "star-one");
        TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
    });
    $lv1_item_one.addEventListener("mouseup", function(){
        $audio_arms.pause();
        $audio_nose.play();
        //TweenMax.fromTo("#lv1_item-one", 1, {scale:3}{scale:0});
        $lv1_item_one.setAttribute("class", "invisible");
        audioTwoPlay();
        $(".arms").addClass("opacity");
    });
    // $lv1_item_two.addEventListener("click", function(){
    //     $audio_whoops.play();
    // });
    // $lv1_item_three.addEventListener("click", function(){
    //     $audio_nah.play();
    // });
    // $lv1_item_four.addEventListener("click", function(){
    //     $audio_whoops.play();
    // });
    // $lv1_item_five.addEventListener("click", function(){
    //     $audio_nah.play();
    // });
}
function audioTwoPlay(){
        console.log("audio Two played");
    $lv1_item_five.addEventListener("click", function(){
        $star_two.setAttribute("class", "star-two");
        TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
        //TweenMax.fromTo("#lv1_item-five", 1, {scale:3},{scale:0});
    });
    $lv1_item_five.addEventListener("mouseup", function(){
        $audio_nose.pause();
        $audio_mouth.play();
        //TweenMax.fromTo("#lv1_item-five", 1, {scale:3},{scale:0});
        $lv1_item_five.setAttribute("class", "invisible");
        audioThreePlay();
        $(".nose").addClass("opacity");
    });
}
function audioThreePlay(){
        console.log("audio Three played");
    $lv1_item_four.addEventListener("click", function(){
        $star_three.setAttribute("class", "star-three");
        TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
        TweenMax.fromTo("#lv1_item-four", 1, {scale:3},{scale:0});
    });
    $lv1_item_four.addEventListener("mouseup", function(){
        $audio_mouth.pause();
        $audio_eyes.play();
        $lv1_item_four.setAttribute("class", "invisible");
        audioFourPlay();
        $(".mouth").addClass("opacity");
    });
}
function audioFourPlay(){
        console.log("audio Four played");
    $lv1_item_six.addEventListener("click", function(){
        $star_four.setAttribute("class", "star-four");
        TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
        TweenMax.fromTo("#lv1_item-six", 1, {scale:3},{scale:0});
    });
    $lv1_item_six.addEventListener("mouseup", function(){
        $audio_eyes.pause();
        $audio_legs.play();
        $lv1_item_six.setAttribute("class", "invisible");
        audioFivePlay();
        $(".eyes").addClass("opacity");
    });
}
function audioFivePlay(){
        console.log("audio Five played");
    $lv1_item_three.addEventListener("click", function(){
        $star_five.setAttribute("class", "star-five");
        TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
        TweenMax.fromTo("#lv1_item-three", 1, {scale:3},{scale:0});
    });
    $lv1_item_three.addEventListener("mouseup", function(){
        $audio_legs.pause();
        $lv1_item_three.setAttribute("class", "invisible");
        $(".legs").addClass("opacity");
        window.setTimeout( youWinLevelOne, 2000 );
    });
}