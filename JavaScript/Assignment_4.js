// A] if Statement

// 1. Check if a number is divisible by 5
{
    let num = 25;

    if (num % 5 === 0) {
        console.log("Divisible by 5");
    }
}

// 2. Check if a person’s age is greater than or equal to 60
{
    let age = 65;

    if (age >= 60) {
        console.log("Senior Citizen");
    }
}

// 3. Check if a given number is greater than 100
{
    let num = 150;

    if (num > 100) {
        console.log("Big Number");
    }
}

// 4. Check if the temperature is less than 10
{
    let temp = 5;

    if (temp < 10) {
        console.log("Very Cold");
    }
}

// 5. Check if a student scored full marks (100)
{
    let marks = 100;

    if (marks === 100) {
        console.log("Perfect Score");
    }
}

// 6. Check if a number is negative
{
    let num = -5;

    if (num < 0) {
        console.log("Negative Number");
    }
}

// 7. Check if a user has entered an empty string
{
    let str = "";

    if (str === "") {
        console.log("No input provided");
    }
}

// 8. Check if a given year is divisible by 100
{
    let year = 2000;

    if (year % 100 === 0) {
        console.log("Century Year");
    }
}

// 9. Check if a number is both positive and even
{
    let num = 14;

    if (num > 0 && num % 2 === 0) {
        console.log("Positive Even Number");
    }
}

// 10. Check if marks is >= 35 and <= 100
{
    let marks = 85;

    if (marks >= 35 && marks <= 100) {
        console.log("Valid Marks");
    }
}


// B] if...else Statement

// 1. Check whether a number is even or odd
{
    let num = 7;
    let result = "";

    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    console.log(result);
}

// 2. Check if eligible to vote
{
    let age = 20;
    let status = "";

    if (age >= 18) {
        status = "Eligible";
    } else {
        status = "Not Eligible";
    }

    console.log(status);
}

// 3. Check whether a number is positive or negative
{
    let num = -10;
    let type = "";

    if (num >= 0) {
        type = "Positive";
    } else {
        type = "Negative";
    }

    console.log(type);
}

// 4. Check if passed or failed
{
    let marks = 30;
    let result = "";

    if (marks >= 35) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    console.log(result);
}

// 5. Check whether a character is uppercase
{
    let char = "A";
    let isUpper = "";

    if (char >= "A" && char <= "Z") {
        isUpper = "Uppercase Letter";
    } else {
        isUpper = "Not an Uppercase Letter";
    }

    console.log(isUpper);
}

// 6. Check if a number is divisible by 3 or not
{
    let num = 9;
    let result = "";

    if (num % 3 === 0) {
        result = "Divisible by 3";
    } else {
        result = "Not divisible by 3";
    }

    console.log(result);
}

// 7. Password check
{
    let password = "admin";
    let message = "";

    if (password === "admin123") {
        message = "Login Successful";
    } else {
        message = "Incorrect Password";
    }

    console.log(message);
}

// 8. Leap year basic rule (divisible by 4)
{
    let year = 2024;
    let result = "";

    if (year % 4 === 0) {
        result = "Leap Year";
    } else {
        result = "Not a Leap Year";
    }

    console.log(result);
}

// 9. Greater of two numbers
{
    let a = 15;
    let b = 20;
    let greaterNum = 0;

    if (a > b) {
        greaterNum = a;
    } else {
        greaterNum = b;
    }

    console.log(greaterNum + " is greater");
}

// 10. Positive, negative, or zero using only if...else
{
    let num = 0;
    let result = "";

    if (num > 0) {
        result = "Positive";
    } else {
        if (num < 0) {
            result = "Negative";
        } else {
            result = "Zero";
        }
    }

    console.log(result);
}


// C] if...else if...else Statement

// 1. Month to Season
{
    let month = 4;
    let season = "";

    if (month === 12 || month === 1 || month === 2) {
        season = "Winter";
    } else if (month >= 3 && month <= 5) {
        season = "Summer";
    } else if (month >= 6 && month <= 8) {
        season = "Monsoon";
    } else if (month >= 9 && month <= 11) {
        season = "Autumn";
    } else {
        season = "Invalid Month";
    }

    console.log(season);
}

