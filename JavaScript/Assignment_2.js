// Part I: Variables (let, var, const)

// Part a

// Question 1
// const name = "Arnav";
// let age = 18;
// let city = "Ujjain";

// Question 2
// let score = 50;
// score = 80;
// console.log(score);

// Question 3
// const PI = 3.14;
// console.log(PI);

// Question 4
// var num1;
// let num2;
// console.log(num1);
// console.log(num2);
// num1 = 1;
// num2 = 2;
// console.log(num1);
// console.log(num2);


// Part b

// Question 5
// const studentName = "A";
// let marks=89;
// const schoolName = "B";
// marks = 99;
// console.log(studentName);
// console.log(marks);
// console.log(schoolName);

// Question 6
// if (true) {
//     var a = 1; // Can be accessed outside the block
//     let b = 2; // Can not be accessed outside the block
//     const c = 3; // Can not be accessed outside the block
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Question 7
// var user = "A";
// var user = "B"; // Allows re-declaration
// let user = "A";
// let user = "B"; // Doesn't allow re-declaration

// Question 8
// var a = 1; // Allows re-assignment
// let b = 2; // Allows re-assignment
// const c = 3; // Doesn't allow re-assignment
// a = 11;
// b = 12;
// c = 13;


// Part c

// Question 9
// var x = 10;

// if (true) {
//     var x = 20;
//     let y = 30;
//     const z = 40;
// }

// console.log(x); // Output: 20
// console.log(y); // Output: Error
// console.log(z); // Output: Error

// let and const are block-scoped therefore they can't be accessed outside their block


// Question 10
// const name = "Arnav";

// var age = 20;
// var age = 25;

// if (true) {
//     var city = "Delhi";
//     var country = "India";
// }

// console.log(country);

// let score = 50;
// score = 80;


// Part d

// Question 11
// console.log(a); // Output: 10
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// var a = 10;
// let b = 20;
// const c = 30;
// var is hoisted and initialized as undefined which allows it to be accessed before declaration
// let and const are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ), throwing a ReferenceError if accessed before declaration.

// Question 12
// console.log(x);
// console.log(y);
// console.log(z);

// var x = "Hello";
// var y = "World";
// var z = "!";

// console.log(x + " " + y + z);


// Part e

// Question 1
// let whole_number = 1;
// console.log(whole_number);
// console.log(typeof(whole_number));
// let decimal_number = 2.5;
// console.log(decimal_number);
// console.log(typeof(decimal_number));
// let text = "Hello World!";
// console.log(text);
// console.log(typeof(text));
// let bool_value = true;
// console.log(bool_value);
// console.log(typeof(bool_value));

// Question 2
// let a;
// let b = null;
// console.log(a);
// console.log(typeof(a));
// console.log(b);
// console.log(typeof(b));
// undefined means a variable that is declared but not assigned a value
// null means a variable that is intentionally set no value by the developer

// Question 3
// let pos_inf = Infinity;
// console.log(pos_inf);
// console.log(typeof(pos_inf));
// let neg_inf = -Infinity;
// console.log(neg_inf);
// console.log(typeof(neg_inf));
// let not_a_number = NaN;
// console.log(not_a_number);
// console.log(typeof(not_a_number));
// let large_number_scientific = 2.5e3;
// console.log(large_number_scientific);
// console.log(typeof(large_number_scientific));
// let number_readable = 1_000_000;
// console.log(number_readable);
// console.log(typeof(number_readable));

// Question 4
// let string1 = 'Hello';
// let string2 = "World";
// let string3 = `Hello ${string2}`;
// console.log(string1);
// console.log(string2);
// console.log(string3);


// Part f

// Question 5
// let uniqueId = Symbol('id');
// let uniqueName = Symbol('id');
// console.log(Symbol('id') === Symbol('id')); // Output: false (Every Symbol creates a unique value)
// const studentData = {
//   [uniqueId]: 123,
//   [uniqueName]: "Abhijeet"
// };
// console.log(studentData[uniqueId]);
// console.log(studentData[uniqueName]);

// Question 6
// let a = 9007199254740991;
// console.log(a+1); // Output: 9007199254740992
// console.log(a+2); // Output: 9007199254740992
// console.log(a+3); // Output: 9007199254740994
// let b = 9007199254740991n;
// console.log(b+1n); // Output: 9007199254740992n
// console.log(b+2n); // Output: 9007199254740993n
// console.log(b+3n); // Output: 9007199254740994n
// BigInt handles very large numbers and doesn't lose precision whereas normal number loses precision

