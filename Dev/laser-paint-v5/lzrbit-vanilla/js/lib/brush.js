
class Brush {
	// class attributes
	constructor(ctx){
		this.context = ctx;
		this.axisSize = 3;
	}
	// class methods
	drawLine(mx, my, size, color){
		// style
		this.context.strokeStyle = color;
		this.context.lineWidth = size;
		this.context.lineCap = 'round'
		// line
		this.context.lineTo(mx,my);
		this.context.stroke();
		this.context.beginPath();
		this.context.moveTo(mx,my);
	}
	drawDot(mx, my, size, color) {
		// style
		this.context.fillStyle = color;
		// dot
		this.context.fillRect(mx, my, size,size);
	}
	drawAxis(mx,my,w,h) {
		// Background Color
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, w , h);
		// style
		this.context.fillStyle = 'tomato';
		// line
		this.context.fillRect(mx, my, this.axisSize , this.axisSize );
	}
    // mapping microbit values to screen sizes
    mapValues(n, start1, stop1, start2, stop2) {
		return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
	}
}