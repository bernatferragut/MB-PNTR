// 1. ON LOAD
window.onload = () => console.log('CONNECTED');

// 2. DATA OBJECT
let data = {
    title : 'MAIN TITLE',
}

// 3. RENDER FUNCTIONS
// TITLE
function Title(data) {
    return `
    <h1 class="fadeIn">${data.title}</h1>
    `
}

// MAIN CONTENT,
function Content(data) {
    return `
    ${Title(data)}
    `
}

// 4. HTML INJECTION
document.querySelector('.app').innerHTML = Content(data);

