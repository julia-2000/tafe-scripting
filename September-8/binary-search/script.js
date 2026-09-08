let numbers = [30, 50, 10, 70, 60, 40, 20];
let sortedArray = [10, 20, 30, 40, 50, 60, 70];
console.log(`Array before sorting: ${numbers}`);
/*
// Sorting array
let sortedArrayASC = numbers.sort(function (a, b) { return a - b });
console.log(`Sorted array: ${sortedArrayASC}`);

// Sorting array descending
let sortedArrayDESC = numbers.sort(function (a, b) { return b - a });
console.log(`Sorted array by DESC: ${sortedArrayDESC}`);
*/

// Search function
function find(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target)
            return index;
    }
    return -1;
};

// Print result of function find
console.log(find(numbers, 40));

// // Sort Array
// function sort(array) {
//     array.sort(function (a, b) { a - b });
// }

/*
function sortAscending(a) {
    return numbers.sort(function (a, b) { return a - b });
};

function sortDescending(a) {
    return numbers.sort(function (a, b) { return b - a });
};
*/

// Binary Search
function binarySearch(a, target) {

    /* Split the array into half and then check middle of the array for searching number - compare it.
    If the searching number is greater then the middle number then we know in wich part of array the searching number.
    Cheking another part of the array and spliting it again into two parts, checking middle.
    */

    let left = 0;
    let rigth = a.length - 1;
    let counter = 0;

    while (left <= rigth) {
        counter++;
        console.log("Counter = " + counter);
        // This is middle pointer element for  check
        let middle = Math.floor((left + rigth) / 2);

        // if middle number is equal of the target element?
        if (a[middle] === target) return middle;

        // If the searching number is less then target element, then we checking the middle element pointer
        if (a[middle] < target)
            left = middle + 1;
        else
            rigth = middle - 1;
    }
    return -1;
};

console.log(binarySearch(sortedArray, 10));