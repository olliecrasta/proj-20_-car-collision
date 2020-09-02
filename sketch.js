var car,wall;
var speed,weight;
var deformation ;


function setup() {
  createCanvas(1400,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(width - 100,200,60,height/2);
  car.velocityX = 6;
  speed = random(55,90);
  weight = random(400,1200);
  deformation = 0.5*weight*speed*speed/22500
}

function draw() {
  background("black");  
  textAlign(CENTER);
  textSize(24);
  text("Speed : "+ speed,width/2,30);
  text("Weight : "+ weight,width/2,50);
  text("Deformation : "+ deformation,width/2,70);
  if(abs(car.x-wall.x)<=(car.width/2 + wall.width/2)){
        car.setVelocity(0,0);

      if(deformation <=80){
          car.shapeColor = "green";
      }
      else if(deformation >80 && deformation <180){
          car.shapeColor="yellow"
      }
      else if(deformation >=180){
          car.shapeColor = "red"
      }
  }
  drawSprites();
}