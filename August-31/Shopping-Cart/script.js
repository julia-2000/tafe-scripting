console.log("Start");

// Shopping Cart
let cart = [
    { name: "Mechanical Keyboard", price: 120.00, qty: 1 },
    { name: "Wireless Mouse", price: 60.00, qty: 2 },
    { name: "HD Monitor", price: 300.00, qty: 1 }
];

// Should recieve 3 parameters - adding new item into the array
function insertAlgoritm(array, index, value) {
    // Creating new array item index and shifting all elements to the right
    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
        // Adding new value to the array
        array[index] = value;
    }
};

function deleteAlgoritm(array, index) {
    // Shifting elements to the left 
    for (let i = index; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.length--;
};

// Query - what looking for
function sequentialSearch(array, query) {
    // return array.includes(query);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === query) {
            return query;
        }
    }
};

// New product
let newProduct = {
    name: "Headphones",
    price: 220.00,
    qty: 2
};

// Checking add item function
insertAlgoritm(cart, 0, newProduct);
console.log(cart);

// Cheking delete function
deleteAlgoritm(cart, 1);
console.log(cart);

let query = cart[1];
console.log(sequentialSearch(cart, query));
