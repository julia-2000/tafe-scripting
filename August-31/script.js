// // Method - manipulate objects or run operations on object
// let stack = [10, 20];
// console.log(stack);
// stack.push(30);
// console.log(stack);
// // REMOVE ELEMENT FROM THE END OF ARRAY
// stack.pop();
// console.log(stack);

// Shift - operate at the begining of the Array - remove first element
// let numbers = [10, 2, 5];
// numbers.shift();
// console.log(numbers);

// // Unshift - operate at the begining of the Array - add first element to array
// numbers.unshift(2)
// console.log(numbers);

// numbers.forEach(function (value, index) {
//     console.log(`value: ${value}, index: ${index}`);
// });

// // Map - function
// let numbers = [10, 2, 5];
// // Assing Map to the prices - it is return new array
// let prices = numbers.map(function (value) {
//     return value * 2;
// });

// console.log(`value: ${numbers} and prices: ${prices}`);


// let names = ["Yuliia", "Jack", "Jill"];
// let output = names.map(function (name) {
//     return `<p>${name}</p>`;
// });

// console.log(names, output);

// // Covert data into storage
// // Join - function
// let joinString = output.join("\n");
// let html = `
// <div>
// ${joinString}
// </div>`;
// console.log(html);

// // Filter - function
// let ages = [23, 13, 5, 78, 98];
// let adults = ages.filter(function (age) {
//     return age > 18;
// })
// console.log(`Adults: ${adults}`);


// Include 
let products = [
    {
        id: 100,
        name: "mouse"
    },
    {
        id: 101,
        name: "screen"
    },
    {
        id: 102,
        name: "keyboard"
    }
];

products.forEach(function (object) {

    console.log(object.name);
});

let output = products.find(function (object) {
    return object.id === 102;
});
console.log(output);
product = products[1];

// Include - checking memory address not the actual value!!
console.log(products.includes(product));
