$('#bird').sprite({fps: 12, no_of_frames: 3});

var youWinVal;
var $star_one = document.querySelector(".star-one");
var $star_two = document.querySelector(".star-two");
var $star_three = document.querySelector(".star-three");
var $star_four = document.querySelector(".star-four");
var $star_five = document.querySelector(".star-five");

var $youWin_bkg = document.querySelector(".you-win-bkg");

var $item_one = document.getElementById("item-one");
var $item_two = document.getElementById("item-two");//never used
var $item_three = document.getElementById("item-three");
var $item_four = document.getElementById("item-four");
var $item_five = document.getElementById("item-five");
var $item_six = document.getElementById("item-six");

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
    // TweenMax.to("#item-one", 0.5, {top: 50});
    // TweenMax.to("#item-two", 0.75, {left: 550, delay: 0.25});
    // TweenMax.from("#item-three", 1, {top: 250, alpha: 0, delay: 0.5});
    // TweenMax.from("#item-four", 1, {top: 330, alpha: 0, delay: 1});
    // TweenMax.from("#item-six", 1, {alpha: 0, delay: 2});
    //document.body.className = "animate";
    $audio_arms.play();
    audioOnePlay();
}
//function
//first play audio 
//if you select the first correct item, then a star appears. scales from 0 to 100%;
//correct item choosen spins and zooms off the screen
    //add star to first position.
    //start next audio, call function.
function audioOnePlay(){
    console.log("audio played");
    $item_one.addEventListener("click", function(){
        $star_one.setAttribute("class", "star-one");
        TweenMax.to(".star-one", 1, {scale:1});
        TweenMax.from("#item-one", 1, {scale:0});
    });
    $item_one.addEventListener("mouseup", function(){
        $audio_nose.play();
        $item_one.setAttribute("class", "invisible");
        audioTwoPlay();
        $(".arms").addClass("opacity");
    });
    // $item_two.addEventListener("click", function(){
    //     $audio_whoops.play();
    // });
    // $item_three.addEventListener("click", function(){
    //     $audio_nah.play();
    // });
    // $item_four.addEventListener("click", function(){
    //     $audio_whoops.play();
    // });
    // $item_five.addEventListener("click", function(){
    //     $audio_nah.play();
    // });
}
    // $thing.setAttribute("class", "thing active");
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
function audioTwoPlay(){
        console.log("audio Two played");
    $item_five.addEventListener("click", function(){
        $star_two.setAttribute("class", "star-two");
        TweenMax.to(".star-two", 1, {scale:1});
        TweenMax.from("#item-five", 1, {scale:0});
    });
    $item_five.addEventListener("mouseup", function(){
        $audio_mouth.play();
        $item_five.setAttribute("class", "invisible");
        audioThreePlay();
        $(".nose").addClass("opacity");
    });
}
function audioThreePlay(){
        console.log("audio Three played");
    $item_four.addEventListener("click", function(){
        $star_three.setAttribute("class", "star-three");
        TweenMax.to(".star-three", 1, {scale:1});
        TweenMax.from("#item-four", 1, {scale:0});
    });
    $item_four.addEventListener("mouseup", function(){
        $audio_eyes.play();
        $item_four.setAttribute("class", "invisible");
        audioFourPlay();
        $(".mouth").addClass("opacity");
    });
}
function audioFourPlay(){
        console.log("audio Four played");
    $item_six.addEventListener("click", function(){
        $star_four.setAttribute("class", "star-four");
        TweenMax.to(".star-four", 1, {scale:1});
        TweenMax.from("#item-six", 1, {scale:0});
    });
    $item_six.addEventListener("mouseup", function(){
        $audio_legs.play();
        $item_six.setAttribute("class", "invisible");
        audioFivePlay();
        $(".eyes").addClass("opacity");
    });
}
function audioFivePlay(){
        console.log("audio Five played");
    $item_three.addEventListener("click", function(){
        $star_five.setAttribute("class", "star-five");
        TweenMax.to(".star-five", 1, {scale:1});
        TweenMax.from("#item-three", 1, {scale:0});
    });
    $item_three.addEventListener("mouseup", function(){
        $item_three.setAttribute("class", "invisible");
        $(".legs").addClass("opacity");
        window.setTimeout( youWinLevelOne, 2000 );
    });
}