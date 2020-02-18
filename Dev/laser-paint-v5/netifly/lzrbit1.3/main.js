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
let firestore = firebase.firestore();
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

// panelAcc - CHANGES FROM FIREBASE
let docRef = firestore.doc("gyroApp/data");
docRef.onSnapshot((doc)=> {
	const myData = doc.data();
	console.log( `dot:${myData.dot} dotWidth:${myData.dotWidth} dotColor:${myData.dotColor}`);
	console.log( `x:${myData.x} y:${myData.y} z:${myData.z} `);
	console.log( `line:${myData.dot} lineWidth:${myData.lineWidth} lineColor:${myData.lineColor}`);
})

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
	////////////// DOWNLOAD IMAGE //////////////
	console.log('downloading Galaxy');
	const a = document.createElement('a');
	document.body.appendChild(a);
	a.href = canvas.toDataURL('image/png', 1);
	a.download = 'canvas-image.png';
	a.click();
	document.body.removeChild(a);

	////////////// FIREBASE UPLOAD IMAGE //////////////
	// image BLOB
	let imgData = dataURLtoBlob(a.href);
	// Image NAME + Unique ID number
	let imgName = `galaxy:${uuidv4()}`;
	// Upload image to FIREBASE
	let storageRef = firebase.storage().ref(`images/${imgName}`);
	// Upload image to selected storage reference
	let uploadTask = storageRef.put(imgData);
	uploadTask.on('state_changed', (snapshot)=> {
		// observe state chenge events such as progress, pause, resume
		// get task progress by including the number of bytes uploaded and total number of bytes
		let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
		console.log(`upload progress: ${progress} done`);
	}, function(error){
		console.log(error.message);
	}, function(){
		// handle successful uploads on complete
		uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL)=> {
			// get your upload image URL here..p5.BandPass()
			console.log(downloadURL);
		})
	})
}

//**dataURL to blob */
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

//**blob to dataURL**
function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}

// Unique Id for Firebase Storage
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	  return v.toString(16);
	});
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



