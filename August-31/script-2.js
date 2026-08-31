let numbers = [10, 20, 30, 40];

// // Add element to the array
// function insertAlgoritm(array, index, value) {
//     // Shifting elements to the right to make space for the new value 
//     for (let i = array.length; i > index; i--) {
//         array[i] = array[i - 1];
//         // Adding new value at the specified index in array
//         array[index] = value;
//     }
// }
// insertAlgoritm(numbers, 2, 25);
// console.log(numbers);

// // When assign value tonot existing location it will create automatically.
// numbers[7] = 200;
// console.log(numbers);

// In assessment will help t add tasks as an objects


// Delete Algorithm
function deleteAlgoritm(array, index) {
    // Shift elements to the left - at the front of the array
    for (let i = index; i < array.length - 1; i++) {
        // Copy value of previous element
        array[i] = array[i + 1];
    }
    // Remove the last index of the array
    array.length--;
}

deleteAlgoritm(numbers, 2);
console.log(numbers);
