
export class Brush {
	// class attributes
	constructor(context){
		this.context = context;
		this.pausedSize = 1;
		// this.y;
		// this.size;
	}
	// class methods
	draw(mx, my, size){
		// style
		this.context.strokeStyle = 'greenyellow';
		this.context.lineWidth = size;
		this.context.lineCap = 'round'
		// line
		this.context.lineTo(mx,my);
		this.context.stroke();
		this.context.beginPath();
		this.context.moveTo(mx,my);
	}
	pause(mx, my) {
		// style
		this.context.fillStyle = 'yellow';
		// line
		this.context.fillRect(mx, my, this.pausedSize,this.pausedSize);
	}
    // mapping microbit values to screen sizes
    mapValues(n, start1, stop1, start2, stop2) {
        return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  }
}