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
        btnA:true,
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
    console.log('...searching device')
    data.paired = true;
    Content(data);
    Render();
    //microBit.searchDevice();
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
        <h3>${data.mbData.btnA}</h3>
        <ul>
            <li>${data.mbData.x}</li>
            <li>${data.mbData.y}</li>
            <li>${data.mbData.z}</li>
        </ul>
        <h3>${data.mbData.btnB}</h3>
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
// MICROBIT : SEARCH

// ON CONNECTED
microBit.onConnect(function(){
    // Paired
    data.paired = true;
    console.log('microbit paired: ', data.paired);

    Content(data);

    document.querySelector('.app').innerHTML = Content(data);
})

// BLE SUBSCRIBE SERVICE
microBit.onBleNotify(function(){
    data.paired = true;

    mbData();

})



