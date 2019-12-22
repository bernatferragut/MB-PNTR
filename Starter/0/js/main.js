// 1. ON LOAD
window.onload = () => {
    console.log('1.js-activated!');
}

// 2. DATA OBJECTS
// GENERAL DATA
let data = {
    paired : false,
    title1 : 'S°K°E°T°C°H',
    pairButtonText : 'PAIR MICROBIT',
    title2 : 'MICROBIT PAIRED',
}
// MICROBIT DATA
let microBit = new uBit();
console.log('microbit data: ', microBit);

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
// TITLE2
function Title2(data) {
    return `
    <div class="flex-container fadeIn">
        <h1>${data.title2}</h1>
    </div>
    `
}
// MICROBIT : SEARCH
function searchDevice(){
    console.log('...searching device')
    microBit.searchDevice();
}
// ON CONNECTED
microBit.onConnect(function(){
    // Paired
    data.paired = true;
    console.log('microbit paired: ', data.paired);

    Content(data);

    document.querySelector('.app').innerHTML = Content(data);
})

// MB DATA
function mbData() {
    return `
    <div class="flex-container fadeIn">
        <h3>${microBit.getButtonA()}</h3>
        <ul>
            <li>${microBit.getAccelerometer().x}</li>
            <li>${microBit.getAccelerometer().y}</li>
            <li>${microBit.getAccelerometer().z}</li>
        </ul>
        <h3>${microBit.getButtonB()}</h3>
    </div>
    `
}

// BLE SUBSCRIBE SERVICE
microBit.onBleNotify(function(){
    data.paired = true;

    mbData();

})

// CANVAS CREATION
function CreateCanvas() {
    console.log('Here we create the Canvas')
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

// 4. HTML INJECTION
document.querySelector('.app').innerHTML = Content(data);



