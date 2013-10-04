
var TWO_PI = Math.PI * 2;

function Particle( x, y, vx, vy, ax, ay ) {
	// this.vx = vx;
	// this.vy = vy;
	// this.ax = ax;
	// this.ay = ay;
	// this.x = x;
	// this.y = y;
	// this.r = Math.random() * 20 + 5;
	// this.color = parseInt( Math.random() * 0xffffff );

	resetAttributes( this );
}

Particle.centerX = 400;
Particle.centerY = 300;


Particle.prototype.update = function() {
	this.x += this.vx;
	this.y += this.vy;
	this.vx += this.ax;
	this.vy += this.ay;
	this.alpha -= this.va;

	if( this.x > 800 || this.x < 0 || this.y > 600 || this.y < 0 || this.alpha <= 0 ) {
		resetAttributes( this );
	}
}

Particle.prototype.trace = function() {
	console.log( 'Particle: ' );
	console.log( this.ax );
}

Particle.prototype.draw = function( context ) {
	// context.fillStyle = '#' + str_pad( this.color.toString( 16 ) );
	context.fillStyle = getRGBAColor( this.color, this.alpha );
	context.beginPath();
	context.arc( this.x, this.y, this.r, 0, TWO_PI );

	context.fill();
}


function str_pad( hex ){
   var zero = '000000';
   var tmp  = 6-hex.length;
   return zero.substr(0,tmp) + hex;
}

function resetAttributes( particle ) {
	particle.vx = Math.random() * 20 - 10;
	particle.vy = Math.random() * 20 - 10;
	particle.ax = Math.random() * 0.2 - 0.1;
	particle.ay = Math.random() * 0.2 - 0.1;
	particle.x = Particle.centerX;
	particle.y = Particle.centerY;
	particle.r = Math.random() * 5 + 1;
	particle.va = Math.random() * 0.1 + 0.01;	// Velocity of alpha.
	particle.alpha = 1;
	particle.color = parseInt( Math.random() * 0xffffff );
}

function getRGBAColor( decimalColor, alpha ) {
	var red 	= decimalColor >> 16;
	var green 	= ( decimalColor >> 8 ) & 0x00ff;
	var blue 	= ( decimalColor & 0x0000ff );
	return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
}