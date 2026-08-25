// Bank account
let bankAccount = {
    // Identifier - means property
    owner: "John Doe",
    balance: 300,
    deposit: function (amount) {
        this.balance += amount;
        return this.balance;
    }
};

let accountBalance = bankAccount.deposit(200);
console.log(accountBalance);
