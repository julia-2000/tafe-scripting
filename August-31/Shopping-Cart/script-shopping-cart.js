// Assign variables for the form input
let inputName = document.getElementById("inputName");
let inputPrice = document.getElementById("inputPrice");
let inputQty = document.getElementById("inputQty");
let btnAddProduct = document.getElementById("btnAddProduct");
let cartTableBody = document.getElementById("cartTableBody");


// Add Event Listener Function for the Add New Product button
btnAddProduct.addEventListener("click", function () {

    // Assign input values to the variables
    let name = inputName.value.trim();
    let price = parseFloat(inputPrice.value);
    let qty = parseInt(inputQty.value, 10);

    // checking if all the input fields have required information
    if (!name || isNaN(price) || isNaN(qty) || price < 0 || qty < 1) {
        alert("Invalid input.");
        // Return will exit the function: will not continue to the next process!
        return;
    }

    // 
    let newProduct = { name: name, price: price, qty: qty };
    insertFunction(cart, 0, newProduct);
    console.log(cart);

    // Clear form input
    inputName.value = "";
    inputPrice.value = "";
    inputQty.value = "";

    updateDisplay();
})



// Update Display
function updateDisplay() {
    if (!cartTableBody) return; // If cartTableBody is null, then do nothing!

    cartTableBody.innerHTML = "";

    // Updates Table with new Item
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let tr = document.createElement("tr");

        // Name
        let tdName = document.createElement("td");
        tdName.innerText = item.name;
        // Appending data to the table row
        tr.appendChild(tdName);

        // Price
        let tdPrice = document.createElement("td");
        tdPrice.innerText = item.price;
        // Appending data to the table row
        tr.appendChild(tdPrice);

        // Qty
        let tdQty = document.createElement("td");
        tdQty.innerText = item.qty;
        // Appending data to the table row
        tr.appendChild(tdQty);

        // Subtotal
        let tdSubtotal = document.createElement("td");
        tdSubtotal.innerText = item.qty * item.price;
        // Appending data to the table row
        tr.appendChild(tdSubtotal);

        let tdActions = document.createElement("td");
        let btnDelete = document.createElement("button");

        btnDelete.innerText = "Delete";
        btnDelete.className = "badge-delete";
        btnDelete.setAttribute("data-index", i);
        btnDelete.addEventListener("click", function () {
            deleteAlgoritm(cart, i);
            updateDisplay();
        });
        tdActions.appendChild(btnDelete);
        tr.appendChild(tdActions);

        // Appending row to the table
        cartTableBody.appendChild(tr);
    }
};


// Shopping Cart
let cart = [
    { name: "Mechanical Keyboard", price: 120.00, qty: 1 },
    { name: "Wireless Mouse", price: 60.00, qty: 2 },
    { name: "HD Monitor", price: 300.00, qty: 1 }
];

// Should recieve 3 parameters - adding new item into the array
function insertFunction(array, index, value) {
    console.log("insert");
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
    name: "PC Tower",
    price: 2020.00,
    qty: 2
};

// Checking add item function
// insertFunction(cart, 0, newProduct);
// console.log(cart);

// Cheking delete function
// deleteAlgoritm(cart, 1);
// console.log(cart);

let query = cart[1];
console.log(sequentialSearch(cart, query));

// Calling Function to display the table
updateDisplay();


// Decrease Button
const btnDecrease = document.createElement("button");
btnDecrease.innerText = "-";
btnDecrease.className = "btn-qty";
btnDecrease.setAttribute("data-index", index);
btnDecrease.addEventListener("click", function () {

    if (cart[index].qty > 1) {
        cart[index].qty--;
    }
    else {
        // Remove item if quantity is 0
        deleteAlgoritm(cart, index);
    }
    updateDisplay();
});

// Quantity Text
const qtyText = document.createElement("span");
qtyText.className = "qty-text";
qtyText.innerHTML = item.qty;


// Increase Button
const btnIncrease = document.createElement("button");
btnIncrease.innerText = "+";
btnIncrease.className = "btn-qty";
btnIncrease.setAttribute("data-index", index);
// On ckick add 
btnIncrease.addEventListener("click", function () {
    // Increase qty
    cart[index].qty++;
    updateDisplay();
});

// create element
tdQty.appendChild(btnDecrease);
tdQty.appendChild(qtyText);
tdQty.appendChild(btnIncrease);
tr.appendChild(tdQty);

// =======================
// 2. ARRAY ALGORITHMS
// =======================


