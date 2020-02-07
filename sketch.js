let img;

function setup() {
  createCanvas(400, 400);
  img = loadImage('pasto.jpg');
}

function draw() {
  background(220);
  image(img, 0, 0);
  ellipse(100,100,130,60);
  fill(128,63,0);{
  }
  rect(75,129,50,100);
  fill(45,87,44);{
  }
  ellipse(300,100,130,60);
  fill(128,63,0);{
  }
  rect(278,129,50,100);
  fill(45,87,44);{
  }
}

function snake(){
this.x = 0;
this.y = 0;
}
