<script>
	import { quintOut } from 'svelte/easing';
	import { fade,  draw, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	
	let visible = false;
	
	onMount(() => {
		const interval = setTimeout(() => {
			visible = true
		}, 1000);
	});
</script>

{#if visible}
	<p transition:fade>
		Fades in and out
	</p>

<div class="centered" out:fly="{{y: -20, duration: 800}}">
		{#each 'LAZERBIT' as char, i}
			<span
				in:fade="{{delay: 1000 + i * 150, duration: 800}}"
			>{char}</span>
		{/each}
	</div>
{/if}


