
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var tree,ground,boy;
var stone,m1,m2,m3;
var launcher;

function preload()
{
	boy = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree = new Tree(1000,280,100,100);
   ground = new Ground(width/2,580,width,40);
   stone = new Stone(150,270,20);
   m1 = new Mango(1000,50);
   m2 = new Mango(1000,150);
   m3 = new Mango(900,100);
   launcher = new Launcher(stone.body,{x:150,y:270});

   var render = Render.create({
	element:document.body,
	engine:engine,
	options:{
	width:1600,
	height:700,
	wireframes:false
	}
	});
	
	Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(0);
  image(boy,250,420,300,500);
  //image(treeImg,1000,280,500,600)
 tree.display();
  ground.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  launcher.display();
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(stoneObj,mangoObj){
	var stoneObjpos=stoneObj.body.position;
	var mangoObjpos=mangoObj.body.position;
var distance = dist(stoneObjpos.x,stoneObjpos.y,mangoObjpos.x,mangoObjpos.y);
if(distance<=stoneObj.r+mangoObj.r){
Body.setStatic(mangoObj.body,false);
}
}

function keyPressed(){
	if(keyCode===32){
		launcher.attach(stone.body);
	}
}


