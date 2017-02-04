// Start of local storage
//window.onload = function() {
	youWinValCheck();
	console.log(youWinVal);
//}
//End of local storage
var youWinVal = 0;
var $link_two = document.querySelector("link-two");
var $link_three = document.querySelector("link-three");
var $link_four = document.querySelector("link-four");
var $youWin_bkg = document.querySelector(".you-win-bkg");

// function youWinVal(){
//     console.log("working");
//     if(youWinVal === 1){
//         console.log("youWinVal worked");
//         $link_two.setAttribute("class", "link-two");
//     }
//     if(youWinVal === 2){
//         console.log("youWinVal worked");
//         $link_two.setAttribute("class", "link-three");
//     }
//     if(youWinVal === 3){
//         console.log("youWinVal worked");
//         $link_two.setAttribute("class", "link-four");
//     }
// }
function youWinLevelOne(){
    console.log("You Win!!");
    //youWinVal = 1;
    localStorage.setItem('youWinVal', 1);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
    
    youWinValCheck();
    console.log(youWinVal);
    // youWinVal();
}
function youWinLevelTwo(){
    console.log("You Win!!");
    //localStorage.setItem('key', JSON.stringify(Math.random()));
    //youWinVal = 2;
    localStorage.setItem('youWinVal', 2);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
    console.log(youWinVal);
    youWinValCheck();
    // youWinVal();
}
function youWinLevelThree(){
    console.log("You Win!!");
    //youWinVal = 3;
    localStorage.setItem('youWinVal', 3);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
    console.log(youWinVal);
    youWinValCheck();
    // youWinVal();
}
function youWinValCheck(){
    console.log("working");
    if(youWinVal === 1){
        console.log("youWinVal worked");
        $link_two.setAttribute("class", "link-two");
    }
    if(youWinVal === 2){
        console.log("youWinVal worked");
        $link_two.setAttribute("class", "link-three");
    }
    if(youWinVal === 3){
        console.log("youWinVal worked");
        $link_two.setAttribute("class", "link-four");
    }
}