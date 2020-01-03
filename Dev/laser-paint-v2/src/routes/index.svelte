<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';

	let visible = true;

</script>


<style>
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

</style>

<svelte:head>
	<title>HOME</title>
</svelte:head>


<div class="flex-container">
	<h1>WELCOME</h1>
	{#if visible}
	<div class="centered">
		{#each 'LAZERBIT' as char, i}
			<span
				in:fade="{{delay: 1000 + i * 150, duration: 800}}"
			>{char}</span>
		{/each}
	</div>
{/if}
	
</div>



