$('#neba-char').sprite({fps: 5, no_of_frames: 5, play_frames: 6});
//sessionStorage.clear();
//localStorage.clear();
var $audio_home = document.getElementById("audio--homeMusic");
var $link_two = document.querySelector(".link-two");
var $link_three = document.querySelector(".link-three");
var $link_four = document.querySelector(".link-four");
var $youWin_bkg = document.querySelector(".you-win-bkg");
// Start of local storage
window.onload = function() {
    youWinValCheck();
}
//End of local storage
function youWinValCheck(){
    if (localStorage.getItem("level1complete")) {
        console.log("LevelOneComplete!!!");
        $link_two.setAttribute("class", "link-two");
        $audio_home.pause();
    } else{
        $audio_home.play();
    }
    if (localStorage.getItem("level2complete")) {
        console.log("LevelTwoComplete!!!");
        $link_three.setAttribute("class", "link-three");
        $audio_home.pause();
    }
    if (localStorage.getItem("level3complete")) {
        console.log("LevelThreeComplete!!!");
        $link_four.setAttribute("class", "link-four");
        $audio_home.pause();
    }
}