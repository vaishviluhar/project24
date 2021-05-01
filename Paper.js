class Paper{
    constuctor(x, y, width, height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = ellipse(x, y, radius, radius);
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      }
}