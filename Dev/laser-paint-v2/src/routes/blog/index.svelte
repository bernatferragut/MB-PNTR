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
	/* FLEX */
	.flex-container {
		display: flex;
		align-items: center; 
		justify-content: center;
		flex-direction: column;
		max-height: auto;
	}
	/* div {
		text-align: center;
	} */

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
		padding: 10px 5px;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	ul {
		text-align: center;
		list-style-position: none;
	}

	li {
		display: inline-block;
	}

	a:hover {
		color: var(--main-bg-color);
		background: var(--main-text-color);
	}

</style>

<svelte:head>
	<title>INSTRUCTIONS</title>
</svelte:head>

<div class="flex-container">
	<h1>INSTRUCTIONS</h1>
</div>

<div class="flex-container">
	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
		{/each}
	</ul>
</div>
