class ball {
    constructor(x,y,r){
    var option = {

        isStatic:false,
      restitution:0.3,
        friction:0,
        density:1.2
    

    }
    this.x=x
    this.y=y
    this.r=r
    
    this.body=Bodies . circle(this.x,this.y,(this.r-20)/2,option)
    this.image=loadImage("paper.png")


  
  
    
    World.add(world,this.body)
}

display(){
    push ();
    translate (this.body.position.x,this.body.position.y)
   // ellipse(0,0,this.r,this.r)
    imageMode (CENTER)
    image (this.image,0,0,this.width,this.height);
    pop ();
}
}