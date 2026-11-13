"use strict";
const EXAM_DATE = new Date("2026, 11, 25")

function checkScreen() {
  if (window.innerWidth < 600) {
       document.getElementById("screenMsg").textContent = "Small screen: turn your device sideways for a bigger card."
    } else {
    document.getElementById("screenMsg").textContent = "Window width: " + window.innerWidth + "px";

    }
}

function startApp(){
    checkScreen();
}