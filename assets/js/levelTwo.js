//$('#purple-char').sprite({fps: 5, no_of_frames: 5, play_frames: 0});
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
var $item_three = document.querySelector("item-three");
var $item_four = document.querySelector("item-four");
var $item_five = document.querySelector("item-five");
var $audio_match = document.getElementById("audio--match");
var $audio_whoops = document.getElementById("audio--whoops");
var $audio_nah = document.getElementById("audio--nah");
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
function youWinLevelTwo(){
    console.log("You Win!!");
    localStorage.setItem("level2complete", 2);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}
function revealShape(){
    if(localStorage.getItem("lvTwoStar1")){
        $star_one.setAttribute("class", "star-one");
        TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
        $drop_one.setAttribute("class", "invisible");
        $drop_two.setAttribute("class", "drop-two");
    }else{
        $( function() {
            $( "#droppable-one" ).droppable({
                accept: "#draggable-one",
                drop: function( event, ui ) {
                    accept: ".drag-one",
                    $star_one.setAttribute("class", "star-one");
                    TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
                    $('#purple-char').sprite({fps: 5, no_of_frames: 5, play_frames: 11});
                    TweenMax.to(".one-pos", 1, {top: 250, left:0});
                    TweenMax.from(".drag-one", 1, {scale:0});
                    $drop_one.setAttribute("class", "invisible");
                    $drop_two.setAttribute("class", "drop-two");
                    // $drag_one.setAttribute("class", "invisible");
                    localStorage.setItem("lvTwoStar1", 1);
                }
            });
        });
    }
}
function revealShapeTwo(){
    if(localStorage.getItem("lvTwoStar2")){
        $star_two.setAttribute("class", "star-two");
        TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
        $drop_two.setAttribute("class", "invisible");
        $drop_three.setAttribute("class", "drop-two");
    }else{
        $( function() {
            $( "#droppable-two" ).droppable({
                accept: "#draggable-two",
                drop: function( event, ui ) {
                    accept: ".drag-two",
                    $star_two.setAttribute("class", "star-two");
                    TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
                    TweenMax.to(".two-pos", 1, {top: 450, left:200});
                    TweenMax.from(".drag-two", 1, {scale:0});
                    $('#purple-char').sprite({fps: 5, no_of_frames: 5, play_frames: 11});
                    $drop_two.setAttribute("class", "invisible");
                    // $drag_two.setAttribute("class", "invisible");
                    $drop_three.setAttribute("class", "drop-two");
                    localStorage.setItem("lvTwoStar2", 2);
                }
            });
        });
    }
}
function revealShapeThree(){
    if(localStorage.getItem("lvTwoStar3")){
        $star_three.setAttribute("class", "star-three");
        TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
        $drop_three.setAttribute("class", "invisible");
        $drop_four.setAttribute("class", "drop-three");
    }else{
        $( function() {
                $( "#droppable-three" ).droppable({
                    accept: "#draggable-three",
                    drop: function( event, ui ) {
                        accept: "#draggable-three",
                        $star_three.setAttribute("class", "star-three");
                        TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
                        $('#purple-char').sprite({fps: 5, no_of_frames: 5, play_frames: 11});
                        TweenMax.to(".three-pos", 1, {top: 102, left:200});
                        TweenMax.from(".drag-three", 1, {scale:0});
                        $drop_three.setAttribute("class", "invisible");
                        // $drag_three.setAttribute("class", "invisible");
                        $drop_four.setAttribute("class", "drop-three");
                        localStorage.setItem("lvTwoStar3", 3);
                }
            });
        });
    }
}
function revealShapeFour(){
    if(localStorage.getItem("lvTwoStar4")){
        $star_four.setAttribute("class", "star-four");
        TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
        $drop_four.setAttribute("class", "invisible");
        $drop_five.setAttribute("class", "drop-four");
    }else{
        $( function() {
                $( "#droppable-four" ).droppable({
                    accept: "#draggable-four",
                    drop: function( event, ui ) {
                        accept: "#draggable-four",
                        $star_four.setAttribute("class", "star-four");
                        TweenMax.fromTo(".star-four", 1, {scale:3}, {scale:1});
                        TweenMax.to(".four-pos", 1, {top: 400, left:-226});
                        TweenMax.from(".drag-four", 1, {scale:0});
                        $('#purple-char').sprite({fps: 5, no_of_frames: 5, play_frames: 11});
                        $drop_four.setAttribute("class", "invisible");
                        $drop_five.setAttribute("class", "drop-four");
                        localStorage.setItem("lvTwoStar4", 4);
                }
            });
        });
    }
}
function revealShapeFive(){
    if(localStorage.getItem("lvTwoStar5")){
        $star_five.setAttribute("class", "star-five");
        TweenMax.fromTo(".star-five", 1, {scale:3}, {scale:1});
        $drop_five.setAttribute("class", "invisible");
    }else{
        $( function() {
                $( "#droppable-five" ).droppable({
                    accept: "#draggable-five",
                    drop: function( event, ui ) {
                        accept: "#draggable-five",
                        $star_five.setAttribute("class", "star-five");
                        TweenMax.fromTo(".star-five", 0.5, {scale:3}, {scale:1});
                        TweenMax.to(".five-pos", 1, {top: 100, left:-224});
                        TweenMax.from(".drag-five", 0.5, {scale:0});
                        localStorage.setItem("lvTwoStar5", 5);
                        $drop_five.setAttribute("class", "invisible");
                        $drag_one.setAttribute("class", "invisible");
                        $drag_two.setAttribute("class", "invisible");
                        $drag_three.setAttribute("class", "invisible");
                        $drag_four.setAttribute("class", "invisible");
                        $drag_five.setAttribute("class", "invisible");
                        $('#purple-char').sprite({fps: 5, no_of_frames: 5, play_frames: 11});
                        window.setTimeout( youWinLevelTwo, 1000 );
                }
            });
        });
    }
}