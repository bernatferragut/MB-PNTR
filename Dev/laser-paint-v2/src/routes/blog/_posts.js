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

			<p>Pieces of Art are created by using the microbit accelerometer BLE service - Bluetooth Low Energy- paired with the browser.</p>

			<p>In future versions we want to add other sensors to achieve the movement like: </p>

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
			<h4>1.</h4>
			<p>To use this Application you will need a microbit and the Chrome Browser.
			<p>First you need to download and upload this firmware on your BBC micro:bit board.</p>
			<p>*The firmware was produced by bittysoftware.*</p>
			<h4>2.</h4>
			<p>Keep in mind that web bluetooth API are still experimental and your OS and browser might not support the feature.</p>
			<p>Use Google Chrome as the Browser - BLE API -  to make sure it will work.</p>
			<h4>3.</h4>
			<p>Once the firmware is uploaded to your microbit and you are using the Chrome Browser:</p>
			<ul>
				<li>Go to the LZRBIT APP section</li>
				<li>Use the PAIR BUTTON to pair your microbit accelerometer witht the LZRBIT App.</li>
				<li>Use drawing mode by touching the SPACE BAR and stop by releasing it.</li>
				<li>Use the microbit x,y,z axis to draw on the canvas by rotating them.</li>
				<li>Use the top right GUI parameters to mold your designs at will.</li>
				<li>Draw your design with patience and love.</li>
				<li>Save your design by clicking the SAVE button on the APP.</li>
			</ul>
			<h4>4.</h4>
			<p>All your designs will be saved under the DATA section of the LZRBIT App.</p>
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
