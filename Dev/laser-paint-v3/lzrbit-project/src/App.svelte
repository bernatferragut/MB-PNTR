<script>
	export let name;
</script>

<main>
	<h1>{name}</h1>
</main>
<div class="grid-container">
	<div class="grid-item grid-item-1"></div>
	<div class="grid-item grid-item-2"></div>
	<div class="grid-item grid-item-3"></div>
	<div class="grid-item grid-item-4"></div>
	<div class="grid-item grid-item-5"></div>
	<div class="grid-item grid-item-6"></div>
	<div class="grid-item grid-item-7"></div>
	<div class="grid-item grid-item-7"></div>
	<div class="grid-item grid-item-9"></div>
	<div class="grid-item grid-item-10"></div>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


@import url('https://fonts.googleapis.com/css?family=Raleway');

* {
    font-family: Raleway;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  background-color: #333;
  height: 100%;
  margin: 0;
}

.grid-container {
  position: relative;
  padding: 20px;
  width: 100%;
}

.grid-item {
  position: relative;
  font-size: 25px;
  padding: 20px;
  padding-top: 50px;
  background-color: #379AD6;
  color: #222;
  border: 1px solid white;
}

.grid-item:nth-child(odd) {
  background-color: #5bbdfa;
}

.grid-item::before {
  content: 'Grid Item';
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  top: 10px;
  left: 15px;
}

.grid-item::after {
  position: absolute;
  font-size: 25px;
  top: 10px;
  right: 15px;
  font-weight: bold;
}

.grid-item-1::after {
  content: '1';
}

.grid-item-2::after {
  content: '2';
}

.grid-item-3::after {
  content: '3';
}

.grid-item-4::after {
  content: '4';
}

.grid-item-5::after {
  content: '5';
}

.grid-item-6::after {
  content: '6';
}

.grid-item-7::after {
  content: '7';
}

.grid-item-8::after {
  content: '8';
}

.grid-item-9::after {
  content: '9';
}

.grid-item-10::after {
  content: '10';
}

.grid-item-11::after {
  content: '11';
}

</style>