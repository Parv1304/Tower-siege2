const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var polygon_i;

function preload()
{
    polygon_i=loadImage("polygon.png");
}
function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    ground1=new Ground(600,375,1200,20);
    ground2=new Ground(800,275,400,20);

    box1=new Box(800,245,30,40);
    box2=new Box(830,245,30,40);
    box3=new Box(860,245,30,40);
    box4=new Box(890,245,30,40);
    box5=new Box(920,245,30,40);
    box6=new Box(950,245,30,40);
    box7=new Box(770,245,30,40);
    box8=new Box(740,245,30,40);
    box9=new Box(710,245,30,40);
    box10=new Box(680,245,30,40);
    box11=new Box(650,245,30,40);

    box12=new Box(800,205,30,40);
    box13=new Box(830,205,30,40);
    box14=new Box(860,205,30,40);
    box15=new Box(890,205,30,40);
    box16=new Box(920,205,30,40);
    box17=new Box(770,205,30,40);
    box18=new Box(740,205,30,40);
    box19=new Box(710,205,30,40);
    box20=new Box(680,205,30,40);

    box21=new Box(800,165,30,40);
    box22=new Box(830,165,30,40);
    box23=new Box(860,165,30,40);
    box24=new Box(890,165,30,40);
    box25=new Box(770,165,30,40);
    box26=new Box(740,165,30,40);
    box27=new Box(710,165,30,40);

    box28=new Box(800,125,30,40);
    box29=new Box(830,125,30,40);
    box30=new Box(860,125,30,40);
    box31=new Box(770,125,30,40);
    box32=new Box(740,125,30,40);

    box33=new Box(800,85,30,40);
    box34=new Box(830,85,30,40);
    box35=new Box(770,85,30,40);

    box36=new Box(800,45,30,40);

    sling=new SlingShot(polygon,{x:150,y:310});
}
function draw()
{
    background("#3C2E2E");
    Engine.update(engine);
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    box33.display();
    box34.display();
    box35.display();

    box36.display();

    imageMode(CENTER);
    image(polygon_i,polygon.position.x,polygon.position.y,50,50);

    textSize(25);
    text("Drag the hexagonal stone and release it to launch it towards the blocks",0,50);
}
function mouseDragged()
{
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased()
{
    sling.fly();
}
function keyPressed()
{
    if(keyCode===32)
    {
        sling.attach(polygon);
    }
}