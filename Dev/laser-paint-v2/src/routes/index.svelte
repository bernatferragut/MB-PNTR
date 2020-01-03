<script>

</script>


<style>
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

	/* VARIABupdateLES */
	:root {
		--main-bg-color: #101010;
		--main-text-color: greenyellow;
	}

	.flex-container {
		display: flex;
		align-items: center; 
		justify-content: center;
		flex-direction: column;
		max-height: auto;
	}

	.centered {
		font-family: 'IBM Plex Mono', monospace;
		background-color: var(--main-bg-color);
		color: var(--main-text-color);
		padding: 0;
		margin-top: 10vh;
		font-size: 6vw;
		letter-spacing: 1.12em;
	}

	  /* FADE IN  DESIGN */
	@-webkit-keyframes fadeIn {
		0% {opacity: 0;} to {opacity: 1;}
	}
	@keyframes fadeIn {
		0% {opacity: 0;} to {opacity: 1;}
	}

	.fadeIn {
	opacity:0;

	animation: fadeIn ease-in 1;
	-webkit-animation: fadeIn ease-in 1;

	animation-fill-mode: forwards;
	-webkit-animation-fill-mode: forwards;

	animation-duration: 1.2s;
	-webkit-animation-duration: 0.7s;
	}

</style>

<svelte:head>
	<title>HOME</title>
</svelte:head>


<div class="flex-container">
	<div  class="centered fadeIn">LAZERBIT</div>
</div>



