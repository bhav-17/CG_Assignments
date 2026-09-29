# Assignment 2: Introduction to Variables and Datatypes

## Part I: Variables (`let`, `var`, `const`)

### Part a

**1. Personal Information**
```javascript
let name = "Bhavya";
let age = 18;
let city = "Patna";

console.log(name);
console.log(age);
console.log(city);
```

**2. Change the Score**
```javascript
let score = 50;
score = 80;

console.log(score);
```

**3. Constant Value**
```javascript
const PI = 3.14;

console.log(PI);
```

**4. Uninitialized Variables**
```javascript
var num1;
let num2;

console.log(num1);
console.log(num2);

num1 = 10;
num2 = 20;

console.log(num1);
console.log(num2);
```

### Part b

**5. Choose the Correct Keyword**
```javascript
const studentName = "Bhavya";
let marks = 75;
const schoolName = "ABC School";

marks = 90;

console.log(studentName);
console.log(marks);
console.log(schoolName);
```

**6. Understand Scope**
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

**Answer:** `var` can be accessed outside the block. `let` and `const` cannot because they are block-scoped.

**7. Test Re-declaration**
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

`let` does not allow re-declaration in the same scope and produces an error.

**8. Test Re-assignment**
```javascript
var a = 10;
let b = 20;
const c = 30;

a = 100;
b = 200;
c = 300;

console.log(a);
console.log(b);
console.log(c);
```

**Answer:** `var` and `let` allow re-assignment. `const` does not allow re-assignment and produces an error.

### Part c

**9. Predict and Explain**

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

`x` is `var`, so it is accessible outside the block and its value becomes `20`. `y` and `z` are block-scoped, so they cannot be accessed outside the `if` block.

**10. Fix the Program**

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

The errors were fixed by initializing `name`, changing the re-declaration of `age` to re-assignment, keeping `country` inside its block, and not re-assigning `score`.
