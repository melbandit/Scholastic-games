var youWinVal;
var $star_one = document.querySelector(".star-one");
var $star_two = document.querySelector(".star-two");
var $star_three = document.querySelector(".star-three");
var $star_four = document.querySelector(".star-four");
var $star_five = document.querySelector(".star-five");
var $youWin_bkg = document.querySelector(".you-win-bkg");
var $item_three = document.querySelector("item-three");
var $item_four = document.querySelector("item-four");
var $item_five = document.querySelector("item-five");
var $audio_match = document.getElementById("audio--match");
var $audio_whoops = document.getElementById("audio--whoops");
var $audio_nah = document.getElementById("audio--nah");
var $link_two = document.querySelector("link-two");
var $activate_level_three = document.querySelector("activateLevelThree");
var $drop_one = document.querySelector(".drop-one");
var $drop_two = document.querySelector(".drop-two");
var $drop_three = document.querySelector(".drop-three");
var $drop_four = document.querySelector(".drop-four");
var $drop_five = document.querySelector(".drop-five");
var $drag_one = document.querySelector(".drag-one");
var $drag_two = document.querySelector(".drag-two");
var $drag_three = document.querySelector(".drag-three");
var $drag_four = document.querySelector(".drag-four");
var $drag_five = document.querySelector(".drag-five");
window.onload = function() {
    // $(".fade").css("display", "none");
    // $(".fade").fadeIn(2000);
    // TweenMax.to(".back--button", 1, {scaleX:5, scaleY:5});
    // TweenMax.to("#item-one", 0.5, {top: 50});
    // TweenMax.to("#item-two", 0.75, {left: 550, delay: 0.25});
    // TweenMax.from("#item-three", 1, {top: 250, alpha: 0, delay: 0.5});
    // TweenMax.from("#item-four", 1, {top: 330, alpha: 0, delay: 1});
    // TweenMax.from("#item-six", 1, {alpha: 0, delay: 2});
    //document.body.className = "animate";
    $( "#draggable-one" ).draggable();
    $( "#draggable-two" ).draggable();
    $( "#draggable-three" ).draggable();
    $( "#draggable-four" ).draggable();
    $( "#draggable-five" ).draggable();
    $audio_match.play();
    revealShape();
    revealShapeTwo();
    revealShapeThree();
    revealShapeFour();
    revealShapeFive();
}
function youWinVal(){
    console.log("working");
    if(youWinVal === 1){
        console.log("youWinVal worked");
        $link_two.setAttribute("class", "link-two");
    }
}
function youWin(){
    console.log("You Win!!");
    youWinVal++;
    $youWin_bkg.setAttribute("class", "you-win-bkg");
    console.log(youWinVal);
    //youWinVal();
}
function revealShape(){
    $( function() {
        $( "#droppable-one" ).droppable({
            accept: "#draggable-one",
            drop: function( event, ui ) {
                accept: ".drag-one",
                $star_one.setAttribute("class", "star-one");
                TweenMax.to(".star-one", 1, {scale:1});
                TweenMax.from(".drag-one", 1, {scale:0});
                $drop_one.setAttribute("class", "invisible");
                // $drag_one.setAttribute("class", "invisible");
                $drop_two.setAttribute("class", "drop-two");
            }
        });
    });
}
function revealShapeTwo(){
    $( function() {
        $( "#droppable-two" ).droppable({
            accept: "#draggable-two",
            drop: function( event, ui ) {
                accept: ".drag-two",
                $star_two.setAttribute("class", "star-two");
                TweenMax.to(".star-two", 1, {scale:1});
                TweenMax.from(".drag-two", 1, {scale:0});
                $drop_two.setAttribute("class", "invisible");
                // $drag_two.setAttribute("class", "invisible");
                $drop_three.setAttribute("class", "drop-two");
            }
        });
    });
}
function revealShapeThree(){
    $( function() {
            $( "#droppable-three" ).droppable({
                accept: "#draggable-three",
                drop: function( event, ui ) {
                    accept: "#draggable-three",
                    $star_three.setAttribute("class", "star-three");
                    TweenMax.to(".star-three", 1, {scale:1});
                    TweenMax.from(".drag-three", 1, {scale:0});
                    $drop_three.setAttribute("class", "invisible");
                    // $drag_three.setAttribute("class", "invisible");
                    $drop_four.setAttribute("class", "drop-three");
            }
        });
    });
}
function revealShapeFour(){
    $( function() {
            $( "#droppable-four" ).droppable({
                accept: "#draggable-four",
                drop: function( event, ui ) {
                    accept: "#draggable-four",
                    $star_four.setAttribute("class", "star-four");
                    TweenMax.to(".star-four", 1, {scale:1});
                    TweenMax.from(".drag-four", 1, {scale:0});
                    $drop_four.setAttribute("class", "invisible");
                    // $drag_four.setAttribute("class", "invisible");
                    $drop_five.setAttribute("class", "drop-four");
            }
        });
    });
}
function revealShapeFive(){
    $( function() {
            $( "#droppable-five" ).droppable({
                accept: "#draggable-five",
                drop: function( event, ui ) {
                    accept: "#draggable-five",
                    $star_five.setAttribute("class", "star-five");
                    TweenMax.to(".star-five", 0.5, {scale:1});
                    TweenMax.from(".drag-five", 0.5, {scale:0});
                    $drop_five.setAttribute("class", "invisible");
                    $drag_one.setAttribute("class", "invisible");
                    $drag_two.setAttribute("class", "invisible");
                    $drag_three.setAttribute("class", "invisible");
                    $drag_four.setAttribute("class", "invisible");
                    $drag_five.setAttribute("class", "invisible");
                    window.setTimeout( youWin, 1000 );
            }
        });
    });
}