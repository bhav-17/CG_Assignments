# Variables and Datatypes — Answers

## Part I: Variables

### Part a

**1.**
```javascript
let name = "Bhavya";
let age = 18;
let city = "Patna";
console.log(name, age, city);
```

**2.**
```javascript
let score = 50;
score = 80;
console.log(score);
```

**3.**
```javascript
const PI = 3.14;
console.log(PI);
```

**4.**
```javascript
var num1;
let num2;
console.log(num1, num2);

num1 = 10;
num2 = 20;
console.log(num1, num2);
```

### Part b

**5.**
```javascript
const studentName = "Bhavya";
let marks = 75;
const schoolName = "ABC School";

marks = 90;
console.log(studentName, marks, schoolName);
```

**6.**
```javascript
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
console.log(b);
console.log(c);
```

**Answer:** `var` is accessible outside the block. `let` and `const` are not.

**7.**
```javascript
var user = "Bhavya";
var user = "Rahul";
console.log(user);
```
`var` allows re-declaration.

```javascript
let user2 = "Bhavya";
let user2 = "Rahul";
```
`let` does not allow re-declaration in the same scope.

**8.**
```javascript
var a = 10;
let b = 20;
const c = 30;

a = 100;
b = 200;
// c = 300; // Error

console.log(a, b, c);
```

`var` and `let` allow re-assignment. `const` does not.

### Part c

**9.**
```javascript
var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z);
```

**Output:**
```text
20
ReferenceError
ReferenceError
```

`var` is accessible outside the block, while `let` and `const` are block-scoped.

**10.**
```javascript
const name = "Bhavya";

let age = 20;
age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
    console.log(country);
}

console.log(city);
console.log(age);

const score = 50;
console.log(score);
```

### Part d

**11.**
```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

**Output:**
```text
undefined
ReferenceError
ReferenceError
```

`var` is hoisted and initialized with `undefined`. `let` and `const` are in the Temporal Dead Zone until their declarations are reached.

**12.**
```javascript
var x = "Hello";
let y = "World";
const z = "!";

console.log(x);
console.log(y);
console.log(z);

console.log(x + " " + y + z);
```

## Primitive vs Non-Primitive Data Types

### Part e

**1.**
```javascript
let whole = 10;
let decimal = 10.5;
let text = "Hello";
let flag = true;

console.log(whole, typeof whole);
console.log(decimal, typeof decimal);
console.log(text, typeof text);
console.log(flag, typeof flag);
```

**2.**
```javascript
let a;
let b = null;

console.log(a, typeof a);
console.log(b, typeof b);
```

`undefined` means no value has been assigned. `null` means an intentional empty value.

**3.**
```javascript
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
let scientific = 2.5e3;
let largeNumber = 1_000_000;

console.log(positiveInfinity, typeof positiveInfinity);
console.log(negativeInfinity, typeof negativeInfinity);
console.log(notANumber, typeof notANumber);
console.log(scientific, typeof scientific);
console.log(largeNumber, typeof largeNumber);
```

**4.**
```javascript
let single = 'Hello';
let double = "World";
let name = "Bhavya";
let template = `Hello, ${name}`;

console.log(single);
console.log(double);
console.log(template);
```

### Part f

**5.**
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

let obj = {};
obj[id1] = "First";
obj[id2] = "Second";

console.log(obj[id1]);
console.log(obj[id2]);
```

**Output:**
```text
false
First
Second
```

Each Symbol is unique, even with the same description.

**6.**
```javascript
let num = 9007199254740991;

console.log(num + 1);
console.log(num + 2);
console.log(num + 3);

let big = 9007199254740991n;

console.log(big + 1n);
console.log(big + 2n);
console.log(big + 3n);
```

`Number` cannot safely represent integers beyond `Number.MAX_SAFE_INTEGER`. `BigInt` keeps large integers exact.

**7.**

- Unique identifier → `Symbol`
```javascript
let id = Symbol("id");
```

- Very large exact integer → `BigInt`
```javascript
let big = 9007199254740991n;
```

- Declared but not assigned → `undefined`
```javascript
let value;
```

- Intentional empty value → `null`
```javascript
let empty = null;
```

### Part g

**8.**

**Output:**
```text
undefined undefined
object null
number 42
string Hello
boolean true
symbol Symbol(key)
bigint 123n
```

**9.**
```javascript
let num = 10;
let text = "Hello";
let flag = true;
let empty;
let nothing = null;
let unique = Symbol("id");
let big = 9007199254740991n;

console.log(num, text, flag, empty, nothing, unique, big);
```

**10.**

**a)** Primitive types represent basic single values. Non-primitive types can contain collections or complex data.

