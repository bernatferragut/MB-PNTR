console.log('1.js-connected');
//////////////// CONTROL PARAMS ///////////
let PARAMS = {
    acc : {x : 0, y : 0},
    line : false,
    lineWidth : 0.1,
    lineColor : {r: 173, g: 255, b: 47},
    dot : false,
    dotWidth : 0.25,
    dotColor : {r: 255, g: 99, b: 71},
}
//////////////// CONTROL PARAMS ///////////

//////////////// TWEAKPANE ////////////////
// TWEAKPANE - DOT
const paneDot = new Tweakpane({
    container: document.getElementById('dot'),
});
paneDot.addInput(PARAMS, 'dot', {label : 'DOT'});
paneDot.addInput(PARAMS, 'dotWidth', {
    min : 0,
    max : 3,
    label : 'DOT WIDTH'
});
paneDot.addInput(PARAMS, 'dotColor', {label : 'DOT COLOR'});
// panelDot - CHANGES
paneDot.on('change', (value) => {
    console.log( 'dot: ', value);
})

// TWEAKPANE - LINE
const paneLine = new Tweakpane({
    container: document.getElementById('line'),
});
// console.log(paneLine);
paneLine.addInput(PARAMS, 'line',{label : 'LINE'});
paneLine.addInput(PARAMS, 'lineWidth', {
    min : 0,
    max : 3,
    label : 'LINE WIDTH'
});
paneLine.addInput(PARAMS, 'lineColor', {label : 'LINE COLOR'});
// panelLine - CHANGES
paneLine.on('change', (value) => {
    console.log( 'line: ', value);
})

// TWEAKPANE - ACCELEROMETER
const paneAcc = new Tweakpane({
    container: document.getElementById('acc'),
    title: 'MICROBIT ACCELEROMETER',
});
paneAcc.addInput(PARAMS, 'acc',{ label: 'ACCEL (X,Y)'});
// panelAcc - CHANGES
paneAcc.on('change', (value) => {
    console.log( 'accel: ', value);
})

// TWEAKPANE - BUTTON SAVE
paneAcc.addButton({
    title: 'Save Galaxy',
  }).on('click', () => {
    console.log('click detected');
    saveDrawing();
  });
//////////////// TWEAKPANE ////////////////

//////////////// MICROBIT PAIRING /////////
const pairBtn =document.querySelector('.btn');
pairBtn.addEventListener('click', microbitPairing);
let microbit = new uBit();
let isPaired = false;

function microbitPairing() {
    //1.search
    microbit.searchDevice();
    //2.connect
    microbit.onConnect( ()=> {
        isPaired = true;
        console.log("isPpared: ", isPaired);
    })
    //3.ble subscription
    microbit.onBleNotify(function(){
        PARAMS.acc.x = microbit.getAccelerometer().x;
        PARAMS.acc.y = microbit.getAccelerometer().y;
        // PARAMS.acc(x,y)
        // console.log(PARAMS.acc.x);
        // console.log(PARAMS.acc.y);
    })
    //4. button disappear
    pairBtn.disabled = true;
    //5. start drawing
    // start(PARAMS);
}
//////////////// MICROBIT PAIRING /////////

//////////////// CANVAS ///////////////////
const canvas = document.querySelector('canvas');
const ctx =  canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let brush = new Brush(ctx);
console.log('Params:', PARAMS.acc.y)
let frame;


// Animation
(function loop() {
    // LZR add composite filter
    ctx.globalCompositeOperation = "lighter";
    // line drawing
    if(PARAMS.line){
        // Background Color
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, w , h);
        // Drawing Dot
        let mx = brush.mapValues(PARAMS.acc.x,-1024,1024,0,w);
        let my = brush.mapValues(PARAMS.acc.y,-1024,1024,0,h);
        brush.draw_line(mx, my, PARAMS.lineWidth, PARAMS.lineColor);
    // dot drawing
    } else if(PARAMS.dot){
        // Background Color
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, w , h);
        // Drawing Dot
        let mx = brush.mapValues(PARAMS.acc.x,-1024,1024,0,w);
        let my = brush.mapValues(PARAMS.acc.y,-1024,1024,0,h);
        brush.draw_point(mx,my, PARAMS.dotWidth, PARAMS.dotColor);
        // allows to start path from here without jumping
        ctx.beginPath(); 
    // nothing drawing
    } else {
        ctx.clearRect(0, 0, w, h);
        // Drawing Axist
        let mx = brush.mapValues(PARAMS.acc.x,-1024,1024,0,w);
        let my = brush.mapValues(PARAMS.acc.y,-1024,1024,0,h);
        // Draw axis
        brush.draw_axis(mx,my, w, h);
    }
    // Loop
    frame = requestAnimationFrame(loop);
}());

// resize canvas
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// save drawing
function saveDrawing() {
    console.log('saveDrawing');
    // let finalCanvas = document.querySelector('#canvas');
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = canvas.toDataURL('image/png',1);
    a.download = 'canvas-image.png';
    a.click();
    document.body.removeChild(a);
}
//////////////// CANVAS ///////////////////



