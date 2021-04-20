class Paper{
    constuctor(x, y, width, height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Matter.Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        circle(pos.x, pos.y, this.width, this.height);
      }
}