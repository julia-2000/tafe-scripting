// Operators - % Division

/* Excercise 1 - Fizz Buzz - Practice if else
If number is divisible 3 print Fizz
If number is divisible 5 print Buzz
If number is divisible by both print FizzBuzz
*/

// Start loop from 1 to 20
/* Sodo Code:
If number is divisible by 3 AND 5, print FizzBuzz
If number is divisible by 3 print Fizz
If number is divisible by 5 print Buzz
If number is devisible by none, print the number
*/
/*
for (let i=1; i <= 20; i++){
    // If number divisible by 3 AND 5, print "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    // If number is divisible by 3, print "Fizz"
    else if (i % 3 === 0){
        console.log("Buzz"); 
    }
    // If number is divisible by 5, print "Buzz"
    else if (i % 5 === 0){
        console.log("Fizz");
    }
    // If number is devisible by none, print the number
    else {
        console.log(`Number is: ${i}`);
    }
}
*/

// Trinary operator
/*  condition ? valueIfTrue : valueIfFalse  */
let age = 10;
let message;

// if (age >= 18)
//     message = "Adult";
// else 
//     message = "Minor";

// Trinary operator version
message = age >= 18 ? "Adult" : "Minor";
//        condition ? valueIfTrue : valueIfFalse
console.log(message);
