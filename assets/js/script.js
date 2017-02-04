//sessionStorage.clear();
//localStorage.clear();

// Start of local storage
window.onload = function() {
    youWinValCheck();
}
//End of local storage
var $link_two = document.querySelector(".link-two");
var $link_three = document.querySelector(".link-three");
var $link_four = document.querySelector(".link-four");
var $youWin_bkg = document.querySelector(".you-win-bkg");


function youWinValCheck(){
    if (localStorage.getItem("level1complete")) {
        console.log("LevelOneComplete!!!");
        $link_two.setAttribute("class", "link-two");
    }
    if (localStorage.getItem("level2complete")) {
        console.log("LevelTwoComplete!!!");
        $link_three.setAttribute("class", "link-three");
    }
    if (localStorage.getItem("level3complete")) {
        console.log("LevelThreeComplete!!!");
        $link_four.setAttribute("class", "link-four");
    }
}