/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var jungle, invisiblejungle;

var obstaclesGroup, obstacle1;

var score=0;

var gameOver, restart;

function preload(){
  kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  jungleImage = loadImage("assets/bg.png");
  shrub1 = loadImage("assets/shrub1.png");
  shrub2 = loadImage("assets/shrub2.png");
  shrub3 = loadImage("assets/shrub3.png");
  obstacle1 = loadImage("assets/stone.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("assets/jump.wav");
  collidedSound = loadSound("assets/collided.wav");
}

function setup() {
  createCanvas(800, 400);

  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;
  
  kangaroo=createSprite(50,250,60,60);
  kangaroo.addAnimation("kangaroo",kangaroo_running)
  kangaroo.addAnimation("kangaroo",kangaroo_collided)
  kangaroo.scale=0.2
  kangaroo.setCollider('circle',0,0,300)
  invisibleground=createSprite(400,350,1600,100)
  invisibleground.visible=false
  shrubsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;

}

function draw() {
  background(255);
  kangaroo.x=camera.position.x-270
  if(gameState===PLAY){
    jungle.velocityX=-2
    if(jungle.x<100){
      jungle.x=400
    }
    if(keyDown('space')){
      kangaroo.velocityY=-2
    }
  kangaroo.velocityY=kangaroo.velocityY+0.8
  kangaroo.collide(invisibleground)
  }
  
  drawSprites();

}
function spawnShurbs(){
  
}