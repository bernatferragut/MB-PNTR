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
	ul, li, a {
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

</style>

<svelte:head>
	<title>APPLICATION</title>
</svelte:head>



<div class="flex-container">
	<h1>APP</h1>

	<p>Here we add the button to pair the microbit</p>
</div>