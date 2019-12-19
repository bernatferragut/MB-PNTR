// 1. ON LOAD
window.onload = () => console.log('...JS working...');

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


// MAIN CONTENT,
function Content(data) {
    return `
    ${Title(data)}
    ${PairButton(data)}
    `
    setTimeout(
        PairButton(data)
    )
}

// 4. HTML INJECTION
document.querySelector('.app').innerHTML = Content(data);

