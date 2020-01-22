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
	ul, li, p {
		color: var(--main-text-color);
		letter-spacing: 2px;
		text-decoration: none;
		background: var(--main-bg-color);
		padding: 20px 5px;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	img{
		width: 100vh;
		border-style: dotted;
		border-radius: 4px;
		border-width: 1px;
		border-color: var(--main-text-color);
	}
</style>

<svelte:head>
	<title>IMAGES</title>
</svelte:head>


<div class="flex-container">
	<h1>DATA </h1>
</div>
<div class="flex-container">
		<div>
			<img alt='Tree' src='images/6.png'>
		</div>
		<p >YOU MAKE LZRBIT - 2020</p>
</div>


