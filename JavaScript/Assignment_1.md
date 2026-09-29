# Assignment 1: Introduction to JavaScript
## Section A

**Q1.** JavaScript is a high-level programming language used to add interactivity to web pages.

**Q2.** Brendan Eich, 1995.

**Q3.** Mocha.

**Q4.** No. JavaScript and Java are different languages; JavaScript is dynamically typed, while Java is statically typed.

**Q5.** A high-level language is easy for humans to read and hides low-level details.

**Q6.** JavaScript was traditionally interpreted, but modern engines use JIT compilation.

**Q7.**
- Chrome — V8
- Firefox — SpiderMonkey
- Safari — JavaScriptCore

**Q8.** Dynamic typing means a variable can store different data types at different times.

**Q9.** Static websites have mostly fixed content; dynamic websites can change content based on data or interaction.

**Q10.**
- HTML — Structure
- CSS — Styling
- JavaScript — Behaviour

**Q11.** Frontend is what users see and interact with; backend handles server-side logic and data.

**Q12.** Node.js is a runtime that allows JavaScript to run outside the browser.

**Q13.** ECMAScript is the standard/specification that defines JavaScript.

## Section B

1. False — JavaScript is dynamically typed.
2. False — JavaScript can run outside browsers.
3. False — JavaScript handles webpage behaviour.
4. True.
5. False — JavaScript is case-sensitive.
6. False — `name` and `Name` are different.
7. False — ECMAScript is a specification.
8. False — They are primarily frontend technologies.

## Section C

1. Brendan Eich, 1995
2. HTML, CSS, JavaScript
3. V8, SpiderMonkey
4. Frontend/User, API, Backend
5. `.js`

## Section D

**Q14.** Static websites have fixed content, while dynamic websites can change content. Example: portfolio — static; Amazon — dynamic.

**Q15.**
- Event handling responds to user actions.
- DOM manipulation changes webpage content and elements.

**Q16.**
- Backend — Node.js
- Mobile — React Native
- Desktop — Electron
- Games — Phaser

**Q17.** Internal JavaScript is written inside `<script>` in HTML; external JavaScript is stored in a `.js` file. External JS is reusable and keeps HTML cleaner.

**Q18.** Frontend is like the restaurant's dining area/menu, while backend is like the kitchen. The API is like the waiter carrying requests between them.

**Q19.**
1. Widely used in web development.
2. Makes websites interactive.
3. Works for frontend and backend.
4. Has a large ecosystem.

## Section E

**Q20.**
```text
number
string
boolean
```

**Q21.**
```html
<!DOCTYPE html>
<html>
<body>
<button onclick="alert('Welcome to JavaScript!')">Click Me</button>
</body>
</html>
```

**Q22.**
```html
<button id="myBtn">Click Me</button>
<p id="demo">Original Text</p>

<script>
document.getElementById("myBtn").onclick = function() {
    document.getElementById("demo").textContent = "Button was clicked!";
};
</script>
```

## Section F

**Q23.**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript Page</title>
</head>
<body>

<h1>My First JavaScript Page</h1>
<button id="clickMe">Click Me</button>

<script>
console.log("JavaScript is running successfully!");

document.getElementById("clickMe").onclick = function() {
    alert("Hello, B.Tech Student!");
    document.body.style.backgroundColor = "lightblue";
};
</script>

</body>
</html>
```

## Section G

**Q24.** JavaScript became popular because it works in browsers and has a large ecosystem. Node.js enabled JavaScript to run outside browsers for backend development. ECMAScript updates added new features and improvements, helping JavaScript expand into mobile, desktop, and other areas.
