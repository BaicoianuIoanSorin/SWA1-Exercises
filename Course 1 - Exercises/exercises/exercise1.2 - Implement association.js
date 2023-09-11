class Circle {
    constructor(center, radius) {
        this.radius = radius;
        this.center = center;
    }

    constructor(x, y, radius) {
        this.center = new Point(x,y);
        this.radius = radius;
    }

    getCenterX = () => this.center.x;
    getCenterY = () => this.center.y;
    getRadius = () => this.radius;
    moveCenterTo = (x, y) => {
        this.center = new Point(x, y);
    }

    toString = () => {
        return "center X " + this.getCenterX + " " +
        "center Y " + this.getCenterY() + " " +
        " radius " + this.getRadius;
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX = () => this.x
    getY = () => this.y
    moveTo = (x, y) => { this.x = x; this.y = y; }
    toString = () => { return " x: " + this.x + ", y: " + this.y; }
}

// B create an array of circles, use the array map() method to create an array with the radius of each circle
let center = new Point(20, 30);
let circle1 = new Circle(center, 40);
let circle2 = new Circle(center, 50);
let circle3 = new Circle(center, 60);

let circlesRadius = [circle1, circle2, circle3].map(circle => circle.radius);
console.log("Circles radius: \n" + circlesRadius);

// C extra - we want to add an overloaded constructor to Circle -> Circle(x: double, y: double, radius: double)
// .. added above // TODO ask teacher about that
