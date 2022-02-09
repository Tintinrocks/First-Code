var ball;
function setup() {
  createCanvas(1200,800);
  ball = createSprite(300,300,100,100);
}

function draw() 
{ 
  background("#66AF52");
  if (keyDown("LEFT_ARROW")) {
   ball.x = ball.x - 50
  }
  if(keyDown("RIGHT_ARROW")) {
    ball.x = ball.x + 50
  }
  if(keyDown("UP_ARROW")) {
    ball.y = ball.y - 50
  }
  if(keyDown("DOWN_ARROW")) {
    ball.y = ball.y + 50
  }
  if (keyDown("SPACE")) {
  background(rgb(random(0,250), random(0,250), random(0,250)))
  }
  drawSprites();
}




