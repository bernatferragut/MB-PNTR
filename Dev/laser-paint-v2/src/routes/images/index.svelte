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
		width: 100%;
	}
</style>

<svelte:head>
	<title>IMAGES</title>
</svelte:head>


<div class="flex-container">
	<h1>DATA </h1>
</div>
<div class="flex-container">
		<img alt='Tree' src='images/tree.png'>
		<p >TREE 2020</p>
</div>


