// 0. MICROBIT DATA
let microBit = new uBit();
console.log('microbit data: ', microBit);
// 1. ON LOAD
window.onload = () => {
    console.log('1.js-activated!');
}
// 2. DATA OBJECTS
// GENERAL DATA
let data = {
    paired : false,
    title1 : 'S°K°E°T°C°H',
    pairButtonText : 'PAIR ° MICROBIT',
    title2 : 'MICROBIT PAIRED',
    mbData : {
        x:0,
        y:0,
        z:0,
        btnA:false,
        btnB:false,
        btnAB:false
    }
}
// 3. RENDER FUNCTIONS
// TITLE1
function Title1(data) {
    return `
    <div class="flex-container fadeIn">
        <h1>${data.title1}</h1>
    </div>
    `
}
// PAIR BUTTON
function PairButton(data) {
    return `
    <div class="flex-container fadeIn">
        <button 
            class="btn" 
            onclick="searchDevice()">
            ${data.pairButtonText}
        </button>
    </div>
    `
}
// BUTTON ACTION
function searchDevice(){
    searchMicrobit();
    console.log('...searching device')
    data.paired = true;
    // Gathering all the HTML strings
    Content(data);
    // Rendering the Conent to HTML
    Render();
    // Start the Canvas
    startCanvas();
}
// TITLE2
function Title2(data) {
    return `
    <div class="flex-container fadeIn">
        <h1>${data.title2}</h1>
    </div>
    `
}
// MB DATA
function mbData() {
    return `
    <div id="mbData" class="flex-container fadeIn">
        <div class="grid-container" >
            <p id="btnA"></p>
            <p id="accX"></p>
            <p id="accY"></p>
            <p id="accZ"></p>
            <p id="btnB"></p>
        </div>
    </div>
    `
}
// CANVAS CREATION
function CreateCanvas() {
    console.log('canvas loaded')
    return`
    <div class="flex-container fadeIn">
        <canvas id="canvas"></canvas>
    </div>
    `
}
// MAIN CONTENT,
function Content(data) {

    if(data.paired == true) {
        return `
        ${Title2(data)}
        ${mbData()}
        ${CreateCanvas()}
    `
    } else {
        return `
        ${Title1(data)}
        ${PairButton(data)}
    `
    }
}

function Render() {
    return document.querySelector('.app').innerHTML = Content(data);
}
// PROGRAM
Render();

//------------------

// SEARCH MICROBIT
function searchMicrobit(){
    microBit.searchDevice();
  }

// ON CONNECTED
microBit.onConnect(function(){
    console.log("connected");
    data.paired = true;
})
// ON DISCONNECT
microBit.onDisconnect(function(){
    console.log("disconnected");
  });
// BLE SUBSCRIBE SERVICE
microBit.onBleNotify(function(){
    console.log( `subscribing to:
        btnA, accX, accY, accZ, btnB
    `)
    // document.getElementById("btnA").innerHTML=`A: ${microBit.getButtonA()}`;
    document.getElementById("accX").innerHTML=`x: ${microBit.getAccelerometer().x}`;
    document.getElementById("accY").innerHTML=`y: ${microBit.getAccelerometer().y}`;
    document.getElementById("accZ").innerHTML=`z: ${microBit.getAccelerometer().z}`;
    // document.getElementById("btnB").innerHTML=`B: ${microBit.getButtonB()}`;
    // document.getElementById("btnAB").innerHTML=microBit.getButtonAB();
})
//-------------------

// CANVAS PROGRAMMING
function startCanvas() {

    // vars
    let w = window.innerWidth;
    let h = window.innerHeight;
    // requestAnimationFrame for creating Loop
    let requestAnimationFrame = window.requestAnimationFrame;
    // canvas
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d', {alpha : false});
    // resize
    canvas.addEventListener('resize', resizeCanvas);
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    // animation
    function drawCanvas() {
        // global transparency
        ctx.globalAlpha = 1;

        // draw square dot
        let x = microBit.getAccelerometer().x;
        let y = microBit.getAccelerometer().y;

        // Square
        // ctx.fillStyle = 'greenyellow';
        // ctx.fillRect(x, y, 10, 10);

        // Background
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Line
        // ctx.style.opacity = '0.5';
        ctx.strokeStyle = 'greenyellow';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round'

        ctx.lineTo(x,y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x,y);

        // loop and redraw Canvas
        requestAnimationFrame(drawCanvas);
    }
    drawCanvas();
}


/* TO DO

1 - IMPLEMENTATION OF 2 FUNCTIONS:
1.1 - P5JS MAP FUNCTION

p5.prototype.map

> use p5js function by importing the p5 implementation of it

1.2 - P5JS PERLIN NOISE FUNCTION
p5.prototype.noise 

> use p5js function by importing the p5 implementation of it

2- ADD BUTTONS
. DRAW
. ERASE
. SAVE
. LOAD
. 1.3.5 DOT BRUSH
. CIRCULAR MOTION - SPEED
. BG TRANSPARENCY


3- WEB GAZER JS

Implement the eye movement control of the drawing with this library

*/