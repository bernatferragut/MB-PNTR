<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		const interval = setTimeout(() => {
			visible = true
		}, 234);
	});

</script>


<style>
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

	/* VARIABLES*/
	:root {
		--main-bg-color: #101010;
		--main-text-color: greenyellow;
		--second-text-color:tomato;
	}

	.flex-container {
		display: flex;
		align-items: center; 
		justify-content: center;
		flex-direction: row;
		max-height: auto;
	}

	.centered {
		font-family: 'IBM Plex Mono', monospace;
		background-color: var(--main-bg-color);
		color: var(--main-text-color);
		margin-top: 23vh;
		width:100px;height:100px;
		display:table-cell;
		text-align:center;
		vertical-align:middle;
		font-size: 5vh;
		letter-spacing: 5vw;
	}
</style>

<svelte:head>
	<title>HOME</title>
</svelte:head>

{#if visible}
	<div class="flex-container">
		{#each ' L Z R B I T' as char, i}
			<div class="centered" in:fade="{{delay: 234 + i * 150, duration: 800}}">
				{char}
			</div>
		{/each}
	</div>
{/if}




