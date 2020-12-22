class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,     //the stone should fall
            friction:1,         //1 so that when stone touches the mango it should not slip
            density:1.2,        //stone should make the mango fall,it should have some mass otherwise they won't fall
            restitution:0       //0 because it should not bounce
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }
}