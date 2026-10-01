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