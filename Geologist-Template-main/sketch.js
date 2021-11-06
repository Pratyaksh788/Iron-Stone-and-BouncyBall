const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall, hammer, rubber;

function setup(){
    var canvas = createCanvas(1370,650);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(685,height-20,1370,20)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
    rubber = new Rubber(1000, 450, 80);
    bouncyBall=new BouncyBall(900,450,70);
     //bouncyBall=BouncyBall(900,450,70);
     //bouncyBall=new (900,450,70);
     //bouncyBall=new BouncyBall();

    hammer = new Hammer(10,100);
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
   
    bouncyBall.display();
    iron.display()  
    hammer.display();
    rubber.display();

}
