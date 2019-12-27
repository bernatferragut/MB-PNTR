// 0. MICROBIT OBJECT
console.log('js connected')

let microbitData ={
  acc_x : 0,
  acc_y : 0,
  acc_z : 0,
  btnA : false,
  btnB : false
};
// console.log(microbitData)
// 1. GENERAL DATA
let data = {
  paired : false,
  title1 : "sketch",
  buttonTitle : "pair the microbit",
  buttonAction2 : function() { console.log("pairing the microbit")},
  title2 : "paired",
  microbitData : {
    x: 0,
    y: 0,
    z: 0,
    btn_A : false,
    btn_B : false,
  }
}
// console.log(data)
// 2. HTML COMPONENTS RENDER FUNCTIONS
// 2.1 TITLE-1 FUNCTION COMPONENT - NOT PAIRED
function Title1(data) {
  return`
    <div>
      <h1>${data.title1}</h1>
    </div>
`
}
// 2.2 BUTTON FUNCTION COMPONENT - PAIRING ACTIVATION
function Button(data) {
  return`
    <div>
      <button onclick="buttonPairAction()">${data.buttonTitle}</button>
    </div>
`
}

// 2.3 TITLE-2 FUNCTION COMPONENT - PAIRED
function Title2(data) {
  return`
    <div>
      <h1>${data.title2}</h1>
    </div>
`
}

// 2.4 MICROBIT ACC AND BUTTONS DATA FUNCTION COMPONENT
function onMicrobitConnected(microbitData) {
  return `
    <h1>${microbitData.btnA}</h1>
    <ul>
      <li>${microbitData.acc_x}</li>
      <li>${microbitData.acc_y}</li>
      <li>${microbitData.acc_z}</li>
    </ul>
    <h1>${microbitData.btnB}</h1>
`
}
// 2.5 CANVAS RENDER FUNCTION 
function loadCanvas() {
  return `
  <div>
    <canvas mouseover="startDrawing()"></canvas>
  </div>
`
}

// 3. GENERAL RENDER FUNCTIONS WITH LOGIC
// 3.1 IF NOT PAIRED RENDER 2.1 & 2.2
function buttonPairAction(t1,t2) {
  data.paired = false;
   if(data.paired == true) {
     return `
      ${Title2(data)}
      ${onMicrobitConnected(microbitData)}
      ${loadCanvas(data)}
    `
// 3.2 ELSE RENDER 2.3, 2.4 & 2.5
   } else {
    return `
      ${Title1(data)}
      ${Button(data)}
    `
   }
}
// 4. START DRAWING ON THE CANVAS
function startDrawing() {
  console.log('Time for fun drawing!')
}

// FUNCTION CALLS
setTimeout(buttonPairAction,2000);
startDrawing();





