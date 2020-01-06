<script>
	import { uBit,isWebBluetoothEnabled} from './_microBit.js';
	import { onMount } from 'svelte';	
	import { fade } from 'svelte/transition';

	let acc_x = 0;
	let acc_y = 0;
	let acc_z = 0;
	let paired = false;
	let buttonText = ['PAIR MICROBIT','PAIRED'];

	let microbit = new uBit();
	onMount(()=> {
		console.log( 'microbit object mounted: ', microbit );
	})

	// button calls
	function microbitPairing() {
		//1.
		microbit.searchDevice();
		//2.
		microbit.onConnect( ()=> {
			console.log("connected");
			paired = true;
			console.log("pared: true");
		})
		//3. 
		microbit.onBleNotify(function(){
			acc_x = microbit.getAccelerometer().x;
			acc_y = microbit.getAccelerometer().y;
			acc_z = microbit.getAccelerometer().z;
			console.log('subscribed to: ', acc_x, acc_y, acc_z);
		})
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
		width : 80%;
		border-style: dotted;
		border-radius: 4px;
		border-width: 1px;
		border-color: var(--main-text-color);
		padding: 10px 10px 10px;
		margin: 15px;
	}
</style>

<svelte:head>
	<title>LZRBTI-APP</title>
</svelte:head>

<div class="flex-container">
	<h1>LZRBIT</h1>
	<!-- BUTTON -->
	{#if !paired}
	<div>
		<button 
			class="btn" 
			on:click={microbitPairing}
			> {paired? buttonText[1]: buttonText[0]} </button>
	</div>
	{:else}
	<!-- BLE SERVICE -->
	<div class="flex-container">
        <div class="grid-container" >
            <p>x: {acc_x}</p>
            <p>y: {acc_y}</p>
            <p>z: {acc_z}</p>
        </div>
    </div>
	<!-- CANVAS -->
	<div>
		<canvas class="canvas"></canvas>
	</div>
	{/if}
</div>




