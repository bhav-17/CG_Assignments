// SECTION 1: WHAT IS A FUNCTION?

// Question 1:
// We use functions to avoid repeating the same code multiple times.
// We can write the code inside a function and call it whenever needed.

// function welcome() {
//     console.log("Welcome to JavaScript!");
// }

// welcome();
// welcome();


// Question 2:
// Advantages of functions:
// 1. Code Reusability: We can use the same function multiple times.
// 2. Less Code: Functions help us avoid writing the same code again.
// 3. Easy Debugging: We can easily find and fix errors.
// 4. Better Organization: Functions divide a large program into smaller parts.


// Question 3:
// We can create one function containing the welcome message
// and call it at all six places.

// function welcomeMessage() {
//     console.log("Welcome to our course!");
// }

// welcomeMessage();
// welcomeMessage();
// welcomeMessage();
// welcomeMessage();
// welcomeMessage();
// welcomeMessage();


// Question 4:
// Without using a function:

// console.log("Hello, Student!");
// console.log("Hello, Student!");

// Using a function:

// function greet() {
//     console.log("Hello, Student!");
// }

// greet();
// greet();


// Question 5:
// A function is like a coffee machine.
// We press a button, and the machine prepares coffee.
// Similarly, we can call a function whenever we want it to perform a task.


// Question 6:
// Functions make debugging easier because we can check a specific
// part of the program instead of searching through the entire code.
// This makes finding and fixing errors much simpler.



// SECTION 2: FUNCTION DECLARATION

// Question 1:
// function displayCourse() {
//     return "JavaScript Fundamentals";
// }

// console.log(displayCourse());


// Question 2:
// function getStudentStatus() {
//     return "Active Learner";
// }

// let status = getStudentStatus();
// console.log(status);


// Question 3:
// Function declarations can be called before their definition
// because JavaScript supports hoisting.

// showMessage();

// function showMessage() {
//     console.log("Function declaration works!");
// }

// Output: Function declaration works!



// SECTION 3: FUNCTION EXPRESSION

// Question 1:
// const showMotto = function() {
//     return "Code. Learn. Grow.";
// };

// console.log(showMotto());


// Question 2:
// const getSemester = function() {
//     return 3;
// };

// console.log(getSemester());


// Question 3:
// We get a ReferenceError because a function expression
// assigned to a const or let variable cannot be accessed
// before its initialization.

// getDetails();

// const getDetails = function() {
//     console.log("Learning JavaScript");
// };

// Output: ReferenceError: Cannot access 'getDetails'
// before initialization.



// SECTION 4: FUNCTION CALLING (INVOCATION)

// Question 1:
// function greetStudent() {
//     return "All the best for your coding journey!";
// }

// console.log(greetStudent());
// console.log(greetStudent());
// console.log(greetStudent());
// console.log(greetStudent());


// Question 2:
// const todayFocus = function() {
//     return "Focus on functions today";
// };

// let focus = todayFocus();
// console.log(focus);


// Question 3:
// Function Declaration:

// function firstMessage() {
//     return "Keep learning and improving!";
// }

// Function Expression:

// const secondMessage = function() {
//     return "Practice makes coding easier!";
// };

// console.log(firstMessage());
// console.log(firstMessage());

// console.log(secondMessage());
// console.log(secondMessage());

// Section 5: Parameters vs Arguments

// Question 1:
// function subtract(a,b){
//     return a-b;
// }
// console.log(subtract(50,18));

// Question 2:
// const greetUser=function(name){
//     return `Welcome, ${name}!`;
// }
// console.log(greetUser("Aarav"));

// Question 3:
// function calculateArea(length,breadth){
//     return length*breadth;
// }
// console.log(calculateArea(12,5));
// console.log(calculateArea(8,9));

//Question 4:
// Parameter: Variables defined inside the function definition.
// Arguments: Actual values passed while calling the function.

// Question 5:
/* Yes, a function can have parameters but be called without arguments.
In JavaScript, if no arguments are passed, the parameters get the value undefined by default.*/

// Section 6

// Question 1:
// function squareOfNumber(n){
//     return n**2;
// }
// console.log(squareOfNumber(9));

// Question 2:
// function isAdult(age){
//     return age>=18;
// }
// console.log(isAdult(17));
// console.log(isAdult(20));

// Question 3:
// function getFullName(firstName,lastName){
//     return `${firstName} ${lastName}`;
// }
// console.log(getFullName("Rohit","Sharma"));

// Question 4:
// If there is no return statement inside a function, it returns undefined by default.

// Question 5:
/* We use the return statement to send a value back from a function so that we can store it in a variable or use it in other calculations. console.log() only displays the value on the screen and does not return it.*/

// Section 7

// Question 1:
// function getTotal(m1,m2,m3){
//     return m1+m2+m3;
// }
// console.log(getTotal(98,90,97));
// console.log(getTotal(98,50,97));
// console.log(getTotal(98,90,47));

// Question 2
// function calculateSimpleInterest(principal,rate,time){
//     return principal*rate*time;
// }
// console.log(15000,12,3);
// console.log(21000,17,5);

// Question 3:
// without function
// let a=40;
// let b=50;
// let c=60;
// console.log((a+b+c)/3);

//with function
// function findAverage(a,b,c){
//     return (a+b+c)/2
// }
// console.log(17,20,27);
// console.log(17,20,27);

// Question 4 
/* Functions help reduce code repetition by allowing us to write a block of code once and reuse it whenever needed by calling the function.
Example: In a shopping website, instead of writing the same code repeatedly to calculate the total price, we can create a function and call it whenever required. */

// Question 5
/* Three advantages of using functions are:
1. Code Reusability: We can reuse the same code multiple times.
2. Reduces Repetition: Avoids writing the same code again and again.
3. Easy Debugging: Makes it easier to find and fix errors in a program. */ 