// Question 7
// let unique = Symbol("unique"); // Symbol
// let large_num = 123n; // BigInt
// let only_declared; // undefined
// let empty = null; // null


// Part g

// Question 8
// let a;
// let b = null;
// let c = 42;
// let d = "Hello";
// let e = true;
// let f = Symbol("key");
// let g = 123n;

// console.log(typeof a, a); // Output: undefined undefined
// console.log(typeof b, b); // Output: object null
// console.log(typeof c, c); // Output: number 42
// console.log(typeof d, d); // Output: string Hello
// console.log(typeof e, e); // Output: boolean true
// console.log(typeof f, f); // Output: symbol Symbol(key)
// console.log(typeof g, g); // Output: bigint 123n

// Question 9
// let num = 10;
// let text = "Hello";
// let flag = true;
// let empty;
// let nothing = null;
// let unique = Symbol("id");
// let big = 9007199254740991n;
// console.log(num, text, flag, empty, nothing, unique, big);

// Question 10
// a) Primitive data types can only hold a single value whereas Non-Primitive data types can hold multiple values.
// b) Numbers, Strings, Booleans, Undefined, Null, Symbol, and BigInt are called Primitive because they are the fundamental and basic data types.
// c) Object is an example of a Non-Primitive data type. It is considered Non-Primitive because it can hold hold multiple values and is built using primitive data types.


// Part H

// Question 1
// let student = {
//     name: "Riya",
//     age: 18,
//     isEnrolled: true,
// };
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.isEnrolled);

// Question 2
// let scores = [85, 92,78, 90];
// let mixedData = [51, "data", true, null];
// console.log(scores);
// console.log(mixedData);
// console.log(scores[0]);
// console.log(scores[scores.length-1]);

// Question 3
// function calculateArea(length, width){
//     return length*width;
// };
// console.log(calculateArea(2,4));
// console.log(calculateArea(19,32));

// Question 4
// let a = 42;
// let b = "Hello";
// let c = true;
// let d = null;
// let e = {name: "ABC", age: 18};
// let f = [1,2,3];
// let g = function abc(){};

// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);
// console.log(typeof e, e);
// console.log(typeof f, f);
// console.log(typeof g, g);


// Part I

// Question 5
// let userName; // Valid
// let 2ndPlace; // Invalid because variable name can't start with a number
// let _privateData; // Valid
// let $price; // Valid
// let my-age; // Invalid because variable name can't contain a hyphen
// let function; // Invalid because variable name can't be a reserved keyword
// let totalCount; // Valid
// let const; // Invalid because variable name can't be a reserved keyword

// Question 6
// const number1 = 10;
// const number2 = 5;
// let product = number1 * number2;
// const number3 = 100;

// Question 7
// let x;
// x = 10;
// let y = 134;
// const PI = 3.14;
// console.log(x);
// console.log(y);
// console.log(PI);


// Part J

// Question 8
// let person = { name: "Amit", age: 22 };
// let colors = ["red", "green", "blue"];
// function sayHi() {
//   return "Hi!";
// }
// let empty = null;
// console.log(typeof person); // object because person holds a object
// console.log(typeof colors); // object because the type of array is object
// console.log(typeof sayHi); // function
// console.log(typeof empty); // object because it is a known JS quirk that the type of null is object 
// console.log(person.name); // Amit
// console.log(colors[1]); // green
// console.log(sayHi()); // Hi!

// Question 9
// let student1 = { name: "Neha", age: 19 };
// let scores = [90, 85, 88];
// function greet(name) {
//   return "Hello " + name;
// }
// let maxScore = 100;
// maxScore = 95;
// console.log(student1.name);
// console.log(scores[0]);
// console.log(greet("Neha"));

// Question 10
// a) Object is a collection of key-value pairs, whereas Array is an ordered list of values.
// b) It is a known JavaScript quirk that typeof null returns "object". No, null is not really an object.
// c) It is recommended to keep array with a single data type so the code is easier to understand and less error‑prone.
// d) We should use const by default and use let when we know that the value will change later in the code.