
var sprite = createSprite (200,200,50,50);


function setup() {
  createCanvas(400,400);
}








function draw() {
  background("white");
  
  if(keyDown("RIGHT_ARROW"))
  {
    sprite.x = sprite.x + 1;
  }
  
  if(keyDown("LEFT_ARROW"))
  {
     sprite.x = sprite.x - 1;
  }
  
  if(keyDown("UP_ARROW"))
  {
    sprite.y = sprite.y - 1;
  }
  
  
  if(keyDown("DOWN_ARROW"))
  {
  sprite.y = sprite.y + 1;
  }
  
   if(keyDown("DOWN_ARROW"))
  {
  background('red');
  }
  
  
  
   if(keyDown("UP_ARROW"))
  {
  background('red');
  }
  
 if(keyDown("RIGHT_ARROW"))
  {
  background('red');
  }
   if(keyDown("LEFT_ARROW"))
  {
  background('red');
  }
  
  
  
  
  
  drawSprites();
}



