**b)** Number, String, Boolean, Undefined, Null, Symbol, and BigInt are primitive because they represent basic values and are not objects.

**c)** An Object is non-primitive because it can store multiple key-value pairs and is handled by reference.

```javascript
let student = {
    name: "Bhavya",
    age: 18
};
```

---

# Updated Questions — Additional Answers

> The answers above are preserved as provided in the original file. The following sections contain answers for the questions added in the updated assignment.

## Part H: Non-Primitive Data Types — Additional Answers

### 1. Create an Object

```javascript
const student = {
    name: "Riya",
    age: 18,
    isEnrolled: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.isEnrolled);
```

### 2. Work with Arrays

```javascript
const scores = [85, 92, 78, 90];

const mixedData = [10, "Hello", true, null];

console.log(scores);
console.log(mixedData);

console.log(scores[0]);
console.log(scores[3]);
```

### 3. Declare and Call a Function

```javascript
function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(10, 5));
console.log(calculateArea(8, 4));
```

### 4. Check Types with `typeof`

```javascript
let numberValue = 10;
let stringValue = "Hello";
let booleanValue = true;
let nullValue = null;
let objectValue = { name: "Riya" };
let arrayValue = [1, 2, 3];

function myFunction() {
    return "Hello";
}

console.log(numberValue, typeof numberValue);
console.log(stringValue, typeof stringValue);
console.log(booleanValue, typeof booleanValue);
console.log(nullValue, typeof nullValue);
console.log(objectValue, typeof objectValue);
console.log(arrayValue, typeof arrayValue);
console.log(myFunction, typeof myFunction);
```

**Observation:**

- `typeof null` gives `"object"`.
- `typeof array` gives `"object"`.
- `typeof function` gives `"function"`.

---

## Part I: Naming Rules & Best Practices — Additional Answers

### 5. Valid vs Invalid Variable Names

```javascript
let userName;       // Valid
let 2ndPlace;       // Invalid
let _privateData;   // Valid
let $price;         // Valid
let my-age;         // Invalid
let function;       // Invalid
let totalCount;     // Valid
let const;          // Invalid
```

**Invalid names:**

- `2ndPlace` → cannot start with a number.
- `my-age` → hyphen `-` is not allowed in an identifier.
- `function` → reserved keyword.
- `const` → reserved keyword.

### 6. Apply Best Practices

```javascript
const rectangleLength = 10;
const rectangleWidth = 5;
const rectangleArea = rectangleLength * rectangleWidth;
const maximumScore = 100;

console.log(rectangleArea);
console.log(maximumScore);
```

### 7. Declaration & Assignment

```javascript
let age;
age = 18;

let name = "Bhavya";

const PI = 3.14;

console.log(age);
console.log(name);
console.log(PI);
```

---

## Part J: Prediction & Fixing — Additional Answers

### 8. Predict the Output

```javascript
let person = { name: "Amit", age: 22 };
let colors = ["red", "green", "blue"];

function sayHi() {
    return "Hi!";
}

let empty = null;

console.log(typeof person);
console.log(typeof colors);
console.log(typeof sayHi);
console.log(typeof empty);
console.log(person.name);
console.log(colors[1]);
console.log(sayHi());
```

**Output:**

```text
object
object
function
object
Amit
green
Hi!
```

### 9. Fix the Program

```javascript
let student = {
    name: "Neha",
    age: 19
};

let scores = [90, 85, 88];

function greet(name) {
    return "Hello " + name;
}

let maxScore = 100;
maxScore = 95;

console.log(student.name);
console.log(scores[0]);
console.log(greet("Neha"));
```

**Output:**

```text
Neha
90
Hello Neha
```

### 10. Concept Questions

**a) What is the main difference between an Object and an Array?**

An object stores data using named properties or keys:

```javascript
const student = {
    name: "Riya",
    age: 18
};
```

An array stores an ordered collection of values accessed using indexes:

```javascript
const scores = [85, 90, 95];
```

**b) Why does `typeof null` return `"object"`? Is `null` really an object?**

```javascript
console.log(typeof null);
```

Output:

```text
object
```

This is a historical behavior of JavaScript. `null` is actually a primitive value, not an object.

**c) Why is it recommended to keep arrays with a single data type?**

Keeping one data type makes an array easier to understand, process, and work with consistently.

Example:

```javascript
const scores = [85, 90, 95, 88];
```

This is clearer when the array represents only scores.

**d) When should you use `const` and when should you use `let`?**

Use `const` when the variable will not be reassigned:

```javascript
const name = "Bhavya";
```

Use `let` when the variable needs to be reassigned:

```javascript
let score = 50;
score = 80;
```
