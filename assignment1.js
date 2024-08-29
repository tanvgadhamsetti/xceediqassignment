// Creating variables
var city = "Hyderabad";   
let country = "India";     
const population = 1000000;            
console.log("City:", city);
console.log("Country:", country);
console.log("Population:", population);

// Variable scope
var globalVar = "Global Scope"; // Global scope

function outerFunction() {
    let outerVar = "Outer Function Scope";

    function innerFunction() {
        let innerVar = "Inner Function Scope";
        console.log(globalVar); // Accessible (global scope)
        console.log(outerVar);  // Accessible (outer function scope)
        console.log(innerVar);  // Accessible (local scope)
    }

    innerFunction();
    // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();

// Arithmetic operators
let num1 = 25;
let num2 = 7;
let add = num1 + num2;
let sub= num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

console.log("Addition:", add);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);
console.log("Modulus:", mod);

let result = (num1 + num2) * (num1 - num2);
console.log("Result with parentheses:", result);

// Comparison Operators
console.log("25 == '25':", 25 == '25');
console.log("25 === '25':", 25 === '25');
console.log("25 != '10':", 25 != '10');
console.log("25 !== '25':", 25 !== '25');
console.log("25 > 10:", 25 > 10);
console.log("25 < 30:", 25 < 30);
console.log("25 >= 25:", 25 >= 25);
console.log("25 <= 20:", 25 <= 20);

// Logical Operators
let a = true, b = false;
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);

let temperature = 35;          
let message = "Good Morning";      
let isSunny = true;        
let noValue = null;         
let notDefined;            

console.log("Temperature:", temperature, "Type:", typeof temperature);
console.log("Message:", message, "Type:", typeof message);
console.log("Is Sunny:", isSunny, "Type:", typeof isSunny);
console.log("Null:", noValue, "Type:", typeof noValue);
console.log("Undefined:", notDefined, "Type:", typeof notDefined);

// Object Data Type
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    honk: function() {
        console.log("Beep! Beep! This is a " + this.make + " " + this.model);
    }
};

console.log("Car Object:", car);
car.honk();
car.year = 2022; 
console.log("Updated Year:", car.year);

// Explicit Type Conversion
let strNum = "456";
let convertedNum = Number(strNum);
let boolValue = Boolean(0);
console.log("Converted Number:", convertedNum);
console.log("Converted Boolean:", boolValue);

// Implicit Type Coercion
let implicitCoercion = "7" + 3; // String concatenation due to + operator
console.log("Implicit Coercion Result:", implicitCoercion); // "73"
let comparisonCoercion = "7" == 7;
console.log("'7' == 7:", comparisonCoercion); // true

// String Manipulation
let greeting = "Hello";
let place = "Everyone";
let concatenated = greeting + " " + place;
console.log("Concatenated String:", concatenated);
console.log("Character at Index 1:", greeting[1]);
console.log("Length of String:", greeting.length);
console.log("Substring:", greeting.substring(1, 4));

var firstName = "John";   
let lastName = "Doe";     
const age = 25; 

// Template Literals
let templateLiteral = `Hello, ${firstName} ${lastName}.
You are ${age} years old.`;
console.log("Template Literal:", templateLiteral);

// Decision Making Statements

// If-Else Statements
let numberToCheck = 18;

if (numberToCheck < 10) {
    console.log("The number is less than 10");
} else if (numberToCheck > 10 && numberToCheck < 20) {
    console.log("The number is between 10 and 20");
} else {
    console.log("The number is 20 or greater");
}

// Switch Statements
let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("Unknown fruit.");
}


"use strict"; // enable strict mode

try {
    undeclaredVar = "This will cause an error in strict mode";
} catch (error) {
    console.log("Error in strict mode:", error.message);
}

// Function Declaration
function addNumbers(x, y) {
    return x + y;
}

let sum = addNumbers(15, 25);
console.log("Sum:", sum);

// Function Expression
let multiplyNumbers = function(x, y) {
    return x * y;
};

let product = multiplyNumbers(15, 25);
console.log("Product:", product);
