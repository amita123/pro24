const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;
var rubber1=[]


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    stone = new Stone(700,320,100,100);
    hammer = new Hammer (10,100);
    rubber = new Rubber (350,100,30);
    for(var h=1; h<=10; h++){
        
    }
    iron = new Iron (600,200,50,50)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    hammer.display();
    rubber.display("darkblue");
    for(var h=0; h<rubber1.length; h++){
    rubber1[h].display("brown");
    }
  iron.display()

    
 
}