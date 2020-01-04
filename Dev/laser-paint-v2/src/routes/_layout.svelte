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
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: var(--main-bg-color);
		color: var(--main-text-color);
		text-align: center;
	}
	a:link {
		color: var(--main-text-color);
	}
	code {
		font-family: menlo, inconsolata, monospace;
		font-size: calc(1em - 2px);
		color: var(--main-bg-color);
		background-color: var(--main-text-color);
		padding: 0.2em 0.4em;
		border-radius: 2px;
	 }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer class="footer">
  <p><a href="mailto:bernatferragut@protonomail.com">
  Bernat Ferragut | 2020 | Open Source </a></p>
</footer>
