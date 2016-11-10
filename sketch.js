function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 )
}

function draw() {
  var x = random( 0 , windowWidth );
  var y = random( 0 , windowHeight );
  var d = random( 0 , 100 );
  var r = random( 0 , 255 );
  var g = random( 0 , 255 );
  var b = random( 0 , 255 );
  var a = random( 20 , 75 )
  noStroke()
  fill( r , g , b , 75 );
  ellipse( x , y , d , d );
}

function keyTyped() {
  if ( key === 's') {
    saveCanvas( 'myMarth' , 'png' );
  }
}
