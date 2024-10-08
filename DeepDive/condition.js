function Circle(radius) {
    if (!new.target) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2* 2 * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.getDiameter());