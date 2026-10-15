// task: if a user books 3 tix and user's age is greater than age of 18 then give 50rs discount to user 

let tickets = 3;
let age = 20;
let price = 200;
let totalAmount = tickets * price;

if (tickets === 3 && age > 18) {
    totalAmount -= 50;
}

console.log("Total Amount:", totalAmount);

