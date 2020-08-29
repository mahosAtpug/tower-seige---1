class Polygon  {
    constructor(x,y){
      this.body=Bodies.circle(50,200,20);
      World.add(world,this.body);
    }
    
  
   
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(0,0,20);
      pop();
    }
  }
  