

var particles = [];
var numParticles = 2000;
var canvas;
var context;
var mainInterval;
$( function() {

	for( var i=0; i<numParticles; ++i ) {
		var particle = new Particle();
		particles.push( particle );
	}
	
	mainInterval = setInterval( mainLoop, 1000 / 60 );
	var jcanvas = $( '#canvas' ).attr( { width : 800, height : 600 } );
	jcanvas.css( 'border-style', 'dashed' );
	jcanvas.css( 'background-color', '#000000' );

	canvas = $( '#canvas' ).get( 0 );
	context = canvas.getContext( '2d' );

	jcanvas.mousemove( function( event ) {
		Particle.centerX = event.clientX;
		Particle.centerY = event.clientY;
	} );





} );

var n = 0;
function mainLoop() {
	context.clearRect( 0, 0, 800, 600 );

	for( var i=0; i<numParticles; ++i ) {
		particles[i].update();
		particles[i].draw( context );
	}
}