// 2. Tax calculator
{
    let income = 600000;
    let tax = 0;

    if (income < 300000) {
        tax = 0;
    } else if (income >= 300000 && income <= 700000) {
        tax = income * 0.05;
    } else if (income > 700000 && income <= 1000000) {
        tax = income * 0.10;
    } else {
        tax = income * 0.15;
    }

    console.log("Tax Amount: " + tax);
}

// 3. Student's score check
{
    let score = 85;
    let grade = "";

    if (score >= 90) {
        grade = "Outstanding";
    } else if (score >= 70) {
        grade = "Good";
    } else if (score >= 40) {
        grade = "Average";
    } else {
        grade = "Needs Improvement";
    }

    console.log(grade);
}

// 4. Vehicle speed
{
    let speed = 60;
    let status = "";

    if (speed < 40) {
        status = "Slow";
    } else if (speed <= 80) {
        status = "Normal";
    } else {
        status = "Fast";
    }

    console.log(status);
}

// 5. Person's height
{
    let height = 165;
    let category = "";

    if (height < 150) {
        category = "Short";
    } else if (height <= 170) {
        category = "Average";
    } else {
        category = "Tall";
    }

    console.log(category);
}

// 6. Day number Weekday/Weekend
{
    let day = 6;
    let dayType = "";

    if (day >= 1 && day <= 5) {
        dayType = "Weekday";
    } else if (day === 6 || day === 7) {
        dayType = "Weekend";
    } else {
        dayType = "Invalid day";
    }

    console.log(dayType);
}

// 7. Electricity bill
{
    let units = 100;
    let bill = 0;

    if (units <= 50) {
        bill = units * 2;
    } else if (units <= 150) {
        bill = (50 * 2) + ((units - 50) * 4);
    } else {
        bill = (50 * 2) + (100 * 4) + ((units - 150) * 6);
    }

    console.log("Total Bill: " + bill);
}

// 8. Attendance percentage
{
    let attendance = 80;
    let status = "";

    if (attendance >= 90) {
        status = "Excellent";
    } else if (attendance >= 75) {
        status = "Good";
    } else if (attendance >= 50) {
        status = "Satisfactory";
    } else {
        status = "Poor";
    }

    console.log(status);
}

// 9. Highest of three marks
{
    let m1 = 80;
    let m2 = 95;
    let m3 = 85;
    let highest = 0;

    if (m1 >= m2 && m1 >= m3) {
        highest = m1;
    } else if (m2 >= m1 && m2 >= m3) {
        highest = m2;
    } else {
        highest = m3;
    }

    console.log("Highest: " + highest);
}

// 10. Check positive/negative/even/odd/zero
{
    let num = -4;
    let result = "";

    if (num === 0) {
        result = "Zero";
    } else if (num > 0 && num % 2 === 0) {
        result = "Positive Even";
    } else if (num > 0 && num % 2 !== 0) {
        result = "Positive Odd";
    } else if (num < 0 && num % 2 === 0) {
        result = "Negative Even";
    } else {
        result = "Negative Odd";
    }

    console.log(result);
}


// D] Nested if Statement

// 1. >10 and divisible by 3
{
    let num = 15;

    if (num > 10) {
        if (num % 3 === 0) {
            console.log("Greater than 10 and divisible by 3");
        }
    }
}

// 2. 18+ and voter ID
{
    let age = 20;
    let hasVoterId = true;

    if (age >= 18) {
        if (hasVoterId) {
            console.log("Can Vote");
        }
    }
}

// 3. Marks >= 40 and >= 80
{
    let marks = 85;

    if (marks >= 40) {
        if (marks >= 80) {
            console.log("Passed with Distinction");
        }
    }
}

// 4. ATM System
{
    let enteredPin = 1234;
    let correctPin = 1234;
    let balance = 5000;
    let withdraw = 2000;

    if (enteredPin === correctPin) {
        if (balance >= withdraw) {
            console.log("Withdrawal Successful");
        }
    }
}

