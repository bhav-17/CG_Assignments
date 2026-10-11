# Section A: Short Answer Questions

Q1. What is JavaScript?
A1. JavaScript is a programming language used to create interactive websites and applications.

Q2. Who created JavaScript and in which year?
A2. JavaScript was created by Brendan Eich in 1995.

Q3. What was the original name of JavaScript?
A3. The original name of JavaScript was Mocha.

Q4. Is JavaScript the same as Java? Give one major difference.
A4. JavaScript is not the same as Java. JavaScript is dynamically typed whereas Java is statically typed.

Q5. What does it mean when we say JavaScript is a high-level programming language?
A5. When we say JavaScript is a high-level programming language we mean that JavaScript uses simple, human-readable instructions.

Q6. Is JavaScript a compiled language or an interpreted language? Explain briefly.
A6. JavaScript is an interpreted language. JavaScript code is executed by a JavaScript engine while the program runs. 

Q7. Name the JavaScript engines used by the following browsers: Google Chrome, Mozilla Firefox, Apple Safari
A7. Google Chrome - V8
	Mozilla Firefox - SpiderMonkey
	Apple Safari - JavaScriptCore

Q8. What is Dynamic Typing in JavaScript?
A8. Dynamic Typing in JavaScript means that we do not need to declare the data type of a variable, JavaScript identifies the type while the program is running.

Q9. What is the main difference between a static website and a dynamic website?
A9. A static website has fixed content that changes only when the developer edits it, whereas a dynamic website can change its content based on users, data, or interactions.

Q10. Name the three pillars of Front-end Web Development and write one line about each.
A10. The three pillars of Front-end Web Development are as follows:
	1. HTML - It is used to create and structure the webpage.
	2. CSS - It is used to style the webpage and make the content look good.
	3. JavaScript - It is used to add functionality and behaviour in our webpage.

Q11. What is the difference between Frontend and Backend?
A11. 1. Frontend runs on user's browser whereas backend runs on remote server.
	 2. Frontend is responsible for what the user sees and interacts with whereas backend is responsible for business logic, data storage and security.
	 3. HTML, CSS, JavaScript are the technologies used for frontend whereas Node.js, Express.js, databases are technologies used for backend.

Q12. What is Node.js?
A12. Node.js is a runtime environment for JavaScript that allows JavaScript to run outside the browser. Node.js allows developers to create servers using JavaScript therefore allowing JavaScript to be used for backend web development.

Q13. Explain ECMAScript. What is its relation with JavaScript?
A13. ECMAScript is a standard or rulebook that defines how the JavaScript language should work.
JavaScript is a programming language that follows the ECMAScript standard. JavaScript engines use this standard to understand and execute JavaScript code.

# Section B: True or False (Write True or False. If False, correct the statement)

1. JavaScript is a statically typed language.
=> False. JavaScript is a dynamically typed language.

2. JavaScript can only run inside the browser.
=> False. JavaScript can run on multiple platforms.

3. HTML is responsible for the behaviour of a webpage.
=> False. JavaScript is responsible for the behaviour of a webpage.

4. Node.js allows JavaScript to run outside the browser.
=> True

5. JavaScript is case-insensitive.
=> False. JavaScript is case-sensitive.

6. let name and let Name are the same variable.
=> False. name and Name are different variable names.

7. ECMAScript is a programming language.
=> False. ECMAScript is not a programming language.

8. React, Angular, and Vue.js are used for Backend development.
=> False. React, Angular, and Vue.js are used for Frontend development.

# Section C: Fill in the Blanks

1. JavaScript was created by Brendan Eich in the year 1995.

2. The three technologies used in Front-end development are HTML, CSS, and JavaScript.

3. JavaScript engines: Chrome uses V8, Firefox uses SpiderMonkey.

4. In the restaurant analogy: Customer = User, Waiter = Server, Chef = Database.

5. JavaScript file extension is .js

# Section D: Conceptual Questions

Q14. Differentiate between a static website and a dynamic website. Give one real-world example of each.
A14. 1. In a static website, content is fixed and changes only when the developer edits it, whereas in a dynamic website, content can change based on users, data, or interactions.
	 2. A static website usually uses HTML and CSS, whereas a dynamic website often uses a backend and database.
	 3. Example: A personal portfolio is a static website, whereas YouTube is a dynamic website.

