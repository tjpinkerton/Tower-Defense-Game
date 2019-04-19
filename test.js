/*jshint esversion: 6 */
// @ts-check

//Code to initialize the canvas for us
window.onload = function() {
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("myCanvas") );
    let height = canvas.height = window.innerHeight;
    let width = canvas.width = window.innerWidth;
    let context = canvas.getContext("2d");

    //Test canvas out
    context.fillStyle = "black";
    context.fillRect(10,10, width-20, height-20);
};