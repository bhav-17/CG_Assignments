// ASSIGNMENT: FUNCTIONS IN JAVASCRIPT


// SECTION 1: WHAT IS A FUNCTION?

// Q1. Why do we use functions instead of writing the same code again and again?
// We use functions to avoid repeating the same code multiple times.
// For example, if we want to print a welcome message at different places,
// we can write the message inside a function and call it whenever needed.

// Example:

// function welcome() {
//     console.log("Welcome to JavaScript!");
// }

// welcome();
// welcome();


// Q2. Write any four advantages of functions.

// 1. Code Reusability: We can use the same function multiple times.
// 2. Less Code: Functions help us avoid writing the same code again.
// 3. Easy Debugging: We can easily find and fix errors inside a function.
// 4. Better Organization: Functions divide a large program into smaller parts.


// Q3. How will a function help if we have to display a welcome message at 6 places?

// We can create one function containing the welcome message
// and call it at all six places instead of writing the same code again.

// Example:

// function welcomeMessage() {
//     console.log("Welcome to our course!");
// }

// welcomeMessage();
// welcomeMessage();
// welcomeMessage();
// welcomeMessage();
// welcomeMessage();
// welcomeMessage();


// Q4. Show the same code written twice without a function and once with a function.

// Without using a function:

// console.log("Hello, Student!");
// console.log("Hello, Student!");

// Using a function:

// function greet() {
//     console.log("Hello, Student!");
// }

// greet();
// greet();

// Q5. Give one real-life analogy that explains the idea of a function.

// A function is like a coffee machine.
// We press a button, and the machine performs the same task
// of preparing coffee whenever we need it.
// Similarly, we can call a function whenever we want it to perform a task.


// Q6. Why do functions make debugging easier?

// Functions make debugging easier because we can check a specific
// part of the program instead of searching through the entire code.
// This makes finding and fixing errors much simpler.


// SECTION 2: FUNCTION DECLARATION

// Q1. Create a function declaration named displayCourse
// that returns "JavaScript Fundamentals".

// function displayCourse() {
//     return "JavaScript Fundamentals";
// }

// console.log(displayCourse());

// Q2. Create a function declaration getStudentStatus
// that returns "Active Learner".

// function getStudentStatus() {
//     return "Active Learner";
// }

// let status = getStudentStatus();
// console.log(status);


// Q3. Write a function declaration and call it before its definition.
// What happens and why?

// The function can be called before its definition
// because JavaScript supports hoisting with function declarations.

// Example:

// showMessage();

// function showMessage() {
//     console.log("Function declaration works!");
// }

// Output: Function declaration works!


// SECTION 3: FUNCTION EXPRESSION

// Q1. Create a function expression named showMotto
// that returns "Code. Learn. Grow."

// const showMotto = function() {
//     return "Code. Learn. Grow.";
// };

// console.log(showMotto());


// Q2. Create a function expression getSemester
// that returns the number 3.

// const getSemester = function() {
//     return 3;
// };

// console.log(getSemester());


// Q3. Create a function expression and try to call it
// before writing the expression. What error do you get and why?

// We get a ReferenceError because a function expression
// assigned to a const or let variable cannot be accessed
// before its initialization.

// Example:

// getDetails();

// const getDetails = function() {
//     console.log("Learning JavaScript");
// };

// Output: ReferenceError: Cannot access 'getDetails'
// before initialization.



// SECTION 4: FUNCTION CALLING (INVOCATION)

// Q1. Create a function declaration greetStudent
// that returns the given message. Call it four times.

// function greetStudent() {
//     return "All the best for your coding journey!";
// }

// console.log(greetStudent());
// console.log(greetStudent());
// console.log(greetStudent());
// console.log(greetStudent());


// Q2. Create a function expression todayFocus.
// Store the returned value in a variable and print it.

// const todayFocus = function() {
//     return "Focus on functions today";
// };

// let focus = todayFocus();
// console.log(focus);


// Q3. Write one function declaration and one function expression.
// Call each of them twice and print all four results.

// Function Declaration:

// function firstMessage() {
//     return "Keep learning and improving!";
// }

// Function Expression:

// const secondMessage = function() {
//     return "Practice makes coding easier!";
// };

// Calling both functions twice:

// console.log(firstMessage());
// console.log(firstMessage());

// console.log(secondMessage());
// console.log(secondMessage());