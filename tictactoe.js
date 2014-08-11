// This is my first attempt at making a tic tac toe game using javascript. My goal is to do this without looking at other people's game code. Of course, I'm still learning JS, so I will have to look at people's click event code and learn other things about making a user interface.

// This version uses the HTML5 canvas. I'm starting to think HTML5 canvas might not be the best thing to use for interactive web apps, so future versions will try other things.


// define centerpoint of each square

var topLeftXY = [20,20]
var topCenterXY = [80,20]
var topRightXY = [140,20]

var midLeftXY = [20,80]
var midCenterXY = [80,80]
var midRightXY = [140,80]

var bottomLeftXY = [20,140]
var bottomCenterXY = [80,140]
var bottomRightXY = [140,140]

// define how to draw a line

function line(ctx, x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}

// define what the canvas and context are from html

var canvas = document.querySelector("canvas"),
    elemLeft = canvas.offsetLeft,
    elemTop = canvas.offsetTop,
    context = canvas.getContext('2d'),
    elements = [];
var ctx = canvas.getContext("2d");

// draw an X, using lines and centerpoint of each square

function drawX(a,b) {
    line(ctx, a,b,a+40,b+40);
    line(ctx, a,b+40,a+40,b);
    ctx.stroke();
}

// draw an O, using arcs and centerpoint of each square

function drawO(a,b) {
    ctx.moveTo(a+40,b+20);
    ctx.arc(a+20,b+20,20,0,2*Math.PI);
    ctx.stroke();
}

// draw the tic tac toe board

function drawBoard () {
    line(ctx,70,10,70,190);
    line(ctx,130,10,130,190);
    line(ctx,10,70,190,70);
    line(ctx,10,130,190,130);
    ctx.stroke();

}

// call the tictactoe board when the JS is loaded

drawBoard();

// this version will make a random tictactoe board every time you refresh the page. this version does not know anything about turn taking or when the game is won.

var availableSquares = [topLeftXY,topCenterXY,topRightXY,midLeftXY,midCenterXY,midRightXY,bottomLeftXY,bottomCenterXY,bottomRightXY]
while (availableSquares.length > 0){
    var placementX = Math.floor(Math.random()*availableSquares.length);
    drawX(availableSquares[placementX][0],availableSquares[placementX][1]);
    availableSquares.splice(placementX,1);
    var placementO = Math.floor(Math.random()*availableSquares.length);
    drawO(availableSquares[placementO][0],availableSquares[placementO][1]);
    availableSquares.splice(placementO,1);
}
