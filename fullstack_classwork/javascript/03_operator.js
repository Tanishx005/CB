
/*
========================================
       INTRODUCTION TO OPERATORS
========================================

Operators in JavaScript are special symbols or
keywords used to perform operations on operands.

Operands are the values or variables on which
an operator performs an operation.

Example:
let a = 10;
let b = 5;
console.log(a + b);

Here:
a and b are operands.
+ is an arithmetic operator.

Types of JavaScript operators:
1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. Bitwise operators
6. String operators
7. Unary operators
8. Increment and decrement operators
9. Ternary operator
10. Type operators
11. Nullish coalescing operator
12. Optional chaining operator
*/

// ========================================
// 1. ARITHMETIC OPERATORS
// ========================================

console.log("1. ARITHMETIC OPERATORS");

let a = 10;
let b = 3;

console.log("Addition:", a + b);         // 13
console.log("Subtraction:", a - b);      // 7
console.log("Multiplication:", a * b);   // 30
console.log("Division:", a / b);         // 3.333...
console.log("Remainder:", a % b);        // 1
console.log("Exponentiation:", a ** b);  // 1000


// ========================================
// 2. ASSIGNMENT OPERATORS
// ========================================

console.log("\n2. ASSIGNMENT OPERATORS");

let x = 10;       // Basic assignment
console.log("Initial:", x);

x += 5;            // x = x + 5
console.log("After +=:", x);

x -= 2;            // x = x - 2
console.log("After -=:", x);

x *= 2;            // x = x * 2
console.log("After *=:", x);

x /= 2;            // x = x / 2
console.log("After /=:", x);

x %= 4;            // x = x % 4
console.log("After %=:", x);

x **= 2;           // x = x ** 2
console.log("After **=:", x);


// ========================================
// 3. COMPARISON OPERATORS
// ========================================

console.log("\n3. COMPARISON OPERATORS");

let p = 10;
let q = "10";

console.log("Equal (==):", p == q);              // true
console.log("Strict equal (===):", p === q);     // false
console.log("Not equal (!=):", p != q);          // false
console.log("Strict not equal (!==):", p !== q); // true
console.log("Greater than:", p > 5);             // true
console.log("Less than:", p < 20);               // true
console.log("Greater or equal:", p >= 10);       // true
console.log("Less or equal:", p <= 9);           // false


// ========================================
// 4. LOGICAL OPERATORS
// ========================================

console.log("\n4. LOGICAL OPERATORS");

let age = 21;
let hasID = true;

console.log("AND (&&):", age >= 18 && hasID);
console.log("OR (||):", age < 18 || hasID);
console.log("NOT (!):", !hasID);

// Short-circuit evaluation
console.log("AND short-circuit:", false && "Hello");
console.log("OR short-circuit:", 0 || "Default value");


// ========================================
// 5. BITWISE OPERATORS
// ========================================

console.log("\n5. BITWISE OPERATORS");

let m = 5;  // Binary: 0101
let n = 3;  // Binary: 0011

console.log("AND (&):", m & n);             // 1
console.log("OR (|):", m | n);              // 7
console.log("XOR (^):", m ^ n);             // 6
console.log("NOT (~):", ~m);                // -6
console.log("Left shift (<<):", m << 1);    // 10
console.log("Right shift (>>):", m >> 1);   // 2
console.log("Unsigned right shift (>>>):", m >>> 1); // 2


// ========================================
// 6. STRING OPERATORS
// ========================================

console.log("\n6. STRING OPERATORS");

let firstName = "Tan";
let lastName = "x";

console.log("Concatenation:", firstName + lastName);
console.log("Concatenation assignment:", firstName += "x");
console.log("Template literal:", `Hello, ${firstName}!`);


// ========================================
// 7. UNARY OPERATORS
// ========================================

console.log("\n7. UNARY OPERATORS");

let value = 5;

console.log("Unary plus:", +"25");       // 25 (number)
console.log("Unary minus:", -value);     // -5
console.log("Logical NOT:", !true);      // false
console.log("Bitwise NOT:", ~value);     // -6
console.log("Type:", typeof value);      // number
console.log("Delete property example:");

let user = { name: "Tanx", age: 21 };
console.log(delete user.age);            // true
console.log(user);                       // { name: "Tanx" }


// ========================================
// 8. INCREMENT AND DECREMENT OPERATORS
// ========================================

console.log("\n8. INCREMENT AND DECREMENT");

let count = 5;

console.log("Post-increment:", count++); // 5
console.log("After post-increment:", count); // 6

console.log("Pre-increment:", ++count);  // 7

console.log("Post-decrement:", count--); // 7
console.log("After post-decrement:", count); // 6

console.log("Pre-decrement:", --count);  // 5


// ========================================
// 9. TERNARY OPERATOR
// ========================================

console.log("\n9. TERNARY OPERATOR");

let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);


// ========================================
// 10. TYPE OPERATORS
// ========================================

console.log("\n10. TYPE OPERATORS");

console.log("typeof:", typeof "Hello");       // string
console.log("typeof:", typeof 100);           // number
console.log("typeof:", typeof true);          // boolean

let numbers = [1, 2, 3];

console.log(
    "instanceof Array:",
    numbers instanceof Array
); // true


// ========================================
// 11. NULLISH COALESCING OPERATOR (??)
// ========================================

console.log("\n11. NULLISH COALESCING");

let username = null;

console.log(username ?? "Guest"); // Guest

console.log(0 ?? 100);            // 0
console.log(false ?? true);       // false

// ?? uses the default only for null or undefined.


// ========================================
// 12. OPTIONAL CHAINING OPERATOR (?.)
// ========================================

console.log("\n12. OPTIONAL CHAINING");

let student = {
    name: "Tanx",
    address: {
        city: "Mathura"
    }
};

console.log(student.address?.city);    // Mathura
console.log(student.contact?.phone);   // undefined

// ?. safely accesses a property when the
// value before ?. is null or undefined.


// ========================================
// END OF OPERATORS
// ========================================

console.log("\nAll operator examples executed successfully!");
