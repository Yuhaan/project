var canvas;
var music;
var ball,block1,block2,block3,block4,edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
 block1=createSprite(0,580,300,30)
block1.shapeColor="blue"
block2=createSprite(252,580,200,30)
block2.shapeColor="orange"

block3=createSprite(400,580,200,30)
block3.shapeColor="red"

block4=createSprite(600,580,200,30)
block4.shapeColor="pink"
edges=createEdgeSprites()
    //create box sprite and give velocity
  ball=createSprite(200,50,20,20) 
  ball.shapeColor="teal"
 ball.setVelocity(3,3)
}

function draw() {
    background(255);
    //create edgeSprite

 ball.bounceOff(edges)

 if(ball.isTouching(block1)&&ball.bounceOff(block1)){
     music.play()
     ball.shapeColor="blue"
 }
 if(ball.isTouching(block2)&&ball.bounceOff(block2)){
    music.stop()
    ball.shapeColor="orange"
    ball.setVelocity(0,0)


}

if(ball.isTouching(block3)&&ball.bounceOff(block3)){
    
    ball.shapeColor="red"
}
if(ball.isTouching(block4)&&ball.bounceOff(block4)){
    
    ball.shapeColor="pink"
}
drawSprites()
   
}  
    
