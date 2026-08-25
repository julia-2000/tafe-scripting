// Create function that represent the circle
// Radius, calc area to create a function, create and print result

let circle = {
    radius: 30,
    calculateArea: function (radius) {
        return this.radius * this.radius * Math.PI;
    }
};

let area = circle.calculateArea();
console.log(`Radius of circle: ${area}`);