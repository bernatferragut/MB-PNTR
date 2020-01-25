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

// TWEAKPANE - ACCELEROMETER
const paneAcc = new Tweakpane({
    container: document.getElementById('acc'),
    title: 'Microbit accelerometer',
});
paneAcc.addInput(PARAMS, 'acc',{ label: 'accel(x,y)'});
// TWEAKPANE - SEPARATOR
// paneAcc.addSeparator();
// paneAcc.addSeparator();
// TWEAKPANE - BUTTON SAVE
paneAcc.addButton({
    title: 'Save Galaxy',
  }).on('click', (value) => {
    console.log(value);
  });
// TWEAKPANE - LINE
const paneLine = new Tweakpane({
    container: document.getElementById('line'),
    // title: 'Line Parameters',
});
// console.log(paneLine);
paneLine.addInput(PARAMS, 'line');
paneLine.addInput(PARAMS, 'lineWidth', {
    min : 0,
    max : 3
});
paneLine.addInput(PARAMS, 'lineColor');

// TWEAKPANE - DOT
const paneDot = new Tweakpane({
    container: document.getElementById('dot'),
    // title: 'Dot Parameters',
});
// console.log(paneLine);
paneDot.addInput(PARAMS, 'dot');
paneDot.addInput(PARAMS, 'dotWidth', {
    min : 0,
    max : 3
});
paneDot.addInput(PARAMS, 'dotColor');
