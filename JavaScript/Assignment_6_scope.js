
// SECTION 1: BASIC SCOPE

// Q1. What is the output?
// let x = 10;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);

// Output:
// 20
// 10
// Explanation: let is block-scoped, so both variables are different.


// Q2. Predict the output.
// var a = 100;
// {
//     var a = 200;
//     a = 500;
// }
// console.log(a);

// Output:
// 500
// Explanation: var is function-scoped, not block-scoped.


// Q3. What happens here?
// {
//     let message = "Hello";
// }
// console.log(message);

// Output:
// ReferenceError: message is not defined
// Explanation: let variables cannot be accessed outside their block.


// Q4. Predict the output.
// {
//     const number = 50;
// }
// console.log(number);

// Output:
// ReferenceError: number is not defined
// Explanation: const is also block-scoped.


// Q5. What is the output?
// let score = 10;
// {
//     let score = 50;
//     console.log(score);
// }
// console.log(score);

// Output:
// 50
// 10
// Explanation: The inner score exists only inside the block.


// Q6. Predict the output.
// const name = "Bhavya";
// {
//     const name = "Prakash";
//     console.log(name);
// }
// console.log(name);

// Output:
// Prakash
// Bhavya
// Explanation: Both const variables belong to different scopes.


// Q7. What happens here?
// var age = 18;
// {
//     var age = 20;
// }
// console.log(age);

// Output:
// 20
// Explanation: var does not create a separate block scope.


// Q8. Predict the output.
// var number = 25;
// function display() {
//     var number = 75;
//     console.log(number);
// }
// display();

// Output:
// 75
// Explanation: The local variable takes priority inside the function.


// Q9. What is the output?
// let color = "Red";
// {
//     let color = "Blue";
//     console.log("Favorite color:", color);
// }
// console.log(color);
// console.log(message);

// Output:
// Favorite color: Blue
// Red
// ReferenceError: message is not defined
// Explanation: message was never declared.


// Q10. Predict the output.
// let x = 10;
// {
//     let x = 20;
//     {
//         let x = 30;
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(x);

// Output:
// 30
// 20
// 10
// Explanation: JavaScript searches for the nearest variable in the current scope.


// SECTION 2: BLOCK SCOPE AND LOOP SCOPE

// Q11. Predict the output.
// var num = 100;
// if (true) {
//     var num = 300;
// }
// console.log(num);
// console.log(first);

// Output:
// 300
// ReferenceError: first is not defined


// Q12. What is the output?
// let num = 100;
// if (true) {
//     let num = 300;
//     console.log(num);
// }
// console.log(num);

// Output:
// 300
// 100


// Q13. Predict the output.
// const pi = 3.14;
// {
//     const pi = 3.14159;
//     console.log(pi);
// }
// console.log(pi);

// Output:
// 3.14159
// 3.14


// Q14. What happens here?
// {
//     let x = 10;
//     {
//         let y = 20;
//         console.log(x + y);
//     }
// }

// Output:
// 30
// Explanation: Inner blocks can access variables from outer blocks.


// Q15. Predict the output.
// {
//     let a = 10;
//     {
//         let b = 20;
//         {
//             let c = 30;
//             console.log(a + b + c);
//         }
//     }
// }

// Output:
// 60


// Q16. What is the output?
// let status = "Pending";
// {
//     let status = "Success";
//     console.log(status);
// }
// console.log(status);

// Output:
// Success
// Pending


// Q17. Predict the output.
// for (let i = 0; i < 2; i++) {
//     console.log(i + 1);
// }

// Output:
// 1
// 2


// Q18. What is the output?
// {
//     let message = "Start";
//     {
//         let message = "Middle";
//         console.log(message);
//     }
//     console.log(message);
// }
// console.log("End");

// Output:
// Middle
// Start
// End


// Q19. Predict the output.
// if (false) {
//     var result = 100;
// }
// console.log(result);

// Output:
// undefined
// Explanation: var is hoisted, but its assignment never executes.


// Q20. What happens here?
// if (true) {
//     let result = 100;
// }
// console.log(result);

// Output:
// ReferenceError: result is not defined
// Explanation: let is limited to the block in which it is declared.


// Q21. Predict the output.
// for (let i = 1; i <= 3; i++) {
//     console.log(i * 2);
// }
// console.log("Final:", i);

// Output:
// 2
// 4
// 6
// ReferenceError: i is not defined


// Q22. What is the output?
// var count = 1;
// while (count <= 3) {
//     console.log(count);
//     count++;
// }
// console.log("Count:", count);

