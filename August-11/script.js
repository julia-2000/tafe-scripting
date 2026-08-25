//  Excercise 1 - For Loop
/*
for (let i=12; i<=22;i++){
console.log("To " + i + " Oak Street" + "\nHello" + "\nThere is neighbourhood activity this weekend, we hope to see you there!" + "\nRegards, Oat Street Neighbourhood Association");
console.log("");
}
*/

// Excercise 2 - Using Literal template
/*
for (let i=12; i<=22;i++){
// Literal string - backticks `` - remove space before Hello and rest of the sentences to get nice formatting!
    console.log(`To ${i} Oak Street.
Hello
There is neighbourhood activity this weekend, we hope to see you there!
Regards, Oat Street Neighbourhood Association`);
    console.log("");
    console.log("");
}
*/

/*
// Excercise 3
let studentName = "Yuliia";
let course = "Cert IV in Programming";
let teacher = "John";
let room = "G1.06";

// Print
console.log(
`Student Information
--------------------
Name: ${studentName}
Course: ${course}
Teacher: ${teacher}
Room: ${room}
`);
*/

/*
// Excercise 4
// Data Structure - Object - Variable that contain many data.
// Object is represent piece in memory that contain information.
let student = {
    // Key: "Value"
    name: "Yuliia",
    course: "Cert IV in Programming",
    teacher: "John",
    room: "G1.06"
}

// Print
console.log(
`Student Information
--------------------
Name: ${student.name}
Course: ${student.course}
Teacher: ${student.teacher}
Room: ${student.room}
`);
*/


// // Excercise 5
// let order = {
//     customerName: "Alice",
//     product: "Laptop",
//     quantity: 2,
//     price: 2060.70,
//     address: "730B, 2 Livingstone Street, Pyrmount, NSW, 2070"
// }

// console.log(
//     `Customer Information
// ---------------------
// Name: ${order.customerName}
// Product: ${order.product}
// Quantity: ${order.quantity}
// Price: ${order.price}
// Address: ${order.address}
// `);



// Excercise 6 - Array - Data Structure - Different access to element by the number of element 0...1..22
// let order = ["Alice", "Laptop", 2, 2060.70, "730, 2 Livingstone Street, Pyrmount, NSW, 2070"];

// console.log(
//     `Customer Information
// ---------------------
// Name: ${order[0]}
// Product: ${order[1]}
// Quantity: ${order[2]}
// Price: ${order[3]}
// Address: ${order[4]}
// `);


// Function - group of code that has reusable piece of code
// Anatomy of the Function
// function functionName(parametr, parametr) {
//     return;
// }

/*
function sendSMS() {
    console.log("Hello world!");
}

// Calling function
sendSMS();
*/

// function sendSMS(message) {
//     console.log(message);
// }

// // Calling function - add argument 
// sendSMS("Hello world!");
// sendSMS("Please come to see me next week!");
// sendSMS("Council will closed on Monday.");

// function add(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// let myresult = add(50, 71);
// console.log(myresult);


// Excercise 1 - Function
// function calculateTotal(price, quantity) {
//     let total = price * quantity;
//     return total;
// }

// let myTotal = calculateTotal(120, 5);
// console.log(`Total price: ${myTotal}`);

// Excercise 2 - Function
let students = [
    {
        studentName: "Ally",
        subject: "Programming",
        mark: "A"
    },
    {
        studentName: "Colin",
        subject: "JavaScript",
        mark: "B"
    },
    {
        studentName: "Elijah",
        subject: "Databases",
        mark: "D"
    },
]

// Function - Print Full Student
// function printResult(student) {
//     console.log(`
// Name - ${student.studentName}
// Subject - ${student.subject}
// Mark- ${student.mark}        
// `);
// }

// Function - Passed or Failed
function passOrNot(mark) {
    if (mark === "D") {
        return "Fail";
    }
    else {
        return "Pass";
    }
}

// Loop throught each of element inside the array
for (let i = 0; i < students.length; i++) {
    // let fullDetails = printResult(students[i]);
    let result = passOrNot(students[i].mark);

    console.log(`Result of the ${students[i].studentName} - ${result}`);
}



