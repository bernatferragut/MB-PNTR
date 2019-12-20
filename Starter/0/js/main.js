// 1. ON LOAD
window.onload = () => {
    console.log('1.js-activated!');
}

// 2. DATA OBJECTS
// GENERAL DATA
let data = {
    title : 'S°K°E°T°C°H',
    PairButtonText : 'PAIR MICROBIT',
    pairButtonCall : function() {
        console.log('PAIRED!');
    }
}
// MICROBIT DATA
let microBit = new uBit();
console.log(microBit);

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
        <button 
            class="btn" 
            onclick="microBit.onConnect()">
            ${data.PairButtonText}
        </button>
    </div>
    `
}
// MAIN CONTENT,
function Content(data) {
    return `
    ${Title(data)}
    ${PairButton(data)}
    `
    // Do we need to concat these 2 strings?
}

// 4. HTML INJECTION
document.querySelector('.app').innerHTML = Content(data);

// 5. MICROBIT
microBit.onConnect(function() {
    console.log('CONNECTED!')
});


