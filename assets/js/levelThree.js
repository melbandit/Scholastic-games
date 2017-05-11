$('#iggy-char-2').sprite({fps: 4, no_of_frames: 7});
$('#purple-char-2').sprite({fps: 2, no_of_frames: 5});
$('#neba-char-2').sprite({fps: 2, no_of_frames: 5});

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

var left = getRandom(-10, 10);
var right = getRandom(820, 860);
var delay = getRandom(1, 3);
//basic illustration of TweenMax's repeat, repeatDelay, yoyo and onRepeat
//var color = document.querySelectorAll('.color');
function getRandom(min, max) {
    return min + Math.random() * (max - min);
}
var colors = $(".color").get();
shuffle(colors);
var stars = $(".star").get();
shuffle(stars);

TweenMax.staggerTo(colors, 2, {left:20, yoyo:true, repeat:-1, ease:Power2.easeInOut}, 0.3);
shuffle(colors);
TweenMax.staggerTo(stars, 1, {rotation:15, yoyo:true, repeat:-1, ease:Power2.easeInOut}, 0.3);
shuffle(stars);
TweenMax.staggerTo(colors, 5, {rotation:20, yoyo:true, repeat:-1, ease:Power2.easeInOut}, 0.3);
shuffle(colors);
TweenMax.staggerTo(colors, 3, {top:10, yoyo:true, repeat:-1, ease:Power2.easeInOut}, 0.3);


TweenMax.to(".thought-bubble", 2, {transformOrigin:"0% 100%", scaleY: 1.05, rotation: 3, yoyo: true, repeat: -1, ease:Power2.easeInOut})

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
var $drop_six = document.querySelector(".drop-six");
var $drop_seven = document.querySelector(".drop-seven");
var $drop_eight = document.querySelector(".drop-eight");
var $drop_nine = document.querySelector(".drop-nine");
var $drop_ten = document.querySelector(".drop-ten");
window.onload = function() {
    // $(".fade").css("display", "none");
    // $(".fade").fadeIn(2000);
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
    revealColor();
    revealColorTwo();
    revealColorThree();
    revealColorFour();
    revealColorFive();
}
function youWinLevelThree(){
    console.log("You Win!!");
    localStorage.setItem("level3complete", 3);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
}
function revealColor(){
    if(localStorage.getItem("lvThreeStar1")){
        $star_one.setAttribute("class", "star-one");
        TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
        $drop_one.setAttribute("class", "invisible");
        $drop_nine.setAttribute("class", "drop-nine");
    }else{
        $audio_match.play();
        $( function() {
            $( "#droppable-one" ).droppable({
                accept: "#draggable-one",
                drop: function( event, ui ) {
                    accept: ".drag-one",
                    $star_one.setAttribute("class", "star-one");
                    TweenMax.fromTo(".star-one", 1, {scale:3}, {scale:1});
                    TweenMax.to(".color-one", 1, {left:860, top:60});
                    TweenMax.from(".drag-one", 1, {scale:0});
                    $drop_one.setAttribute("class", "invisible");
                    $drop_nine.setAttribute("class", "drop-nine");
                    $('#iggy-char').sprite({fps: 4, no_of_frames: 7, play_frames: 7});
                    localStorage.setItem("lvThreeStar1", 1);
                }
            });
        });
    }
}
function revealColorTwo(){
    if(localStorage.getItem("lvThreeStar2")){
        $star_two.setAttribute("class", "star-two");
        TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
        $drop_nine.setAttribute("class", "invisible");
        $drop_five.setAttribute("class", "drop-five");
    }else{
        $( function() {
            $( "#droppable-nine" ).droppable({
                accept: "#draggable-nine",
                drop: function( event, ui ) {
                    accept: ".drag-nine",
                    $star_two.setAttribute("class", "star-two");
                    TweenMax.fromTo(".star-two", 1, {scale:3}, {scale:1});
                    TweenMax.to(".color-nine", 1, {left:860, top:200});
                    TweenMax.from(".drag-nine", 1, {scale:0});
                    $drop_nine.setAttribute("class", "invisible");
                    $drop_six.setAttribute("class", "drop-six");
                    $('#iggy-char').sprite({fps: 4, no_of_frames: 7, play_frames: 7});
                    localStorage.setItem("lvThreeStar2", 2);
                }
            });
        });
    }
}
localStorage.clear();
function revealColorThree(){
    if(localStorage.getItem("lvThreeStar3")){
        $star_three.setAttribute("class", "star-three");
        TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
        $drop_six.setAttribute("class", "invisible");
        $drop_four.setAttribute("class", "drop-four");
    }else{
        $( function() {
                $( "#droppable-six" ).droppable({
                    accept: "#draggable-six",
                    drop: function( event, ui ) {
                        accept: "#draggable-six",
                        $star_three.setAttribute("class", "star-three");
                        TweenMax.fromTo(".star-three", 1, {scale:3}, {scale:1});
                        TweenMax.to(".color-six", 1, {left:860, top:360});
                        TweenMax.from(".drag-six", 1, {scale:0});
                        $drop_six.setAttribute("class", "invisible");
                        $drop_four.setAttribute("class", "drop-four");
                        $('#iggy-char').sprite({fps: 4, no_of_frames: 7, play_frames: 7});
                        localStorage.setItem("lvThreeStar3", 3);
                }
            });
        });
    }
}
function revealColorFour(){
    if(localStorage.getItem("lvThreeStar4")){
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
                        TweenMax.to(".color-four", 1, {left:860, top:500});
                        TweenMax.from(".drag-four", 1, {scale:0});
                        $drop_four.setAttribute("class", "invisible");
                        $drop_five.setAttribute("class", "drop-five");
                        $('#iggy-char').sprite({fps: 4, no_of_frames: 7, play_frames: 7});
                        localStorage.setItem("lvThreeStar4", 4);
                }
            });
        });
    }
}
function revealColorFive(){
    if(localStorage.getItem("lvThreeStar5")){
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
                        TweenMax.to(".color-five", 1, {left:860, top:620});
                        TweenMax.from(".drag-five", 0.5, {scale:0});
                        $('#iggy-char').sprite({fps: 4, no_of_frames: 7, play_frames: 7});
                        localStorage.setItem("lvThreeStar5", 5);
                        window.setTimeout( youWinLevelThree, 1000 );
                        console.log("did it!");
                }
            });
        });
    }
}