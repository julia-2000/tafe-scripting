// Object rectangle
let rect = {
    width: 50,
    height: 10,

    // Method declaration
    // Function "lives" inside the object
    area: function (height, width) {
        // "this" keyword - represents objact itself
        return this.width * this.height;
    }
};


let area = rect.area();
console.log(area);

// Function within expression:
// Syntax
// functionName: function(){
// return
// }

// let area = rect.width * rect.height;
// console.log(area);

/* Function Syntax: First is Declaration Form */
// Function declaration (note function key word) - standart
// function calculateArea(height, width) {
//     return height * width;
// }


/* Function Syntax: Second is Expression Form */
let calcArea = function (width, height) {
    return height * width;
}

// let area = calculateArea(rect.height, rect.width);
// console.log(area);

