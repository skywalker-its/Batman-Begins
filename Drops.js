class Drops{
    constructor(x,y){
   
    this.width = random(1,2);
    this.height = random(0,10);
    this.x = random(0,window.innerWidth);
    this.y = random(-10,600);
    this.velocityY  = random(2,5);
    
  }

  draw(){
    stroke("blue");
    fill("blue");
    var size = random(10,35);
  rect(this.x,this.y,this.width,this.height+size)
  

  }
    
  
}
