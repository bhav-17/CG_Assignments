// A. if Statement

//1. 
let num = 5;
if (num%5===0){
    console.log("divisible by 5");
}

//2. 
let age=72;
if (age>=60){
    console.log("Senior Citizen");
}

//3.
let number=120;
if (number>100){
    console.log("Big Number");
}

//4.
let temp=5;
if (temp<10){
    console.log("Very Cold");
}

//5.
let score=100;
if (score===100){
    console.log("Perfect Score");
}

//6.
let negativeNum=-2;
if (negativeNum<0){
    console.log("Negative number");
}

//7.
let empty="";
if (empty===""){
    console.log("No input provided");
}

//8.
let year=2200;
if (year%100===0){
    console.log("Century Year");
}

//9.
let numBoth=10;
if (numBoth%2===0 && numBoth>0){
    console.log("Positive Even Number");
}

//10.
let marks=35;
if (marks>=35 && marks<100){
    console.log("Valid Marks")
}


// B. if...else Statement

//1.
let newNum = 4;
if (newNum % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//2.
let Age = 20; 
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

//3.
let numNew = -5;
if (numNew >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}

//4.
let mark = 40; 
if (mark >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}

//5.
let char = 'A'; 
if (char >= 'A' && char <= 'Z') {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}

//6.
let num3 = 9; 
if (num3 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}

//7.
let password = "admin123"; 
if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}

//8.
let Year = 2024;

if (Year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

//9.
let num1 = 10, num2 = 25; 
if (num1 > num2) {
    console.log(num1 + " is greater");
} else {
    console.log(num2 + " is greater");
}

//10.
let Num = 0;
if (Num > 0) {
    console.log("Positive Number");
} else {
    if (num < 0) {
        console.log("Negative Number");
    } else {
        console.log("Zero");
    }
}

