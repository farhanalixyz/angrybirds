class Slingshot {
    constructor(bodyA,pointB){
        var options={bodyA:bodyA,
            pointB:pointB,
            stifness:0.04,
            length:10}
            this.pointB=pointB;
            this.sling1=loadImage("sprites/sling1.png");
            this.sling2=loadImage("sprites/sling2.png");
            this.sling3=loadImage("sprites/sling3.png");
            this.sling=Constraint.create(options);
            World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null
    }
        
   display(){
       image(this.sling1,150,500);
       image(this.sling2,120,500);
       if(this.sling.bodyA){
       var pointA=this.sling.bodyA.position;
       var pointB=this.pointB;
       stroke(48,22,8);
       if(pointA.x<70){
       strokeWeight(5);
       line (pointA.x,pointA.y,pointB.x+75,pointB.y-10);
       line(pointA.x,pointA.y,pointB.x+120,pointB.y-15);
       image(this.sling3,pointA.x-30,pointA.y-10,15,30);
       }
       else{
        strokeWeight(3);
        line (pointA.x+30,pointA.y,pointB.x+75,pointB.y-10);
        line(pointA.x+30,pointA.y,pointB.x+120,pointB.y-15);
        image(this.sling3,pointA.x+25,pointA.y-10,15,30);  
       }
       }
   }
}