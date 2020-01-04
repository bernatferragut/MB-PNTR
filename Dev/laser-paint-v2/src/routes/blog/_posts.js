// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: '> WHAT IS LZRBIT?',
		slug: 'what-is-lzrbit',
		html: `
			<p>LZRBIT is a drawing-app designed to create web-art using the BBC Microbit microcontroller.</p>

			<p>Pieces of Art are created using the microbit -Bluetooth Technology BLE- accelerometer service paired with the browser</p>

			<p>V.2 allows to save images into a Database. In future versions we want to add other sensors to achieve the movement like: </p>

			<ul>
				<li>Web Gazer API - To control the LZR movement through AI Eye Tracking</li>
				<li>Web Face API -  To Control the LZR movement through AI Facial Recognition</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
			</ul>

			<p>I hope you enjoy it as much as I did building it!</p>
			<p> Made with Love using the Framework Svelte/Sapper js - January 2020</p>

			
		`
	},

	{
		title: '> HOW TO USE LZRBIT',
		slug: 'how-to-use-lzrbit',
		html: `
			<h4>Step one</h4>
			<p>To use the library, download and upload this firmware on your BBC micro:bit board.</p>
			<p>The firmware was produced by bittysoftware.</p>
			<h4>Step two</h4>
			<p>Keep in mind that web bluetooth API are still experimental and your OS and browser might not support the feature.</p>
			<p>Alway use Google Chrome as the Browser - BLE API -  still in experimental mode and other browsers may fail.</p>
			<h4>Step three</h4>
			<p>Once the firmware is uploaded and you are using the Chrome Browser:</p>
			<ul>
				<li>Go to the LZRBIT APP section</li>
				<li>Use the AIR BUTTON to pair your microbit accelerometer witht the LZRBIT App</li>
				<li>Use drawing mode by touching the SPACE BAR and STOP by releasing it</li>
				<li>Use the x,y,z axis by rotating the microbit to draw on the Web Canvas</li>
				<li>Draw your design with patience and love</li>
				<li>Save your design by clicking the SAFE button</li>
			</ul>
		`
	},
	{
		title: '> HOW CAN I HELP?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
