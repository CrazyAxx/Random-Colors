function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  var x = random( 0 , windowWidth );
  var y = random( 0 , windowHeight );
  var d = random( 0 , 100 );
  var r = random( 0 , 255 );
  var g = random( 0 , 255 );
  var b = random( 0 , 255 );
  var a = random( 0 , 100 )
  fill( r , g , b , a );
  ellipse( x , y , d , d );
}

function keyTyped() {
  if ( key === 's') {
    saveCanvas( 'myMarth' , 'png' );
  }
}