// 5. Leap year exact nested check
{
    let year = 2000;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap Year");
            }
        }
    }
}

// 6. Valid Email check
{
    let email = "user@domain.com";

    if (email.includes("@")) {
        if (email.endsWith(".com")) {
            if (email.length > 10) {
                console.log("Valid Email");
            }
        }
    }
}

// 7. Online shopping discount
{
    let total = 1200;
    let isPremium = true;
    let finalAmount = total;

    if (total >= 1000) {
        if (isPremium) {
            finalAmount = total * 0.80; // 20% off
        } else {
            finalAmount = total * 0.90; // 10% off
        }
    }

    console.log("Final Amount: " + finalAmount);
}

// 8. Positive -> Even -> Divisible by 4
{
    let num = 16;

    if (num > 0) {
        if (num % 2 === 0) {
            if (num % 4 === 0) {
                console.log("Positive Even and Divisible by 4");
            }
        }
    }
}

// 9. Job eligibility
{
    let age = 25;
    let hasDegree = true;
    let exp = 3;

    if (age >= 21 && age <= 30) {
        if (hasDegree) {
            if (exp >= 2) {
                console.log("Eligible for Interview");
            }
        }
    }
}

// 10. Exam eligibility
{
    let isPresent = true;
    let internalMarks = 32;
    let externalMarks = 40;

    if (isPresent) {
        if (internalMarks >= 30) {
            if (externalMarks >= 35) {
                console.log("Eligible for Final Exam");
            }
        }
    }
}


// E] switch Statement

// 1. Days in a month
{
    let month = 2;
    let result = "";

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            result = "31 days";
            break;
        case 4: case 6: case 9: case 11:
            result = "30 days";
            break;
        case 2:
            result = "28 days";
            break;
        default:
            result = "Invalid month";
    }

    console.log(result);
}

// 2. Vowel or consonant
{
    let char = "e";
    let result = "";

    switch (char) {
        case "a": case "e": case "i": case "o": case "u":
        case "A": case "E": case "I": case "O": case "U":
            result = "Vowel";
            break;
        default:
            result = "Consonant";
    }

    console.log(result);
}

// 3. Season using multiple cases
{
    let num = 3;
    let result = "";

    switch (num) {
        case 1:
        case 2:
            result = "Winter";
            break;
        case 3:
        case 4:
            result = "Summer";
            break;
    }

    console.log(result);
}

// 4. Class based on marks
{
    let marks = 65;
    let result = "";

    switch (true) {
        case (marks >= 75):
            result = "Distinction";
            break;
        case (marks >= 60):
            result = "1st class";
            break;
        case (marks >= 50):
            result = "2nd class";
            break;
        case (marks >= 35):
            result = "3rd class";
            break;
        default:
            result = "Failed";
    }

    console.log(result);
}

// 5. Nested switch
{
    let role = "admin";
    let action = "create";
    let result = "";

    switch (role) {
        case "admin":
            switch (action) {
                case "create": result = "Admin Create"; break;
                case "edit": result = "Admin Edit"; break;
                case "delete": result = "Admin Delete"; break;
            }
            break;
        case "user":
            result = "Limited Access";
            break;
    }

    console.log(result);
}

// 6. Predict, explain, and correct
{
    let fruit = "mango";
    let result = "";

    switch (fruit) {
        case "apple":
            result = "Apple is red";
            break;
        case "mango":
            result = "Mango is yellow";
            break;
        case "banana":
            result = "Banana is yellow";
            break;
        default:
            result = "Unknown fruit";
            break;
    }
}

// 7. Identify Different Data Types
let value = "0";
switch (value) {
    case 0:
        console.log("Number Zero");
        break;
    case "0":
        console.log("String Zero");
        break;
    case false:
        console.log("Boolean False");
        break;
    case null:
        console.log("Null");
        break;
    case undefined:
        console.log("Undefined");
        break;
    default:
        console.log("Other Value");
}

