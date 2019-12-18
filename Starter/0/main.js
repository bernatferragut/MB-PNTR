// 1. ON LOAD
window.onload = () => console.log('CONNECTED');

// 2. DATA OBJECT
let data = {
    title : 'MAIN TITLE',
    subTitle : 'SUB TITLE'
}

// 3. RENDER TITLE
function Title(data) {
    return `
    <h1>${data.title}</h1>
    `
}

// 4. HTML INJECTION
document.querySelector('.app').innerHTML = Title(data);