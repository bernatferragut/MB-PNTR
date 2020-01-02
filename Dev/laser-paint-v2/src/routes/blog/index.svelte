<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
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
</style>

<svelte:head>
	<title>INSTRUCTIONS</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>