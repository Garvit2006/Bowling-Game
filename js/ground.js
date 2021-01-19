class Ground {
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(displayWidth/2,displayHeight/2+50,displayWidth,20,options);
        this.visibility = 0;
        World.add(world,this.body);
    }
    static display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,displayWidth,20);
    }
}