Q15. Explain any two features of JavaScript that make it suitable for creating interactive web pages.
A15. Two features of JavaScript that make it suitable for creating interactive web pages are:
	1. Dynamic Typing - JavaScript automatically identifies the data type of a value when the program runs.
	2. Event-Driven - JavaScript can respond to events caused by the user or browser.

Q16. List any four areas (apart from web browsers) where JavaScript is used today. Mention one popular framework/library for each (if applicable).
A16. JavaScript is used in:
	1. Mobile apps - React Native
	2. Desktop apps - Electron
	3. Games - Three.js
	4. Data visualization - Chart.js

Q17. What is the difference between writing JavaScript code inside an HTML file using <script> tag, and in an external .js file? Mention two advantages of using an external JavaScript file.
A17. JavaScript can be written inside an HTML file using the <script> tag or in a separate external .js file linked to the HTML file.
Advantages of using an external JavaScript file:
	1. External JavaScript keeps the code organized and easy to maintain.
	2. The same JavaScript file can be reused on multiple HTML pages.

Q18. Explain the difference between Frontend and Backend using the restaurant analogy in your own words.
A18. In a restaurant, the frontend is like the customer, and the dining area itself is where users interact with. In a restaurant, the backend is like the waiter and kitchen, which process the request and do all the work.

Q19. Why should a beginner learn JavaScript? Write at least 4 points.
A19. A beginner should learn JavaScript because of the following reasons:
	1. It makes websites interactive.
	2. It is useful for frontend and backend development.
	3. Beginners can quickly see the results of their code.
	4. It has a large developer community.

# Section E: Code-Based Questions

Q20. Predict the output of the following code and explain why:
    let value = 25;
    console.log(typeof value);
    value = "JavaScript";
    console.log(typeof value);
    value = false;
    console.log(typeof value);
A20. number
     string
     boolean

JavaScript is dynamically typed, so the type of a variable can change while the program is running.

Q21. Write a simple HTML + JavaScript program that displays an alert box with the message "Welcome to JavaScript!" when a button is clicked.
A21. <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <button onclick="clickMsg()">Click Me!</button>

        <script>
            function clickMsg() {
                alert("Welcome to JavaScript!")
            }
        </script>
    </body>
    </html>

Q22. Write JavaScript code to demonstrate event-driven programming.
When a user clicks a button with id "myBtn", the text of a paragraph with id "demo" should change to "Button was clicked!".
A22. <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <p id="demo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus commodi quaerat et quis ipsam ad qui non aliquid, quos asperiores nostrum deserunt.</p>
        <button id="myBtn">Click Me!</button>

        <script>
            let myBtn = document.getElementById("myBtn");
            let demo = document.getElementById("demo");
            myBtn.addEventListener("click", function(){
                demo.innerText = "Button was clicked!";
            });
        </script>
    </body>
    </html>

# Section F: Practical / Application Based

Q23. Create a complete web page (HTML + JavaScript) that includes the following:
1. A heading: "My First JavaScript Page"
2. A button labeled "Click Me"
3. When the button is clicked:
    Show an alert: "Hello, B.Tech Student!"
    Change the background color of the page to light blue
4. Also print "JavaScript is running successfully!" in the browser console.
Write the complete code (you can use Inline or External JavaScript).
A23. <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body id="body">
        <h1>My First JavaScript Page</h1>
        <button id="myBtn" onclick="handleClick()">Click Me</button>

        <script>
            function handleClick(){
                alert("Hello, B.Tech Student!");
                document.getElementById("body").style.backgroundColor = "lightblue";
            };
            console.log("JavaScript is running successfully!");
        </script>
    </body>
    </html>

# Section G: Higher Order Thinking

Q24. JavaScript was originally created only for browsers. Today it is used in frontend, backend, mobile apps, desktop apps, and even AI/ML.
In your own words, explain why JavaScript became so popular and multipurpose. Mention the role of Node.js and ECMAScript updates in this growth.
A24. JavaScript became popular because it can be used for frontend, backend, mobile, desktop, and other applications, making it a multipurpose language.
     Node.js allowed JavaScript to run outside the browser, making it possible to build servers and backend applications using JavaScript.
     ECMAScript updates introduced new features to JavaScript over time, such as let, const, arrow functions, and classes, helping the language continue to grow.