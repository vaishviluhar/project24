var rect1, rec2, rec3;
var ball;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options ={
	isStatic : false,
    restitution : 0.3,
	friction : 0.5,
	density : 1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  rect1 = new Dustbin(400, 650, 200, 20);
    rect2 = new Dustbin(300, 610, 20, 100);
    rect3 = new Dustbin(500, 610, 20, 100);

    ball = new Paper(20, 680, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect1.display();
  rect2.display();
  rect3.display();

  ball.display();
  
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x : 85, y : -85});
  }
}



