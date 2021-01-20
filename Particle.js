class particle {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.76
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(150, 255)), color(random(150, 255)), color(random(150, 255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}