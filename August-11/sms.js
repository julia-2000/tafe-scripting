// Array
let residents = [
    {
        familyName: "John",
        phoneNumber: "0422338892",
        address: "12 Oak Street",
        familyMembers: 3
    },
    {
        familyName: "Alice",
        phoneNumber: "0422338893",
        address: "13 Oak Street",
        familyMembers: 2
    },
    {
        familyName: "Emma",
        phoneNumber: "0422338894",
        address: "14 Oak Street",
        familyMembers: 5
    },
    {
        familyName: "Roky",
        phoneNumber: "0422338895",
        address: "15 Oak Street",
        familyMembers: 4
    },
    {
        familyName: "Katerina",
        phoneNumber: "0422338896",
        address: "16 Oak Street",
        familyMembers: 3
    },
    {
        familyName: "Laila",
        phoneNumber: "0422338897",
        address: "17 Oak Street",
        familyMembers: 1
    }
];

// console.log(`Amount of residents: ${residents.length}`);

for (let i = 0; i < residents.length; i++) {
    // console.log(residents[i]);
    console.log(
        `Hello,
Updates for ${residents[i].familyName} 
your phone is ${residents[i].phoneNumber} 
address is ${residents[i].address} 
members amount is: ${residents[i].familyMembers}
Thank you!
`);
}