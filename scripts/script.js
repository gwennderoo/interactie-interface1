

// ******************
// JavaScript Document
// ******************


console.log("Howdy!");





// MUNTBUTTON VAR TIJDSLIJN

var muntButton1 = document.getElementById("coin1");
var muntButton2 = document.getElementById("coin2");
var muntButton3 = document.getElementById("coin3");
var muntButton4 = document.getElementById("coin4");
var muntButton5 = document.getElementById("coin5");
var muntButton6 = document.getElementById("coin6");
var muntButton7 = document.getElementById("coin7");
var muntButton8 = document.getElementById("coin8");
var muntButton9 = document.getElementById("coin9");
var muntButton10 = document.getElementById("coin10");


// TEKSTVAK VAR TIJDSLIJN

var tekstVak1 = document.querySelector("main ol li:nth-of-type(1) section");
var tekstVak2 = document.querySelector("main ol li:nth-of-type(2) section");
var tekstVak3 = document.querySelector("main ol li:nth-of-type(3) section");
var tekstVak4 = document.querySelector("main ol li:nth-of-type(4) section");
var tekstVak5 = document.querySelector("main ol li:nth-of-type(5) section");
var tekstVak6 = document.querySelector("main ol li:nth-of-type(6) section");
var tekstVak7 = document.querySelector("main ol li:nth-of-type(7) section");
var tekstVak8 = document.querySelector("main ol li:nth-of-type(8) section");
var tekstVak9 = document.querySelector("main ol li:nth-of-type(9) section");
var tekstVak10 = document.querySelector("main ol li:nth-of-type(10) section");

var audionaam3 = document.querySelector("audio:nth-of-type(3)")


// FUNCTION JAVA TIJDSLIJN

muntButton1.onclick = laatInfoZien

function laatInfoZien() {
    tekstVak1.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton2.onclick = laatInfoZien2

function laatInfoZien2() {
    tekstVak2.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton3.onclick = laatInfoZien3

function laatInfoZien3() {
    tekstVak3.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton4.onclick = laatInfoZien4

function laatInfoZien4() {
    tekstVak4.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton5.onclick = laatInfoZien5

function laatInfoZien5() {
    tekstVak5.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton6.onclick = laatInfoZien6

function laatInfoZien6() {
    tekstVak6.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton7.onclick = laatInfoZien7

function laatInfoZien7() {
    tekstVak7.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton8.onclick = laatInfoZien8

function laatInfoZien8() {
    tekstVak8.classList.toggle("verschuiven");
    console.log("kwak");

};

muntButton9.onclick = laatInfoZien9

function laatInfoZien9() {

    tekstVak9.classList.toggle("verschuiven");
    console.log("kwak");
    audionaam3.play()

};

muntButton10.onclick = laatInfoZien10

function laatInfoZien10() {
    tekstVak10.classList.toggle("verschuiven");
    console.log("kwak");

};






// ********
// DIALOOG 1

var dialoog = document.getElementById("dialog-scrooge");
var dialoogOpen = document.querySelector(".button-dialog");
var dialoogSluit = document.querySelector(".sluiten");

var audionaam = document.querySelector("audio:first-of-type")
var audionaam2 = document.querySelector("audio:nth-of-type(2)")

function openDialoog(){
    
    console.log("hoi")
    dialoog.classList.add("zichtbaar");
    audionaam.play()
    
}

dialoogOpen.onclick = openDialoog;
dialoogSluit.onclick = sluitDialoog;

function sluitDialoog(){

    dialoog.classList.remove("zichtbaar");
    audionaam2.play()
}






// *********
// DIALOOG 2

var dialoog2 = document.getElementById("dialog-sleutel"); 
// deze variable is voor de dialoog zelf

var dialoogOpen2 = document.querySelector(".button-sleutel");
// deze variable is voor de button om te openen

var dialoogSluit2 = document.querySelector(".sluiten2");
// deze variable is voor het x om de button dicht te doen


function openDialoog2(){
    
    console.log("hoi")
    dialoog2.classList.add("sleutel");
    audionaam.play()
    
}

dialoogOpen2.onclick = openDialoog2;
dialoogSluit2.onclick = sluitDialoog2;

function sluitDialoog2(){

    dialoog2.classList.remove("sleutel");

}
