// declaring variables
var bow,blueloon,greenloon,redloon,arrow,pinkloon,blueloonimage,greenloonimage,redloonimage,pinkloonimage,bowmoving,edges,arrowmoving, arrowGroup;
var background,backgroundImage, balloonGroup;
var score = 0;


function preload(){
 //load your images here
 blueloonimage=loadImage("blue_balloon0.png");
  redloonimage = loadImage("red_balloon0.png");
  pinkloonimage=loadImage("pink_balloon0.png");
  greenloonimage=loadImage("green_balloon0.png");
  backgroundImage= loadImage("background0.png");
  bowmoving=loadImage("bow0.png");
  arrowmoving=loadImage("arrow0.png");
                   
                   }

function setup() {
  
  createCanvas(600, 400);
 
  redB = new Group();
  greenB = new Group();
  pinkB = new Group();
  blueB = new Group();
  arrowGroup = new Group();
  
  //creating background
  Background = createSprite(0,0,600,600);
  Background.addImage(backgroundImage);
  Background.scale = 2.1;
 
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowmoving);
  bow.scale = 1;
    var rand =  Math.round(random(1,100))
  console.log(rand);
 
}

function draw() {
  
  
  // moving ground
    Background.velocityX = -3  

    if (Background.x < 0){
      Background.x = Background.width/2;
    }
  
  
if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
       score = score +1;
     } 
  
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
     score = score+1;
  }
  
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
     score = score+1;
  }
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
      score = score+1;
  }
  
  
  
  //moving bow
  bow.y = World.mouseY;
  
 
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  
  
  }
    spawnRedBalloon()
    spawnBlueBalloon()
    spawnPinkBalloon()
    spawnGreenBalloon()
    drawSprites();
  
    
  text("Score : " + score , 270, 30);
  
   
}


function createArrow() {
   arrow= createSprite(360, 100, 5, 10);
   arrow.y = bow.y;
   arrow.velocityX = -20;
   arrow.x = 360;
   arrow.scale = 0.2;
   //arrow.lifetime = 150;
   arrow.addImage(arrowmoving);
   arrowGroup.add(arrow);
  
  //return arrow;
}
function spawnRedBalloon(){
   // write your code here
  if(frameCount % 100 === 0){
  
    redloon = createSprite(400,360,40,40)
    redloon.addImage(redloonimage);
    redloon.x= Math.round(random(10,100));
    redloon.velocityY= -3;
    redloon.scale = 0.1;
    //redloon.lifetime = 100;
    redB.add(redloon);
  }

}
function spawnBlueBalloon(){
   // write your code here
 
  if(frameCount % 80 === 0)
    {
   
     blueloon = createSprite(600,360,40,40)
    blueloon.addImage(blueloonimage);
    blueloon.x= Math.round(random(10,70));
    blueloon.velocityY= -3;
    blueloon.scale = 0.1;
    //blueloon.lifetime = 150;
    blueB.add(blueloon);  
  }

}
  function spawnPinkBalloon(){
   // write your code here
  if(frameCount % 150 === 0){

    pinkloon = createSprite(600,360,40,40)
    pinkloon.addImage(pinkloonimage);
    pinkloon.x= Math.round(random(10,70));
    pinkloon.velocityY= -3;
    pinkloon.scale = 1.2;
    //pinkloon.lifetime = 90;
    pinkB.add(pinkloon);
  }

  }
function spawnGreenBalloon(){
   // write your code here
  if(frameCount % 110 === 0) {

      greenloon = createSprite(600,360,40,40)
      greenloon.addImage(greenloonimage);
      greenloon.x= Math.round(random(10,70));
      greenloon.velocityY= -3;
      greenloon.scale = 0.1;
      //greenloon.lifetime = 80;
      greenB.add(greenloon);
  }

}