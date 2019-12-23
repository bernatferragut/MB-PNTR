// 0. MICROBIT DATA
let microBit = new uBit();
console.log('microbit data: ', microBit);
// IS YOUR BROWSER BLUETOOTH ENABLED?
// microBit.isWebBluetoothEnabled();
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
    Content(data);
    Render();
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
    console.log('Canvas loaded')
    return`
    <div class="flex-container fadeIn">
        <canvas></canvas>
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
    // Paired
    console.log('microbit paired: ', data.paired);
      // Buttons
    microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    });

    microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    });
})
// BLE SUBSCRIBE SERVICE
microBit.onBleNotify(function(){
    console.log( `subscribing to:
        btnA, accX, accY, accZ, btnB
    `)
    document.getElementById("btnA").innerHTML=`A: ${microBit.getButtonA()}`;
    document.getElementById("accX").innerHTML=`x: ${microBit.getAccelerometer().x}`;
    document.getElementById("accY").innerHTML=`y: ${microBit.getAccelerometer().y}`;
    document.getElementById("accZ").innerHTML=`z: ${microBit.getAccelerometer().z}`;
    document.getElementById("btnB").innerHTML=`B: ${microBit.getButtonB()}`;
    // document.getElementById("btnAB").innerHTML=microBit.getButtonAB();

})



