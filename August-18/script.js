
let nameElement = document.getElementById("nameInput");
let emailElement = document.getElementById("emailInput");
let messageElement = document.getElementById("messageInput");
let confirmation = document.getElementById("confirmation");

// OnClick - option
// function submitContact() {
//     let name = nameElement.value;
//     let email = emailElement.value;
//     let message = messageElement.value;
//     console.log(name);

//     if (name === "" || email === "" || message === "") {
//         confirmation.textContent = "Please fill in required information!";
//     }
//     else {
//         confirmation.innerHTML =
//             "<h3> Thank you " + name + "</h3>" +
//             "<p> Your message has been reseved </p>" +
//             "<p> We will contact you via your email " + email + "</p>";
//     }
// }   


// Event listener - option
let button = document.getElementById("button");

// Use event listener from now!!!!
// Add inside of addEventListener("action", name of function)
button.addEventListener("click", submitContact)

// Function
function submitContact() {
    let name = nameElement.value;
    let email = emailElement.value;
    let message = messageElement.value;
    console.log(name);

    if (name === "" || email === "" || message === "") {
        confirmation.textContent = "Please fill in required information!";
    }
    else {
        confirmation.innerHTML =
            "<h3> Thank you " + name + "</h3>" +
            "<p> Your message has been reseved </p>" +
            "<p> We will contact you via your email " + email + "</p>";
    }
}    