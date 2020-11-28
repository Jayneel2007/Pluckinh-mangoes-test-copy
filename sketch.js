
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy
var gameState = "onSling";

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	tree = new Tree(700,120,100,100)
	mango1= new Mango(750,280,20)
	mango2= new Mango(880,170,20)
	mango3= new Mango(1000,240,20)
	mango4= new Mango(810,350,20)
	mango5= new Mango(900,300,20)
	mango6= new Mango(1100,300,20)
	
	boy = new Boy(170,600,100,300)
    stone = new Stone(300,500,20)

	slingshot = new SlingShot(stone.body,{x:300,y:530});


	Engine.run(engine);
  
}


function draw() {


  background("WHITE");
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  slingshot.display();

  boy.display();
  detectCollison(stone,mango1)
  detectCollison(stone,mango2)
  detectCollison(stone,mango3)  
  detectCollison(stone,mango4)
  detectCollison(stone,mango5)
  detectCollison(stone,mango6)



  
 

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body, {x: 300 , y: 530});
       slingshot.attach(stone.body);
      
    }
}

function detectCollison(lstone,lmango){

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmangoBody,false)
	}

}




