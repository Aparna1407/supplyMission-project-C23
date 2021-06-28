var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var object=[];
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground=new Ground(400,670,800,60);

	 redboxbottom=new Redbox(500,650,200,20);
	redboxleft=new Redbox(390,600,20,120);
	redboxright=new Redbox(610,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  for(var i=0;i<object.length;i++){
	  object[i].display();
  }
  drawSprites();
  ground.display();
  redboxbottom.display();
  redboxleft.display();
  redboxright.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
object.push(new Box(helicopterSprite.x,helicopterSprite.y,50,50));
    
  }

  if(keyCode === LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-2
  }

  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+2
  }
}