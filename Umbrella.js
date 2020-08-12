class Umbrella {
  constructor(x, y, radius) {
      var options = {
          isStatic: true
      }
      this.radius = radius;
      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("sprites/umbrella.png");
      World.add(world, this.body);
  }
  display() {
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius, this.radius);
      this.visiblity = 0;
      pop();
  }
}