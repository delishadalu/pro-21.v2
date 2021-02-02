var canvas;
var music;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 block1= createSprite(100,550,180,10)
 block1.shapeColor="blue";
 block2= createSprite(300,550,180,10)
 block2.shapeColor="yellow";
 block3= createSprite(500,550,180,10)
 block3.shapeColor="magenta";
 block4= createSprite(700,550,180,10)
 block4.shapeColor="green";

    //create box sprite and give velocity
 box=createSprite(random(20,750),100,25,25)
 box.shapeColor="white";
box.velocityY=5;
box.velocityX=3
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges= createEdgeSprites()
box.bounceOff(edges)

if(block1.isTouching(box) && box.bounceOff(block1)){
    box.shapeColor="blue"
}
if(block2.isTouching(box) && box.bounceOff(block2)){
    box.shapeColor="yellow"
}
   
if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor="magenta"
}
if(block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor="green"
}
//add condition to check if box touching surface and make it box


drawSprites();
}
