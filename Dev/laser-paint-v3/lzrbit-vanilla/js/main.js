// JS
const PARAMS = {
    line : false,
    lineWidth : 0.1,
    lineColor : 'greenyellow',
    dot : false,
    dotWidth : 0.25,
    dotColor : 'tomato'
}

// TWEAKPANE
const pane = new Tweakpane({
    title: 'Parameters',
    container: document.getElementById('line'),
});
// console.log(paneLine);
pane.addInput(PARAMS, 'lineWidth');

pane.refresh();