
class Brush {
	// class attributes
	constructor(ctx1, ctx2){
		this.context1 = ctx1;
		this.context2 = ctx2;
		this.axisSize = 3;
	}
	// class methods
	drawLine(mx, my, size, color){
		// style
		this.context1.strokeStyle = color;
		this.context1.lineWidth = size;
		this.context1.lineCap = 'round'
		// line
		this.context1.lineTo(mx,my);
		this.context1.stroke();
		this.context1.beginPath();
		this.context1.moveTo(mx,my);
	}
	drawDot(mx, my, size, color) {
		// style
		this.context1.fillStyle = color;
		// dot
		this.context1.fillRect(mx, my, size,size);
	}
	drawAxis(mx,my,w,h) {
		// Background Color
		// this.context.fillStyle = 'black';
		// this.context.fillRect(0, 0, w , h);
		ctx2.clearRect(0, 0, w, h);
		// style
		this.context2.fillStyle = 'tomato';
		// line
		this.context2.fillRect(mx, my, this.axisSize , this.axisSize );
	}
    // mapping microbit values to screen sizes
    mapValues(n, start1, stop1, start2, stop2) {
		return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
	}
}