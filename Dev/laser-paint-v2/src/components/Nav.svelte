<script>
	export let segment;
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

	/* VARIABupdateLES */
	:root {
		--main-bg-color: #101010;
		--main-text-color: greenyellow;
	}

	/* MAIN */
	body, input {
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
</style>

<nav>
	<ul>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog/.'>instructions</a></li>
		<li><a class:selected='{segment === "application"}' href='application'>application</a></li>
		<li><a class:selected='{segment === "images"}' href='images'>images</a></li>
	</ul>
</nav>
