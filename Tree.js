class Tree {
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }

    display(){
       var pos=this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,500,600);
    }
}