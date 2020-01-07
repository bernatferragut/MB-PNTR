<script>
	import { uBit,isWebBluetoothEnabled} from './_microBit.js';
	import { onMount } from 'svelte';	
	import { fade } from 'svelte/transition';

	let buttonText = ['PAIR MICROBIT','PAIRED'];
	let visible = true;
	let paired = false;

	let acc_x = 0;
	let acc_y = 0;
	let acc_z = 0;

	let canvas;
	let context;
	let w;
	let h;
	let frame;
	  let colors = ['#8DDDF7','#B1A7F2','#B1A7F2','#E9A1F7','#AC77E4'];

	let microbit = new uBit();

	onMount(()=> {
		context = canvas.getContext('2d');
		// Resize
		function resizeCanvas() {
			w = window.innerWidth;
			h = window.innerHeight;
		}
		// Dot object
		class Dot {
			// class attributes
			constructor(x,y,s){
				this.x = x | 0;
				this.y = y | 0;
				this.size = s | 2;
			}
			// class methods
			on(){
				context.fillStyle = 'red';
				context.fillRect(this.x, this.y, this.size, this.size);
			}
			off(){
				context.fillStyle = "#101010";
				context.fillRect(this.x, this.y, this.size, this.size);
			}
			move(){
				this.x += 1;
			}
		}
		// *** Particle Object ***
		let dot = new Dot(w/2,h/2,10,10);
		// *** Background Color ***
		context.fillStyle = "#101010";
		context.fillRect(0, 0, canvas.w , canvas.h);
		 // *** Animation ***
		(function loop() {
			// animation
			frame = requestAnimationFrame(loop);

			// Resize
			resizeCanvas()
			
			// Drawing Dot
			context.fillStyle = 'rgba(0,0,0,0.1)';
			dot.on();
			dot.move()
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