// Output:
// 1
// 2
// 3
// Count: 4


// Q23. Predict the output.
// for (var i = 5; i >= 3; i--) {
//     console.log(i);
// }
// console.log("After loop:", i);

// Output:
// 5
// 4
// 3
// After loop: 2


// Q24. What is the output?
// for (let i = 1; i <= 3; i++) {
//     console.log("Item:", i);
// }
// console.log("Last item:", i);

// Output:
// Item: 1
// Item: 2
// Item: 3
// ReferenceError: i is not defined


// Q25. Predict the output.
// {
//     let x = 10;
//     console.log(x);
// }
// console.log(x);

// Output:
// 10
// ReferenceError: x is not defined


// Q26. What is the output?
// var num = 10;
// for (var num = 20; num <= 30; num += 10) {
//     console.log(num);
// }
// console.log("Final:", num);

// Output:
// 20
// 30
// Final: 40


// Q27. Predict the output.
// for (let i = 60; i <= 90; i += 10) {
//     console.log(i);
// }
// console.log(i);

// Output:
// 60
// 70
// 80
// 90
// ReferenceError: i is not defined


// Q28. What is the output?
// let value = 5;
// {
//     let value = 6;
//     {
//         let value = 7;
//         console.log(value);
//     }
//     console.log(value);
// }
// console.log("Final value:", value);

// Output:
// 7
// 6
// Final value: 5


// Q29. Predict the output.
// function calculate() {
//     var i = 100;
//     console.log(i);
// }
// console.log(i);
// calculate();

// Output:
// ReferenceError: i is not defined
// Explanation: i is declared inside calculate(), so it cannot be accessed outside.
// calculate() is never executed because the error occurs first.


// Q30. What is the output?
// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }
// console.log("After loop:", i);

// Output:
// 1
// 2
// 3
// 4
// 5
// After loop: 6


// SECTION 3: HOISTING

// Q31. Predict the output.
// console.log(a);
// var a = 90;

// Output:
// undefined
// Explanation: var declarations are hoisted and initialized with undefined.


// Q32. What is the output?
// var num = 20;
// function display() {
//     console.log(num);
//     var num = 10;
// }
// display();

// Output:
// undefined
// Explanation: The local num declaration is hoisted and shadows the global num.


// Q33. Predict the output.
// console.log(a);
// console.log(b);
// var a = 100;
// var b = 200;

// Output:
// undefined
// undefined
// Explanation: Both declarations are hoisted, but assignments happen later.


// Q34. What happens here?
// console.log(x);
// var x = 50;

// // Hoisted equivalent:
// var x;
// console.log(x);
// x = 50;

// Output:
// undefined


// Q35. Predict the output.
// var a = 10;
// function test() {
//     console.log(a);
//     var a = 100;
//     console.log(a);
// }
// test();

// Output:
// undefined
// 100


// Q36. What is the output?
// greet();
// function greet() {
//     console.log("Hello from CodingGita");
// }

// Output:
// Hello from CodingGita
// Explanation: Function declarations are completely hoisted.


// Q37. Predict the output.
// sayHello();
// function sayHello() {
//     console.log("Function is hoisted completely");
// }

// Output:
// Function is hoisted completely


// Q38. What happens here?
// greet();
// var greet = function() {
//     console.log("Hello");
// };

// Output:
// TypeError: greet is not a function
// Explanation: The variable greet is hoisted as undefined, but the function assignment is not hoisted.


// Q39. Predict the output.
// function show() {
//     console.log("I am hoisted");
// }
// show();
// console.log("Function");

// Output:
// I am hoisted
// Function


// Q40. What is the output?
// display();
// function display() {
//     var message = "Hello";
//     console.log(message);
// }

// Output:
// Hello


// SECTION 4: SCOPE CHAIN

// Q41. Predict the output.
// var year = 2025;
// function course() {
//     var subject = "CSE";
//     function college() {
//         var name = "CodingGita";
//         console.log(year);
//         console.log(subject);
//         console.log(name);
//     }
//     college();
// }
// course();

// Output:
// 2025
// CSE
// CodingGita


// Q42. What happens here?
// var globalVar = "Global";
// function outer() {
//     var outerVar = "Outer";
//     function inner() {
//         var innerVar = "Inner";
//         console.log(globalVar);
//         console.log(outerVar);
//     }
//     inner();
// }
// outer();
// console.log(innerVar);

// Output:
// Global
// Outer
// ReferenceError: innerVar is not defined


