/*global console, alert, prompt*/
// Function semantic 
/*jslint browser: true, devel: true, plusplus: true */

var frontButton = document.getElementById("front-button"),
    bread       = document.getElementById("bread"),
    breadTwo    = document.getElementById("bread-2"),
    breadThree  = document.getElementById("bread-3"),
    breadFour   = document.getElementById("bread-4"),
    cirOne      = document.getElementById("cir-1"),
    cirTwo      = document.getElementById("cir-2"),
    cirThree    = document.getElementById("cir-3"),
    cirFive     = document.getElementById("cir-5"),
    cirSeven    = document.getElementById("cir-7"),
    frontInt    = document.getElementById("front-int"),
    clk = 1;

function operate(time) {
    "use strict";
    
    /* before opearations */
    frontButton.style.left = "17px";
    frontButton.style.transform = "rotate(7deg)";
    frontButton.style.transition = "all 0.5s ease-in-out";
    
    bread.style.top = "30px";
    bread.style.transition = "all 1s ease-in-out";
    
    breadTwo.style.top = "30px";
    breadTwo.style.transition = "all 1s ease-in-out";
    
    breadThree.style.top = "30px";
    breadThree.style.transition = "all 1s ease-in-out";
    
    breadFour.style.top = "30px";
    breadFour.style.transition = "all 1s ease-in-out";
    
    frontInt.style.backgroundColor = "#810707";
    frontInt.style.transition = "all 4s ease-in-out";
    /* before opearations */
    
    clk += 1;
    
    time = window.setTimeout(operate, 1000);
    console.log(clk);
    
    if (clk === 5) {
        frontButton.style.left = "30px";
        frontButton.style.transform = "rotate(7deg)";
        frontButton.style.transition = "all 0.5s ease-in-out";
        
        bread.style.top = "-25px";
        bread.style.backgroundColor = "#c89456";
        cirOne.style.backgroundColor = "#c89456";
        cirTwo.style.backgroundColor = "#c89456";
        bread.style.transition = "top 1s ease-in-out";
        
        breadTwo.style.top = "-25px";
        breadTwo.style.backgroundColor = "#775732";
        cirThree.style.backgroundColor = "#775732";
        breadTwo.style.transition = "top 1s ease-in-out";
        
        breadThree.style.top = "-25px";
        breadThree.style.backgroundColor = "#c89456";
        cirFive.style.backgroundColor = "#c89456";
        breadThree.style.transition = "top 1s ease-in-out";
        
        breadFour.style.top = "-25px";
        breadFour.style.backgroundColor = "#775732";
        cirSeven.style.backgroundColor = "#775732";
        breadFour.style.transition = "top 1s ease-in-out";
        
        clearTimeout(time);
      frontButton.removeEventListener("click", operate);
    }
}



frontButton.addEventListener("click", operate);