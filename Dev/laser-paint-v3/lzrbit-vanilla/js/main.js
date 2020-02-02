console.log('1.js-connected');

//////////////// FIREBASE //////////////
// Your web app's Firebase configuration
let firebaseConfig = {
	apiKey: "AIzaSyBEjTnvCCkM4bRr73PJrCbC3HQ46p6cK5I",
    authDomain: "lzrbit-db.firebaseapp.com",
    databaseURL: "https://lzrbit-db.firebaseio.com",
    projectId: "lzrbit-db",
    storageBucket: "lzrbit-db.appspot.com",
    messagingSenderId: "488933348339",
    appId: "1:488933348339:web:eb448d3c1c2d26b3973886",
    measurementId: "G-TBC5QYT0H4"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// Firebase constants
let firestore = firebase.firestore();
let docRef = firestore.doc('images/imgData');

//////////////// FIREBASE //////////////

//////////////// CONTROL PARAMS ///////////
let PARAMS = {
	x: 0,
	y: 0,
	line: false,
	lineWidth: 0.1,
	lineColor: '#9acd32',
	dot: false,
	dotWidth: 0.25,
	dotColor: '#ff6347'
};
//////////////// CONTROL PARAMS ///////////

//////////////// TWEAKPANE ////////////////
// TWEAKPANE - INPUT - DOT
const paneDot = new Tweakpane({
	container: document.getElementById('dot')
});
paneDot.addInput(PARAMS, 'dot', { label: 'DOT' });
paneDot.addInput(PARAMS, 'dotWidth', {
	min: 0,
	max: 3,
	label: 'DOT WIDTH'
});
paneDot.addInput(PARAMS, 'dotColor', { label: 'DOT COLOR' });
// panelDot - CHANGES
paneDot.on('change', (value) => {
	console.log('dot: ', value);
});

// TWEAKPANE - INPUT - LINE
const paneLine = new Tweakpane({
	container: document.getElementById('line')
});
// console.log(paneLine);
paneLine.addInput(PARAMS, 'line', { label: 'LINE' });
paneLine.addInput(PARAMS, 'lineWidth', {
	min: 0,
	max: 3,
	label: 'LINE WIDTH'
});
paneLine.addInput(PARAMS, 'lineColor', { label: 'LINE COLOR' });
// panelLine - CHANGES
paneLine.on('change', (value) => {
	console.log('line: ', value);
});

// TWEAKPANE - MONITOR - ACCELEROMETER
const paneAcc = new Tweakpane({
	container: document.getElementById('acc')
});
// paneAcc.addInput(PARAMS, 'acc',{ label: 'ACCEL (X,Y)'});
paneAcc.addMonitor(PARAMS, 'x', { label: 'X ACCELERATION' });
paneAcc.addMonitor(PARAMS, 'y', { label: 'Y ACCELERATION' });
// panelAcc - CHANGES

// TWEAKPANE - BUTTON SAVE
paneAcc
	.addButton({
		title: 'Save Galaxy'
	})
	.on('click', () => {
		// download the galaxy to your desktop
		saveDrawing();
	});
//////////////// TWEAKPANE ////////////////

//////////////// MICROBIT PAIRING /////////
const pairBtn = document.querySelector('.btn');
pairBtn.addEventListener('click', microbitPairing);
let microbit = new uBit();
let isPaired = false;

function microbitPairing() {
	//1.search
	microbit.searchDevice();
	//2.connect
	microbit.onConnect(() => {
		isPaired = true;
		console.log('isPpared: ', isPaired);
	});
	//3.ble subscription
	microbit.onBleNotify(function() {
		PARAMS.x = microbit.getAccelerometer().x;
		PARAMS.y = microbit.getAccelerometer().y;
	});
	//4. button disappear
	pairBtn.disabled = true;
}
//////////////// MICROBIT PAIRING /////////

//////////////// CANVAS ///////////////////
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
let brush = new Brush(ctx);
let frame, mx, my;

// Animation
(function loop() {
	// LZR add composite filter
	ctx.globalCompositeOperation = 'lighter';
	console.log;
	// Drawing
	if (isPaired) {
		if (PARAMS.dot === true) {
			// Drawing Dot
			mx = brush.mapValues(PARAMS.x, -1024, 1024, 0, w);
			my = brush.mapValues(PARAMS.y, -1024, 1024, 0, h);
			brush.drawDot(mx, my, PARAMS.dotWidth, PARAMS.dotColor);

			// dot drawing
		} else if (PARAMS.line === true) {
			// Drawing Line
			mx = brush.mapValues(PARAMS.x, -1024, 1024, 0, w);
			my = brush.mapValues(PARAMS.y, -1024, 1024, 0, h);
			brush.drawLine(mx, my, PARAMS.lineWidth, PARAMS.lineColor);
			// allows to start path from here without jumping
			// ctx.beginPath();
		} else {
			// nothing drawing
			ctx.clearRect(0, 0, w, h);
			// Drawing Axist
			mx = brush.mapValues(PARAMS.x, -1024, 1024, 0, w);
			my = brush.mapValues(PARAMS.y, -1024, 1024, 0, h);
			// Draw axis
			brush.drawAxis(mx, my, w, h);
		}
	}

	// Loop
	frame = requestAnimationFrame(loop);
})();

// resize canvas
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
resizeCanvas();

// save drawing
function saveDrawing() {
	// download image
	console.log('downloading Galaxy');
	const a = document.createElement('a');
	document.body.appendChild(a);
	a.href = canvas.toDataURL('image/png', 1);
	a.download = 'canvas-image.png';
	a.click();
	document.body.removeChild(a);
	// Add image to Firebase
	let imgData = canvas.toDataURL('image/png',1);

	docRef.set({
		galaxy : imgData,
	}).then(()=>{
		console.log('image saved!');
	}).catch((error)=>{
		console.log('got an error: ', error);
	})
	getData();
}

function getData() {
	let surprise = document.getElementById("surprise");
	docRef.onSnapshot(function(doc) {
		if (doc && doc.exists) {
			const myData = doc.data();
			console.log('data received: ', myData);
			surprise.innerText = myData.galaxy;
		}
	})
}


//////////////// CANVAS ///////////////////

//////////////// SLIDE-PANEL //////////////
document.addEventListener('DOMContentLoaded', function() {
	const menuElement = document.getElementById('menu-right');
	const menu = new SlideMenu(menuElement);

	// Attach the event listener to the *DOM element*, not the SlideMenu instance
	menuElement.addEventListener('sm.open', function() {
		console.log('The menu opens');
	});

	menuElement.addEventListener('sm.open-after', function() {
		console.log('The menu has opened');
	});
});
//////////////// SLIDE-PANEL //////////////



