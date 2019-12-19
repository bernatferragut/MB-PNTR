// 1. ON LOAD
window.onload = () => {
    // CHECK TERMINAL
    console.log('...JS working...');
    // LOAD MICROBIT JS
    // new microbit creation
    let microBit = new uBit();
    console.log(microbit);
}

let microBit = new uBit();
console.log(microbit);

// 2. DATA OBJECT
let data = {
    title : 'LASER ° SKETCH',
    pairButton : 'PAIR MICROBIT',
}

// 3. RENDER FUNCTIONS
// TITLE
function Title(data) {
    return `
    <div class="flex-container fadeIn">
        <h1>${data.title}</h1>
    </div>
    `
}

// PAIR BUTTON
function PairButton(data) {
    return `
    <div class="flex-container fadeIn">
        <button class="btn">${data.pairButton}</button>
    </div>
    `
}

function PairMicrobit() {

}


// MAIN CONTENT,
function Content(data) {
    return `
    ${Title(data)}
    ${PairButton(data)}
    `
}

// 4. HTML INJECTION
document.querySelector('.app').innerHTML = Content(data);

// 5. MICROBIT

var microBit;

var iconLeft = [
  ['0', '0', '0', '0', '0'],
  ['0', '1', '0', '1', '0'],
  ['0', '0', '0', '0', '0'],
  ['1', '0', '0', '0', '1'],
  ['0', '1', '1', '1', '0']
]

var iconRight = [
  ['0', '0', '0', '0', '0'],
  ['0', '1', '0', '1', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '1', '1', '1', '0'],
  ['1', '0', '0', '0', '1']
]

// new microbit creation
microBit=new uBit();

microBit.onConnect(function(){
  console.log("connected");
  // HTML
  document.getElementById("connected").innerHTML="true";
  document.getElementById("properties").classList.toggle('inactive');

  // Buttons
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
  });

  microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
  });
});

microBit.onDisconnect(function(){
  console.log("disconnected");
  // HTML
  document.getElementById("connected").innerHTML="false";
});

function searchDevice(){
  microBit.searchDevice();
}

// We get the microbit services characteristics information
microBit.onBleNotify(function(){
  document.getElementById("buttonA").innerHTML=microBit.getButtonA();
  document.getElementById("buttonB").innerHTML=microBit.getButtonB();
  // document.getElementById("buttonAB").innerHTML=microBit.getButtonAB();

  document.getElementById("acc_X").innerHTML=microBit.getAccelerometer().x;
  document.getElementById("acc_Y").innerHTML=microBit.getAccelerometer().y;
  document.getElementById("acc_Z").innerHTML=microBit.getAccelerometer().z;

  document.getElementById("temp").innerHTML=microBit.getTemperature();
  document.getElementById("bearing").innerHTML=microBit.getBearing();
})


var ledMatrix = [
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

function updatePixel(x,y,value){
  if (value){
    ledMatrix[x][y]=1;
  }else{
    ledMatrix[x][y]=0;
  }
  microBit.writeMatrixIcon(ledMatrix);
}

function updateText(){
  text=document.getElementById("newText").value;
  console.log(text);
  microBit.writeMatrixText(text);
}
