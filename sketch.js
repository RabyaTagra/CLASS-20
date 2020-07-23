var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 200, 50, 50);
  movingRect = createSprite(450,200,30,30);
fixedRect.debug = true;
movingRect.debug = true;
}


function draw() {
  background(0);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
if(movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y <= fixedRect.height/2+movingRect.height/2
  ){
text("TOUCHING",250, 300);

  }
  else{
    text(" NOT TOUCHING",250, 300);   
  }


  drawSprites();
}