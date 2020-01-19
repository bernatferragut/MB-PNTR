
export class Brush {
	// class attributes
	constructor(context){
		this.context = context;
		this.pausedSize = 1;
		this.axisSize = 3;
	}
	// class methods
	draw_line(mx, my, size, color){
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
	draw_point(mx, my, size, color) {
		// style
		this.context.fillStyle = color;
		// line
		this.context.fillRect(mx, my, size,size);
	}
	draw_axis(mx,my,w,h) {
		// Background Color
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, w , h);
		// style
		this.context.fillStyle = 'yellow';
		// line
		this.context.fillRect(mx, my, this.axisSize , this.axisSize );
	}
    // mapping microbit values to screen sizes
    mapValues(n, start1, stop1, start2, stop2) {
        return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  }
}