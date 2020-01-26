// JS
const PARAMS = {
    acc : {x : 0, y : 0},
    line : false,
    lineWidth : 0.1,
    lineColor : {r: 173, g: 255, b: 47},
    dot : false,
    dotWidth : 0.25,
    dotColor : {r: 255, g: 99, b: 71},
}

//// TWEAKPANE /////
// TWEAKPANE - DOT
const paneDot = new Tweakpane({
    container: document.getElementById('dot'),
    // title: 'Dot Parameters',
});
// console.log(paneLine);
paneDot.addInput(PARAMS, 'dot', {label : 'DOT'});
paneDot.addInput(PARAMS, 'dotWidth', {
    min : 0,
    max : 3,
    label : 'DOT WIDTH'
});
paneDot.addInput(PARAMS, 'dotColor', {label : 'DOT COLOR'});

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

// TWEAKPANE - ACCELEROMETER
const paneAcc = new Tweakpane({
    container: document.getElementById('acc'),
    title: 'MICROBIT ACCELEROMETER',
});
paneAcc.addInput(PARAMS, 'acc',{ label: 'ACCEL (X,Y)'});
// TWEAKPANE - BUTTON SAVE
paneAcc.addButton({
    title: 'Save Galaxy',
  }).on('click', (value) => {
    console.log(value);
  });
  //// TWEAKPANE /////