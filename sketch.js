// gravity is being cleared
// mass is going to be added
// if both forces are constantly applied the ball should come to rest on the bottom right of the screen 
// however if the wind force is not applied it will continue to move right to left 
// showing it captures netwons first law
// this version
// both (wind and gravity) forces are only applied when clicked
// when not clicked the ball will remain in motion or at rest at last vector
// as if in a Newtonian vacuum
// at the start no movement when moving no change without applying force

let greg;
//let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  greg = new Mover(width / 4, height / 2,4, color(255, 255, 0));
  mj = new Mover(width - (width / 4), height / 2, 2, color(255, 0, 255));


}

function draw() {
  background(0, 0, 88);

  if (mouseIsPressed) {
    
    // apply wind to both
    let wind = createVector(0.2, 0);
    greg.applyForce(wind);
    mj.applyForce(wind);
    background(0, 0, 150);
    fill(0);
    textSize(25);
    text("WIND Direction ===>", 100,50);
    //if both forces are only applied when clicked
    // when not clicked the ball will remain in motion at last vector
    // as if in a Newtonian vacuum
    // at the start no movement when moving no change without force
    
  }
  
  // apply gravity to both 
  // the gravity vector creates the gravitational acceleration
  // however the force is really the weight which is a scaled from mass
  // weight = force  = mass * gravitational acceleration   
  // the bigger the mass the bigger the force (weight) 
  // we need a static function to calculate that so we dont change gravity vector
  // and variable to hold the result. then pass that to applyForce  
  
  let gravity = createVector(0, 0.2); //
  // get the weight (force) as a fuction of gravity and mass
  // weight = force  = mass * gravitational acceleration
  let gregWeight = p5.Vector.mult(gravity,greg.mass);
  let mjWeight = p5.Vector.mult(gravity,mj.mass);
  // apply that weight as a force
  
  greg.applyForce(gregWeight);
  mj.applyForce(mjWeight);
  greg.update();
  mj.update();
  greg.edges();
  mj.edges();
  greg.show();
  mj.show();
  let gvel = `greg VEL: ${greg.vel.x.toFixed(2)} x ${greg.vel.y.toFixed(2)} y`;
  let mvel = `mj VEL: ${mj.vel.x.toFixed(2)} x ${mj.vel.y.toFixed(2)} y`;
  fill(255,255,0);
  textSize(30);
  text(gvel, 100, 100);
  fill(255,0,255);
  textSize(30);
  text(mvel, 100, 140);

}