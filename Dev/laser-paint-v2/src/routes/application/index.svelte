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
		 // Animation
		(function loop() {
			// context composition: none, copy, destination-atop, destination-in, destination-out, destination-over, source-top, source-in, source-out, source-over, lighter, xor
			context.globalCompositeOperation = "lighter";
        	// context.globalAlpha = 0.25;
			if(paired) {
				// Background Color
				context.fillStyle = 'black';
				context.fillRect(0, 0, w , h);
				// Drawing Dot
				let mx = brush.mapValues(acc_x,-1024,1024,0,w);
				let my = brush.mapValues(acc_y,-1024,1024,0,h);
				brush.draw(mx, my, 0,1);
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
</script>


<style>
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
	.flex-container {
		display: flex;
		align-items: center; 
		justify-content: center;
		flex-direction: column;
		max-height: auto;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(3, 50px );
		grid-gap: 60px;
	}
	canvas {
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
            <p>x: {acc_x}</p>
            <p>y: {acc_y}</p>
            <p>z: {acc_z}</p>
        </div>
    </div>
	<!-- CANVAS -->
	<div hidden={paired? false: true}>
		<canvas 
		bind:this={canvas}
		width={w}
		height={h}
		></canvas>
	</div>
</div>

