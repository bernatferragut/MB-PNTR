<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	/* FONTS */
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

	/* VARIABupdateLES */
	:root {
		--main-bg-color: #101010;
		--main-text-color: greenyellow;
	}

	/* MAIN */
	body {
		color: var(--main-text-color);
		font-family: 'IBM Plex Mono', monospace;
		font-size: 10px;
		background-color: var(--main-bg-color);
		margin: 10px;
	}

	h1 {
		color: var(--main-text-color);
		font-family: 'IBM Plex Mono', monospace;
		font-size: 10px;
		letter-spacing: 8px;
		background-color: var(--main-bg-color);
		margin: 10px;
	}
	main {
		position: relative;
		max-width: 56em;
		font-family: 'IBM Plex Mono', monospace;
		color: var(--main-text-color);
		background-color: var(--main-bg-color);
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>