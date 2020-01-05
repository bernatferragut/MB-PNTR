<script>
	import { uBit,isWebBluetoothEnabled,getSupportedProperties,toUTF8Array } from './_microBit.js';
	import { onMount } from 'svelte';	
	import { fade } from 'svelte/transition';

	let microbit = new uBit();
	onMount(()=> {
		console.log( 'microbit object mounted: ', microbit );
	})

	function microbitScriptLoaded() {
		console.log('PAIRED');
	}
</script>


<style>
	/* FLEX */
	.flex-container {
		display: flex;
		align-items: center; 
		justify-content: center;
		flex-direction: column;
		max-height: auto;
	}

	h1 {
		color: var(--main-text-color);
		font-family: 'IBM Plex Mono', monospace;
		font-size: 12px;
		background-color: var(--main-bg-color);
		margin: 10px;
	}
	ul, li{
		color: var(--main-text-color);
		letter-spacing: 2px;
		text-decoration: none;
		background: var(--main-bg-color);
		padding: 20px 5px;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	a {
		color: var(--main-text-color);
		letter-spacing: 2px;
		text-decoration: none;
		background: var(--main-bg-color);
		padding: 20px 5px;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	a:hover {
		color: var(--main-bg-color);
		background: var(--main-text-color);
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
		background-color:var(--main-bg-color);
		border-radius: 4px;
		border-width: 0.5px solid;
		border-color: yellowgreen;
		padding: 10px;
		font-size: 14px;
		margin: 10px;
		color: yellow;
	}

	.btn-menu:hover, .btn:hover {
		color: var(--main-bg-color);
		background-color: var(--main-text-color);
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
	<!-- <script src=“microBit.js" on:load={microbitScriptLoaded}></script> -->
	<title>APPLICATION</title>
</svelte:head>


<div class="flex-container">
	<h1>APP</h1>

	<div>
		<button 
			class="btn" 
			on:click={microbitScriptLoaded}
			> PAIR MICROBIT</button>
	</div>
	
	<div>
		<canvas class="canvas"></canvas>
	</div>
</div>




