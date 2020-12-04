
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new ground(675,680,1350,10);
	paper = new paper(200,650,20);
	dustbin1 = new dustbin(1100,665,200,20);
	dustbin2 = new dustbin(1200,620,20,100);
	dustbin3 = new dustbin(1000,620,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
