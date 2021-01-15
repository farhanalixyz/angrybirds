var A1=[1,2,3,4,5];
console.log(A1);
console.log(A1[2]);
A1.push("hello");
console.log(A1);
A1.pop();
console.log(A1);
var A2=[[1,2,3],[4,5,6],[7,8,9,10]];
console.log(A2);
console.log(A2[1][1]);
console.log(A2[2][1]);
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImage;
var platform;
var slingshot;

function preload(){
 getBackgroundImage();
}
function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,850,300,300);

    box1 = new Box(700,920,70,70);
    box2 = new Box(920,920,70,70);
    pig1 = new Pig(810, 950);
    log1 = new Log(810,860,300, PI/2);

    box3 = new Box(700,840,70,70);
    box4 = new Box(920,840,70,70);
    pig3 = new Pig(810, 820);

    log3 =  new Log(810,780,300, PI/2);

    box5 = new Box(810,760,70,70);
    log4 = new Log(760,720,150, PI/7);
    log5 = new Log(870,720,150, -PI/7);

    bird = new Bird(50,550);
    slingshot=new Slingshot(bird.body,{x:50,y:550})
}

function draw(){
    if(backgroundImage){
    
    background(backgroundImage);}
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}
async function getBackgroundImage(){
    var response =await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,30);
    if(hour>=06&&hour<18){
        bg="sprites/bg.png";
    }
    else
    {
     bg="sprites/bg2.jpg";
    }
    backgroundImage=loadImage(bg);
}
