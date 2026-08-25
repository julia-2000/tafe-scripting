let car = {
    brand: "Mazda",
    speed: 45,
    accelerate: function () {
        if (this.speed <= 60) {
            this.speed = this.speed + 10;
            return this.speed;
        }
        else if (this.speed > 100) {
            return "Don't speed up!";
        }
        else {
            return "It's fine!"
        }

    }
};

let result = car.accelerate();
console.log(`Result: ${result}`);
console.debug(car.accelerate());