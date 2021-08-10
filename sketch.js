
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=new Paper(200,470,40)
    dustbin1=new Dustbin(1000,410,200,200)
    //dustbin2=new Dustbin(900,545,10,100)
   // dustbin3=new Dustbin(1100,545,10,100)
  ground=new Ground(600,600,1200,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:72,y:-72});
  }
}


