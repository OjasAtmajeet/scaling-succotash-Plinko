class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution: 0.4
        }
        this.x = x;
        this.y = y;
        this.r = 15;

        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}