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
			<h4>1.</h4>	
			<p>LZRBIT is a drawing-app designed to create web-art using the BBC Microbit microcontroller.</p>
			<h4>2.</h4>	
			<p>Pieces of Art are created by using the microbit accelerometer BLE service - Bluetooth Low Energy- paired with the browser.</p>
			<h4>3.</h4>	
			<p>In future versions we want to add other sensors to drive the drawing app, like: </p>
			<h4>4.</h4>	
			<ul>
				<li>Web Gazer API - To control the LZR movement through AI Eye Tracking</li>
				<li>Web Face API -  To Control the LZR movement through AI Facial Recognition</li>
				<li>NextMind API - A non invasive human brain interface (...)</li>
			</ul>
			<h4>5.</h4>	
			<p> Made with Love using the beautiful Svelte/Sapper javascript framework</p>

			<p>> Bernat Ferragut | January 2020</p>

			
		`
	},

	{
		title: '> HOW TO USE LZRBIT',
		slug: 'how-to-use-lzrbit',
		html: `
			<h4>1.</h4>
			<p>To use this Application you will need a microbit and the Chrome Browser.
			<p>First you need to <a href="https://drive.google.com/uc?id=0B2Ud_NaMFsQSdm1BMVMtN3F4a3c&export=download">download and upload this firmware</a> on your BBC micro:bit board.</p>
			<p>*The firmware was produced by bittysoftware.com*</p>
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
			<p>We're so glad you asked! Come on over to the LZRBIT github repo and join us.</p>
			
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
