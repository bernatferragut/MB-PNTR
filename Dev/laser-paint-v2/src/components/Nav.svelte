<script>
	export let segment;
</script>


<style>
	/* Inspired by https://www.ostraining.com/blog/webdesign/create-navmenu-with-flexbox/ */
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

	:root {
		--main-bg-color: #101010;
		--main-text-color: greenyellow;
	}
	
	body {
		background-color: var(--main-bg-color);
		font-family: 'IBM Plex Mono', monospace;
		font-size: 10px;
		margin: 0;
	}
	a {
		color: var(--main-text-color);
		font-weight: 300;
		letter-spacing: 2px;
		text-decoration: none;
		background: var(--main-bg-color);
		padding: 10px 5px;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	a:hover {
		color: var(--main-bg-color);
		background: var(--main-text-color);
	}

	.main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 3em 1.5em;
	}

	.navigation ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.navigation li {
		flex: 3;    
	}
</style>

<div class="main">
    <nav class="navigation">
        <ul>
			<li><a rel=prefetch class:selected='{segment === undefined}' href='.'>[ + ]</a></li>
			<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog/.'>HOW</a></li>
            <li><a class:selected='{segment === "application"}' href='application'>APP</a></li>
            <li><a class:selected='{segment === "images"}' href='images'>DATA</a></li>
            <!-- <li><a href="#">Contact</a></li> -->
		</ul> 
	</nav>
</div>


