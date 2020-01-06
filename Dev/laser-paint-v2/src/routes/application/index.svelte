<script>
	import { uBit,isWebBluetoothEnabled,getSupportedProperties,toUTF8Array } from './_microBit.js';
	import { onMount } from 'svelte';	
	import { fade } from 'svelte/transition';

	let microbit = new uBit();
	onMount(()=> {
		console.log( 'microbit object mounted: ', microbit );
	})

	// microbit loaded
	function microbitScriptLoaded() {
		console.log('PAIRED');
	}
	// search
	function searchMicrobit(){
		microbit.searchDevice();
	}

	// connected
	let paired = false;

	microbit.onConnect(function(){
		console.log("connected");
		paired = true;
	})
	// // disconnected
	microbit.onDisconnect(function(){
		console.log("disconnected");
	});

	// BLE subscription
	let acc_x = 0;
	let acc_y = 0;
	let acc_z = 0;

	microbit.onBleNotify(function(){
		acc_x = microbit.getAccelerometer().x;
		acc_y = microbit.getAccelerometer().y;
		acc_z = microbit.getAccelerometer().z;
		console.log('subscribed to: ', acc_x, acc_y, acc_z);
	})


	// async function getResult() {

    //     let response = await fetch(``);
    //     let text = await response.text();
    //     let data = text;
    //     return data;
    // }

    // function submitHandler(e) {
    //     result = getResult();
    // }
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
		grid-template-columns: repeat(3, 10px );
		grid-gap: 30px;
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
	<div>
		<button 
			class="btn" 
			on:click={microbitScriptLoaded}
			> PAIR MICROBIT</button>
	</div>
	<!-- BLE SERVICE -->
	<div class="flex-container">
        <div class="grid-container" >
            <p>{acc_x}</p>
            <p>{acc_y}</p>
            <p>{acc_z}</p>
        </div>
    </div>
	<!-- CANVAS -->
	<div>
		<canvas class="canvas"></canvas>
	</div>
</div>




