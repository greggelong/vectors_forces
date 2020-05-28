 // updating class
 class Mover {

   constructor(x, y, mass, c) {

     this.pos = createVector(x, y);

     this.vel = createVector(0, 0); // a simple vector
     this.acc = createVector(0, 0);
     this.mass = mass;
     this.r = sqrt(mass)*10;
     this.c = c
    



   }
   // methods
   applyForce(force) {
     // the force will come from the environment not the object itslef
     // A = F / M  : or F = M * A
      //this.acc = force; // dont just set it equal or you cannot have mutiple forces the sum of all forces 
       // for mass we need to use a static function as all force vectors 
       // passed here will be changed.  so we will use a static function.
      // but we need to do somethign special with gravity and mass
      let f = p5.Vector.div(force,this.mass);
      this.acc.add(f);
     //print(force);
     // 
   }

   update() {
     // A = F the force will be applied from outside this time with method above

     this.vel.add(this.acc);
     // use limit to make sure velocity does not grow out
     //this.vel.limit(7);
     this.pos.add(this.vel);
     this.acc.set(0,0); //clearing out acceleration
    // print(this.vel.x,this.vel.y);


   }

   edges() {
     if (this.pos.y >= height-this.r) {
       this.pos.y = height-this.r;
       this.vel.y *= -1;

     }
     
     if (this.pos.y <= this.r) {
       this.pos.y = this.r;
       this.vel.y *= -1;

     }
     if (this.pos.x >= width-this.r) {
       this.pos.x = width-this.r;
       this.vel.x *= -1;
     }
     if (this.pos.x <= this.r) {
       this.pos.x = this.r;
       this.vel.x *= -1;
     }




   }

   show() {
     stroke(255, 0, 0);
     fill(this.c);
     ellipse(this.pos.x, this.pos.y, this.r*2);
      

   }


 }