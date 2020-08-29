const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground1,ground2;
var chain,poly1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   // bird1 = new Bird (200,100);

   

    box1 = new Box(455,257,70,70);
    box2 = new Box(525,224,70,70);
    box3 = new Box (594,218,70,70);
    box4 = new Box(668,215,70,70);
    box5 = new Box (740,209,70,70);
    box6 = new Box(525,274,70,70);
    box7 = new Box (594,218,70,70);
    box8 = new Box(668,215,70,70);
    box9 = new Box (594,218,70,70);
    box10 = new Box(200,100,70,70)
   
    ground1 = new Ground(600,300,500,20);
    fill("yellow")
    poly1 = new Polygon (300,700);
    chain = new Chain (poly1.body,box10.body);
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

     text(mouseX+":" + mouseY, mouseX,mouseY)
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground1.display();
    chain.display();
    poly1.display();

   
    // bird1.display();
}
function mouseDragged(){
   
    Matter.Body.setPosition(poly1.body, {x: mouseX , y: mouseY});


}


function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}