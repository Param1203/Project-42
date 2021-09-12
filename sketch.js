var score =0;
var gun,bullet,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);
  heading= createElement("h1");
  scoreboard= createElement("h1");

  //bulletGroup.add(bullet);


  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2

  bullet= createSprite(100,50,50,50);
  bullet.addImage(bulletImg);
  bullet.velocityX = 5;
  bullet.scale = 0.2; 
  

  if(keyIsDown(keyIsDown===32)) {
    shootBullet();
  }
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading = createElement("h1");
  scoreboard = createElement("h1");
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
  scoreboard.html("Score: "+score);
  scoreboard.style('color:red');
  scoreboard.position(width-200,20);

  if(gameState===1){
    gun.y=mouseY
    
    if(frameCount % 80 ===0){
      drawblueBubble();
    }

    if(frameCount % 100 ===0){
      drawredBubble();
    }
    drawSprites();
  }
}

function drawblueBubble() {
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale=0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}

function drawredBubble() {
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale=0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}

function handleBubbleCollision(bubbleGroup){
  if(life>0) {
    score=score+1;
  }
}