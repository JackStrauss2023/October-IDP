let shapes = [];
const NUMBER_OF_CIRCLES = 1;
let shapes2 = [];
const NUMBER_OF_RECTANGLES = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for( let i = 0; i < NUMBER_OF_CIRCLES; i++ ) {
		shapes.push(new Circle());
	}
  for( let i = 0; i < NUMBER_OF_RECTANGLES; i++ ) {
		shapes2.push(new Rectangle());
	}
	noStroke();
}

function keyPressed() {
   if (keyCode === UP_ARROW) {
     shapes.push(new Circle())
  } 
   if (keyCode === DOWN_ARROW) {
     shapes.pop(new Circle())
  } 
    if (keyCode === RIGHT_ARROW) {
     shapes2.push(new Rectangle())
  } 
   if (keyCode === LEFT_ARROW) {
     shapes2.pop(new Rectangle())
  } 
}

function draw() {
	background(255);

  for( let s2 of shapes2 ) {
		s2.update();
		s2.draw();
	}	

	for( let s of shapes ) {
		s.update();
		s.draw();
	}	

  fill(0);
  let instructions1 = "Press the UP ARROW to add circles";
  let instructions2 = "Press the DOWN ARROW to remove circles";
  let instructions3 = "Press the RIGHT ARROW to add retangles";
  let instructions4 = "Press the LEFT ARROW to remove circles";

  text(instructions1, 10, 10);
  text(instructions2, 10, 25);
  text(instructions3, 10, 40);
  text(instructions4, 10, 55);
}

class Circle { 
constructor() {

    this.z = random(10000);
		this.x = width * noise(this.z)
		this.y = height * noise(this.t+5)
		this.r = 50
		this.c = color(random(256),random(256),random(256));
	}

update() {
	  this.z += 0.01;	
    this.x = width * noise(this.z)
    this.y = height * noise(this.z+5)  
}
	
	
draw() {
	fill(this.c);
	circle(this.x,this.y,this.r);		
	}
}

class Rectangle { 
constructor() {

    this.z = 0;
    this.x = random(width);
		this.y = height
    this.w = 50
		this.h = noise(this.z) * - height
		this.c = color(random(256),random(256),random(256))
	}
	
update() {
	  this.z += random(0.01);	
   	this.h = noise(this.z) * - height
}
	
draw() {
	fill(this.c);
	rect(this.x,this.y,this.w, this.h);		
	}
}