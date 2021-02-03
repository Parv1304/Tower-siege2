/*class Box {
  constructor(x, y, width, height)
  {
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  display()
  {
      if(this.body.speed<1.5){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#67D1EA");
      strokeWeight(3.5);
      rect(pos.x,pos.y,this.width,this.height);
     }
     else{
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
      World.remove(world, this.body);
     }
  }
}*/
class Box
{ 
  constructor(x, y, width, height)
  { 
  var options = { restitution :0.4, friction :0.0} 
  this.visibility = 225; 
  this.body = Bodies.rectangle(x, y, width, height, options); 
  this.width = width; 
  this.height = height; 
  World.add(world, this.body); 
  } 
display()
  { 
  console.log(this.body.speed); 
  if(this.body.speed <3)
  { 
    var angle = this.body.angle; 
    var pos= this.body.position; 
    push(); 
    translate(pos.x, pos.y); 
    rotate(angle); 
    rectMode(CENTER); 
    rect(0,0,this.width, this.height); 
    pop(); 
  }
  else
  { 
    World.remove(world, this.body); 
    push(); 
    this.visibility = this.visibility -5; 
    pop(); 
  } 
  } 
}