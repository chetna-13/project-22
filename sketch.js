
var thickness,wall;
var bullet , weight , speed;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


 bullet =  createSprite(50, 200, 70, 20);
 bullet.velocityX = speed;
 bullet.shapeColor = color ("white");

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);


}



function draw() {
  background(0);  

  if (hasCollided (bullet,wall))
  {
    bullet.velocityX = 0;
  var damage =( 0.5 * Weight * Speed * Speed / (Thickness * Thickness * Thickness ));
    
    if(damage < 10)
    {
      bullet.shapeColor = color("green");
    }
    if(deformation > 10)
    {
      bullet.shapeColor = color( "red");
    }
  }

  drawSprites();
}

function hasCollided (wall,bullet)
{
  bulletRightEdge  = bullet.x + bullet.Width;
  wallLeftEdge = wall.x;
   if(bulletRightEdge >= wallLeftEdge)
   {
     return true;
   }
    return false;
}