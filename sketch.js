
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:0.2
		}
	}
	
	function setup() {
		createCanvas(800, 700);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		ground=createSprite(400,680,1000,10);
		ground.shapeColor=color("yellow");

		
		
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	    World.add(world, ground);
	 

		Engine.run(engine);	
	}

function draw (){
	background("black");
	
	drawSprites();
}
