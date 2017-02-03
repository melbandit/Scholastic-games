// Start of Color animation
var left = getRandom(700, 710);
var right = getRandom(820, 830);
var delay = getRandom(1, 2.5);
//basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
//var color = document.querySelectorAll('.color');
function getRandom(min, max) {
    return min + Math.random() * (max - min);
}
TweenMax.to(".color-one", 1, {left:left+"px", yoyo:true, delay: delay, repeat:40, repeatDelay: 2, ease:Linear.easeNone});
TweenMax.to(".color-two", 1.5, {left:left+"px", yoyo:true, delay: 2, repeat:40, repeatDelay: 2, ease:Linear.easeNone});
TweenMax.to(".color-three", 1, {left:left+"px", yoyo:true, delay: 3, repeat:40, repeatDelay: 3, ease:Linear.easeNone});
TweenMax.to(".color-four", 1, {left:left+"px", yoyo:true, delay: 3, repeat:40, repeatDelay: 3, ease:Linear.easeNone});
TweenMax.to(".color-five", 1.5, {left:left+"px", yoyo:true, delay: delay, repeat:40, repeatDelay: 4, ease:Linear.easeNone});
TweenMax.to(".color-six", 1, {left:left+"px", yoyo:true, delay: 4, repeat:40, repeatDelay: 4, ease:Linear.easeNone});
TweenMax.to(".color-seven", 1.5, {left:right+"px", yoyo:true, delay: 5, repeat:40, repeatDelay: 5, ease:Linear.easeNone});
TweenMax.to(".color-eight", 1.5, {left:right+"px", yoyo:true, delay: 5, repeat:40, repeatDelay: 5, ease:Linear.easeNone});
TweenMax.to(".color-eight", 2, {left:right+"px", yoyo:true, delay: 1, repeat:40, repeatDelay: 1, ease:Linear.easeNone});
TweenMax.to(".color-nine", 2, {left:right+"px", yoyo:true, delay: 1, repeat:40, repeatDelay: 1, ease:Linear.easeNone});
TweenMax.to(".color-ten", 2, {left:right+"px", yoyo:true, delay: delay, repeat:40, repeatDelay: delay, ease:Linear.easeNone});
// End of Color animation
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
var $drop_six = document.querySelector(".drop-one");
var $drop_seven = document.querySelector(".drop-two");
var $drop_eight = document.querySelector(".drop-three");
var $drop_nine = document.querySelector(".drop-four");
var $drop_ten = document.querySelector(".drop-five");
window.onload = function() {
    $( "#draggable-one" ).draggable();
    $( "#draggable-two" ).draggable();
    $( "#draggable-three" ).draggable();
    $( "#draggable-four" ).draggable();
    $( "#draggable-five" ).draggable();
    $( "#draggable-six" ).draggable();
    $( "#draggable-seven" ).draggable();
    $( "#draggable-eight" ).draggable();
    $( "#draggable-nine" ).draggable();
    $( "#draggable-ten" ).draggable();
    $audio_match.play();
    revealShape();
    revealShapeTwo();
    revealShapeThree();
    revealShapeFour();
    revealShapeFive();
}
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
//     $(".you-win-bkg").removeClass("invisible");
//     //console.log(youWinVal);
//     //youWinVal();
// }
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
                    window.setTimeout( youWinLevelThree, 1000 );
                    console.log("did it!");
            }
        });
    });
}