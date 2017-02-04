//sessionStorage.clear();
// localStorage.clear();

// Start of local storage
//window.onload = function() {
	youWinValCheck();
    console.log(output);
	
//}
//End of local storage
var output;
var youWinVal;
var $link_two = document.querySelector(".link-two");
var $link_three = document.querySelector(".link-three");
var $link_four = document.querySelector(".link-four");
var $youWin_bkg = document.querySelector(".you-win-bkg");
//console.log(youWinVal);
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
function OutputNumber(){
    var newWinVal = youWinVal + 1;
    sessionStorage.setItem('NewWinVal', newWinVal);
}
function youWinLevelOne(){
    console.log("You Win Lovel One!!");
    var youWinVal = 1;
    OutputNumber();
    var output = sessionStorage.getItem("NewWinVal");
    $youWin_bkg.setAttribute("class", "you-win-bkg");
     youWinValCheck();
    //console.log(youWinVal);
    // youWinVal();
}
function youWinLevelTwo(){
    console.log("You Win!!");
    //sessionStorage.setItem('key', JSON.stringify(Math.random()));
    //youWinVal = 2;
    sessionStorage.setItem('youWinVal', 2);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
    console.log(youWinVal);
    // youWinValCheck();
    // youWinVal();
}
function youWinLevelThree(){
    console.log("You Win!!");
    //youWinVal = 3;
    sessionStorage.setItem('youWinVal', 3);
    $youWin_bkg.setAttribute("class", "you-win-bkg");
    console.log(youWinVal);
    // youWinValCheck();
    // youWinVal();
}
function youWinValCheck(){
    //console.log("working");
    if(output === 2){
        console.log("youWinVal worked");
        $link_two.setAttribute("class", "link-two");
    }
    if(output === 3){
        console.log("youWinVal worked");
        $link_three.setAttribute("class", "link-three");
    }
    if(output === 4){
        console.log("youWinVal worked");
        $link_three.setAttribute("class", "link-four");
    }
}