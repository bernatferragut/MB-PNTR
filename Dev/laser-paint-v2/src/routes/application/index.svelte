<script>
	import { uBit} from './_microBit.js';
	import { Brush } from './_brush.js';
	import { onMount } from 'svelte';	
	import { fade } from 'svelte/transition';
	// button vars
	let buttonText = ['PAIR MICROBIT','PAIRED'];
	let visible = true;
	let paired = false;
	// canvas vars
	let canvas;
	let context;
	let w ;
	let h;
	let frame;
	// microbit vars
	let microbit = new uBit();
	let acc_x = 0;
	let acc_y = 0;
	let acc_z = 0;

	onMount(()=> {
		// Resize
		function resizeCanvas() {
			w = window.innerWidth;
			h = window.innerHeight;
		}
		resizeCanvas();
		// Context 2d
		context = canvas.getContext('2d');
		// *** Particle Object *2
		let brush = new Brush(context);
		context.imageSmoothingEnabled = true;
		 // Animation
		(function loop() {
			// context composition: none, copy, destination-atop, destination-in, destination-out, destination-over, source-top, source-in, source-out, source-over, lighter, xor
			context.globalCompositeOperation = "lighter";
        	// context.globalAlpha = 0.25;
			if(paired) {
				// line drawing
				if(key === 'q'){
					// Background Color
					context.fillStyle = 'black';
					context.fillRect(0, 0, w , h);
					// Drawing Dot
					let mx = brush.mapValues(acc_x,-1024,1024,0,w);
					let my = brush.mapValues(acc_y,-1024,1024,0,h);
					brush.draw_line(mx, my, 0,1);
				// dot drawing
				} else if(key === 'w'){
					// Background Color
					context.fillStyle = 'black';
					context.fillRect(0, 0, w , h);
					// Drawing Dot
					let mx = brush.mapValues(acc_x,-1024,1024,0,w);
					let my = brush.mapValues(acc_y,-1024,1024,0,h);
					brush.draw_point(mx,my);
					context.beginPath(); // allows to start path from here without jumping
				
				} else if( key === ' '){
					context.clearRect(0, 0, w, h);
					// Drawing Axist
					let mx = brush.mapValues(acc_x,-1024,1024,0,w);
					let my = brush.mapValues(acc_y,-1024,1024,0,h);
					// Draw axis
					brush.draw_axis(mx,my, w, h);
				// stop drawing
				} else {
					context.clearRect(0, 0, w, h);
					// Drawing Axist
					let mx = brush.mapValues(acc_x,-1024,1024,0,w);
					let my = brush.mapValues(acc_y,-1024,1024,0,h);
					// Draw axis
					brush.draw_axis(mx,my, w, h);
				}
			}
			// Loop
			frame = requestAnimationFrame(loop);
		}());
	})

	// button microbit activation
	function microbitPairing() {
		//1.search
		microbit.searchDevice();
		//2.connect
		microbit.onConnect( ()=> {
			console.log("connected");
			paired = true;
			console.log("pared: true");
		})
		//3.ble subscription
		microbit.onBleNotify(function(){
			acc_x = microbit.getAccelerometer().x;
			acc_y = microbit.getAccelerometer().y;
			acc_z = microbit.getAccelerometer().z;
			// console.log('subscribed to: ', acc_x, acc_y, acc_z);
		})
		//4. button disappear
		visible = false;
	}
	// button save drawing
	function saveDrawing() {
        console.log('saveDrawing');
        // let finalCanvas = document.querySelector('#canvas');
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL('image/png',1);
        a.download = 'canvas-image.png';
        a.click();
        document.body.removeChild(a);
	}
	// handle keys down function
	let key;
	function handleKeydown(event) {
		key = event.key;
	}
</script>


<style>
		/* FONTS */
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

	/* VARIABupdateLES */
	:root {
		--main-bg-color: #101010;
		--main-text-color: greenyellow;
	}
	h1 {
		color: var(--main-text-color);
		font-family: 'IBM Plex Mono', monospace;
		font-size: 12px;
		background-color: var(--main-bg-color);
		margin: 10px;
	}

	/* BUTTONS */
	.btn {
		background-color:var(--main-bg-color);
		border-radius: 4px;
		border-width: 1px solid;
		border-color: var(--main-text-color);
		padding: 8px 8px;
		font-size: 10px;
		margin: 10px;
		color: var(--main-text-color);
	}

	.btn-menu {
		font-family: 'IBM Plex Mono', monospace;
		background-color:var(--main-bg-color);
		border-radius: 4px;
		border-width: 0.5px solid;
		border-color: yellowgreen;
		text-align: center;
		padding: 0px;
		font-size: 10px;
		margin: 6px;
		color: yellow;
	}

	.btn-menu:hover, .btn:hover {
		color: var(--main-bg-color);
		background-color: var(--main-text-color);
	}
	.flex-container {
		display: flex;
		align-items: center; 
		justify-content: center;
		flex-direction: column;
		max-height: auto;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(5, 50px );
		grid-gap: 60px;
	}
	canvas {
		font-family: 'IBM Plex Mono', monospace;
		background-color:var(--main-bg-color);
		width : 75vw;
		/* height: 75; */
		border-style: dotted;
		border-radius: 4px;
		border-width: 1px;
		border-color: var(--main-text-color);
	}
</style>

<svelte:head>
	<title>LZRBTI-APP</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown}/>

<div class="flex-container">
	<h1>LZRBIT</h1>
	<!-- BUTTON -->
	{#if visible}
	<div>
		<button 
			class="btn" 
			on:click={microbitPairing}
			> {paired? buttonText[1]: buttonText[0]} </button>
	</div>
	{/if}
	<!-- BLE SERVICE -->
	<div class="flex-container">
        <div class="grid-container">
			{#if key}
				<button class="btn-menu">{ key === ''? 'line' : 'dot' }</button>
			{:else}
				<button class="btn-menu">{ 'draw' }</button>
			{/if}
            <p>x: {acc_x}</p>
            <p>y: {acc_y}</p>
            <p>z: {acc_z}</p>
			<button class="btn-menu" on:click={saveDrawing}>save</button>
        </div>
    </div>
	<!-- CANVAS -->

	<div hidden={paired? false: true}>
		<canvas 
		bind:this={canvas}
		width={w}
		height={h}
		></canvas>
		<div class="flex-container">
			<div> [!] press Q to draw lines | press W to draw points | press SPACE to reset [!]</div>
		</div>
	</div>

</div>