// Q43. Predict the output.
// let a = 1;
// function first() {
//     let b = 2;
//     function second() {
//         let c = 3;
//         console.log(a, b, c);
//     }
//     second();
// }
// first();

// Output:
// 1 2 3


// Q44. What is the output?
// var name = "Global";
// function display() {
//     var name = "Local";
//     console.log(name);
// }
// display();
// console.log(name);

// Output:
// Local
// Global


// Q45. Predict the output.
// var message = "Global";
// function outer() {
//     var message = "Outer";
//     function middle() {
//         var message = "Middle";
//         function inner() {
//             var message = "Inner";
//             console.log(message);
//         }
//         inner();
//         console.log(message);
//     }
//     middle();
//     console.log(message);
// }
// outer();
// console.log(message);

// Output:
// Inner
// Middle
// Outer
// Global


// Q46. What is the output?
// var x = 50;
// function outer() {
//     var x = 90;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();
// console.log(x);

// Output:
// 90
// 50


// Q47. Predict the output.
// let name = "Global Name";
// function student() {
//     let name = "Local Name";
//     console.log(name);
// }
// student();
// console.log(name);

// Output:
// Local Name
// Global Name


// Q48. What is the output?
// var number = 10;
// function outer() {
//     var number = 20;
//     function inner() {
//         console.log(number);
//     }
//     inner();
//     console.log(number);
// }
// outer();

// Output:
// 20
// 20


// Q49. Predict the output.
// let color = "Blue";
// function showColor() {
//     let color = "Red";
//     console.log("Inside:", color);
// }
// showColor();
// console.log("Outside:", color);

// Output:
// Inside: Red
// Outside: Blue


// Q50. What is the output?
// var marks = 70;
// function exam() {
//     var marks = 95;
//     console.log("Inside:", marks);
// }
// exam();
// console.log("Outside:", marks);

// Output:
// Inside: 95
// Outside: 70


// SECTION 5: NESTED FUNCTIONS

// Q51. Predict the output.
// function outer() {
//     var name = "Jenil";
//     function inner() {
//         var teacher = "Kartik Sir";
//         console.log(name);
//         console.log(teacher);
//     }
//     inner();
// }
// outer();

// Output:
// Jenil
// Kartik Sir


// Q52. What is the output?
// function parent() {
//     console.log("Parent");
//     function child() {
//         console.log("Child");
//         function grandchild() {
//             console.log("Grandchild");
//         }
//         grandchild();
//     }
//     child();
// }
// parent();

// Output:
// Parent
// Child
// Grandchild


// Q53. What happens here?
// function outer() {
//     function inner() {
//         console.log("Inside inner");
//     }
// }
// inner();

// Output:
// ReferenceError: inner is not defined
// Explanation: inner is accessible only inside outer().

// Corrected code:
// function outer() {
//     function inner() {
//         console.log("Inside inner");
//     }
//     inner();
// }
// outer();

// Corrected output:
// Inside inner


// Q54. Predict the output.
// function student() {
//     var name = "Bhavya";
//     function display() {
//         console.log("Hello students");
//         console.log(name);
//     }
//     return display;
// }
// var result = student();
// result();

// Output:
// Hello students
// Bhavya
// Explanation: This is a closure. The inner function remembers its outer scope.


// Q55. What is the output?
// function studentInfo() {
//     var name = "Bhavya";
//     var course = "CSE";
//     function display() {
//         console.log(name);
//         console.log(course);
//     }
//     display();
// }
// studentInfo();

// Output:
// Bhavya
// CSE


// SECTION 6: MIXED SCOPE AND HOISTING

// Q56. Predict the output.
// function test() {
//     x = 100;
//     console.log(x);
// }
// test();

// Output in non-strict mode:
// 100
// Explanation: Assigning to an undeclared variable creates a global variable
// in non-strict mode.
// In strict mode, this produces a ReferenceError.


// Q57. What is the output?
// var a = 10;
// function test() {
//     var a = 20;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// test();

// Output:
// 20


// Q58. Predict the output.
// console.log(a);
// var a;
// a = 100;

// Output:
// undefined
// Explanation: Declaration is hoisted, but assignment happens later.


// Q59. What is the output?
// var num = 10;
// var num = 20;
// console.log(num);

// Output:
// 20
// Explanation: var allows redeclaration in the same scope.


// Q60. Predict the output.
// function calculate() {
//     var total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total += i;
//     }
//     console.log(total);
// }
// calculate();
// console.log(total);

// Output:
// 15
// ReferenceError: total is not defined
// Explanation: total is declared inside calculate(), so it cannot be accessed outside.