// 8. Calculator
let a = 10;
let b = 3;
let operator = "**";
switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b !== 0) {
            console.log(a / b);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    case "%":
        if (b !== 0) {
            console.log(a % b);
        } else {
            console.log("Cannot calculate remainder with zero");
        }
        break;
    case "**":
        console.log(a ** b);
        break;
    default:
        console.log("Invalid Operator");
}

// 9. Date Range Using switch(true)
let date = 15;
switch (true) {
    case date >= 1 && date <= 10:
        console.log("Beginning of the month");
        break;
    case date >= 11 && date <= 20:
        console.log("Middle of the month");
        break;
    case date >= 21 && date <= 31:
        console.log("End of the month");
        break;
    default:
        console.log("Invalid Date");
}

// 10. Online Food Ordering System
let category = "veg";
let item = "paneer";
let size = "full";
let price = 0;
switch (category) {
    case "veg":
        switch (item) {
            case "paneer":
                switch (size) {
                    case "half":
                        price = 150;
                        break;
                    case "full":
                        price = 280;
                        break;
                    default:
                        console.log("Invalid Size");
                }
                break;
            case "pizza":
                switch (size) {
                    case "half":
                        price = 200;
                        break;
                    case "full":
                        price = 350;
                        break;
                    default:
                        console.log("Invalid Size");
                }
                break;
            default:
                console.log("Invalid Veg Item");
        }
        break;
    case "nonveg":
        switch (item) {
            case "chicken":
                switch (size) {
                    case "half":
                        price = 220;
                        break;
                    case "full":
                        price = 400;
                        break;
                    default:
                        console.log("Invalid Size");
                }
                break;
            case "biryani":
                switch (size) {
                    case "half":
                        price = 180;
                        break;
                    case "full":
                        price = 320;
                        break;
                    default:
                        console.log("Invalid Size");
                }
                break;
            default:
                console.log("Invalid Nonveg Item");
        }
        break;
    default:
        console.log("Invalid Category");
}
if (price > 0) {
    console.log("Category:", category);
    console.log("Item:", item);
    console.log("Size:", size);
    console.log("Price: ₹" + price);
}

// F] Ternary Operator

// 1. Divisible by 7
let num = 21;
let result;

if (num % 7 === 0) {
    result = "Divisible by 7";
} else {
    result = "Not Divisible by 7";
}
console.log(result);

// 2. Temperature
let temperature = 32;
let weather;

if (temperature >= 30) {
    weather = "Hot Day";
} else {
    weather = "Pleasant Day";
}
console.log(weather);

// 3. Empty String
let text = "";
let stringResult;

if (text === "") {
    stringResult = "Empty String";
} else {
    stringResult = "String has content";
}
console.log(stringResult);

// 4. Age Classification
let age = 16;

if (age < 13) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// 5. Greatest of Three Numbers
let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}

// 6. Marks Classification
let marks = 68;

if (marks >= 75) {
    console.log("Distinction");
} else if (marks >= 60) {
    console.log("First Class");
} else if (marks >= 50) {
    console.log("Second Class");
} else if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 7. Number Classification
let number = -8;

if (number === 0) {
    console.log("Zero");
} else if (number > 0 && number % 2 === 0) {
    console.log("Positive Even");
} else if (number > 0) {
    console.log("Positive Odd");
} else if (number % 2 === 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}

// 8. Leap Year
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}

// 9. Role and Action
let role = "admin";
let action = "delete";

if (role === "admin") {
    if (action === "delete") {
        console.log("Admin Delete");
    } else if (action === "edit") {
        console.log("Admin Edit");
    } else {
        console.log("Admin Other");
    }
} else if (role === "user") {
    if (action === "view") {
        console.log("User View");
    } else {
        console.log("User Restricted");
    }
} else {
    console.log("Invalid Role");
}

// 10. Discount and Final Amount
let cartTotal = 6000;
let discountPercentage;

if (cartTotal >= 5000) {
    discountPercentage = 20;
} else if (cartTotal >= 2000) {
    discountPercentage = 10;
} else if (cartTotal >= 1000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

let finalAmount = cartTotal - (cartTotal * discountPercentage / 100);

console.log("Discount:", discountPercentage + "%");
console.log("Final Amount: ₹" + finalAmount);