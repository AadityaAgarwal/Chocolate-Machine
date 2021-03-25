var box,boxImg;
var c1,c2,c3;
var choc1img,choc2img,choc3img;
var choc1,choc2,choc3;
var PLAY=1;
var END=0;
var gameState=PLAY;
var s;
var r,r1;
var a,a1;

function preload(){
  boxImg=loadImage("Untitled.png");

  choc1img=loadImage("jelly.png");
  choc2img=loadImage("pulse.png");
  choc3img=loadImage("center_fruit.jpg");
  r1=loadImage("restart.jpg");
  a1=loadImage("arrow.png");
}

function setup(){
  createCanvas(600,600);

  box=createSprite(300,300,30,30);
  box.addImage(boxImg);
  box.scale=0.7;

  c1=createSprite(170,300,30,30);
  c2=createSprite(305,300,30,30);
  c3=createSprite(425,300,30,30);

  c1.visible=false;
  c2.visible=false;
  c3.visible=false;

  choc1=createSprite(170,375,20,20);
  choc1.addImage(choc1img);
  choc1.scale=0.5;
  choc1.visible=false;

  choc2=createSprite(305,375,20,20);
  choc2.addImage(choc2img);
  choc2.scale=0.2;
  choc2.visible=false;
  
  choc3=createSprite(425,375,20,20);
  choc3.addImage(choc3img);
  choc3.scale=0.1
  choc3.visible=false;
  
  r=createSprite(300,50,10,10);
  r.addImage(r1);
  r.scale=0.2;

  a=createSprite(550,300,10,10);
  a.addImage(a1);
  a.scale=0.3;
  s=0;
}

function draw(){
  background("white");
 
  console.log(s);

  if(gameState===PLAY){

  if(mousePressedOver(c1)){
    choc1.visible=true;
  }
  if(mousePressedOver(c2)){
    choc2.visible=true;
  }
  if(mousePressedOver(c3)){
    choc3.visible=true;
  }
  if(mousePressedOver(r)){
    choc3.visible=false;
    choc2.visible=false;
    choc1.visible=false;
  }
  }
  
  drawSprites();
}