var jakeImg, pathImg, path, jake,  coin, coinImg, coinscore,subwayImg;
function preload(){
 
  jakeImg=loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
  pathImg=loadImage("path.png");
  subwayImg=loadImage("subway.png");
  coinImg=loadImage("coin.png");
}
//var coinscore = 0

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
  subway=createSprite(200,80,100,100);
  subway.addImage(subwayImg);
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(rgb(255, 50, 90))
  textSize(10);
  fill("black")
  text('coin Score', 1,200);
  textSize(15);
  fill("black")
  text('0', 20,230);
  path.velocityY=5;

  if(path.y>400) {
  path.y=height/2 ;
  }
 
  edges=createEdgeSprites();
  

  if(keyDown("up")) {
    jake.y = jake.y-3
  }
  if(keyDown("down")) {
    jake.y = jake.y+3 
  } 
  if(keyDown("left")) {
    jake.x = jake.x+-18
  }
  if(keyDown("right")) {
    jake.x = jake.x+20
  }
  if (jake.isTouching(left_boundary)){
  jake.bounceOff(left_boundary)
    jake.x = jake.x +180
  }
  if (jake.isTouching(right_boundary)){
    jake.bounceOff(right_boundary)
      jake.x = jake.x -180
    }
 
drawSprites();
}