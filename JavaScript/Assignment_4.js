// A] if Statement

// 1. Check if a number is divisible by 5
function checkDivisibleBy5(num) {
    if (num % 5 === 0) {
        console.log("Divisible by 5");
    }
}

// 2. Check if a person’s age is >= 60
function checkSeniorCitizen(age) {
    if (age >= 60) {
        console.log("Senior Citizen");
    }
}

// 3. Check if a given number is > 100
function checkBigNumber(num) {
    if (num > 100) {
        console.log("Big Number");
    }
}

// 4. Check if temperature is < 10
function checkTemperature(temp) {
    if (temp < 10) {
        console.log("Very Cold");
    }
}

// 5. Check if student scored full marks
function checkPerfectScore(marks) {
    if (marks === 100) {
        console.log("Perfect Score");
    }
}

// 6. Check if a number is negative
function checkNegative(num) {
    if (num < 0) {
        console.log("Negative Number");
    }
}

// 7. Check if user entered an empty string
function checkEmptyString(str) {
    if (str === "") {
        console.log("No input provided");
    }
}

// 8. Check if year is divisible by 100
function checkCenturyYear(year) {
    if (year % 100 === 0) {
        console.log("Century Year");
    }
}

// 9. Check if number is positive and even using single if
function checkPositiveEven(num) {
    if (num > 0 && num % 2 === 0) {
        console.log("Positive Even Number");
    }
}

// 10. Check if marks are >= 35 and <= 100
function checkValidMarks(marks) {
    if (marks >= 35 && marks <= 100) {
        console.log("Valid Marks");
    }
}


// B] if...else Statement

// 1. Check whether a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// 2. Check if eligible to vote (age ≥ 18)
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible");
    } else {
        console.log("Not Eligible");
    }
}

// 3. Check whether a number is positive or negative
function checkPositiveOrNegative(num) {
    if (num >= 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

// 4. Check if student has passed or failed
function checkPassFail(marks) {
    if (marks >= 35) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

// 5. Check whether a given character is uppercase
function checkUppercase(char) {
    if (char >= 'A' && char <= 'Z') {
        console.log("Uppercase Letter");
    } else {
        console.log("Not an Uppercase Letter");
    }
}

// 6. Check if a number is divisible by 3 or not
function checkDivisibleBy3(num) {
    if (num % 3 === 0) {
        console.log("Divisible by 3");
    } else {
        console.log("Not divisible by 3");
    }
}

// 7. Check password authentication
function checkPassword(password) {
    if (password === "admin123") {
        console.log("Login Successful");
    } else {
        console.log("Incorrect Password");
    }
}

// 8. Check leap year using basic rule
function checkBasicLeapYear(year) {
    if (year % 4 === 0) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}

// 9. Find greater of two numbers
function findGreater(a, b) {
    if (a > b) {
        console.log(a + " is greater");
    } else {
        console.log(b + " is greater");
    }
}

// 10. Check positive, negative, or zero using only if...else
function checkPosNegZero(num) {
    if (num > 0) {
        console.log("Positive");
    } else {
        if (num < 0) {
            console.log("Negative");
        } else {
            console.log("Zero");
        }
    }
}


// C] if...else if...else Statement

// 1. Month to Season
function getSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        console.log("Winter");
    } else if (month >= 3 && month <= 5) {
        console.log("Summer");
    } else if (month >= 6 && month <= 8) {
        console.log("Monsoon");
    } else if (month >= 9 && month <= 11) {
        console.log("Autumn");
    } else {
        console.log("Invalid month");
    }
}

// 2. Simple tax calculator
function calculateTax(income) {
    let tax = 0;
    if (income < 300000) {
        tax = 0;
    } else if (income >= 300000 && income <= 700000) {
        tax = income * 0.05;
    } else if (income > 700000 && income <= 1000000) {
        tax = income * 0.10;
    } else if (income > 1000000) {
        tax = income * 0.15;
    }
    console.log("Tax Amount: ₹" + tax);
}

// 3. Student score grading
function gradeStudent(score) {
    if (score >= 90) {
        console.log("Outstanding");
    } else if (score >= 70) {
        console.log("Good");
    } else if (score >= 40) {
        console.log("Average");
    } else {
        console.log("Needs Improvement");
    }
}

// 4. Vehicle speed
function checkSpeed(speed) {
    if (speed < 40) {
        console.log("Slow");
    } else if (speed >= 40 && speed <= 80) {
        console.log("Normal");
    } else {
        console.log("Fast");
    }
}

// 5. Check person's height
function checkHeight(heightCm) {
    if (heightCm < 150) {
        console.log("Short");
    } else if (heightCm >= 150 && heightCm <= 170) {
        console.log("Average");
    } else {
        console.log("Tall");
    }
}

// 6. Check Weekday or Weekend
function checkDay(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 5) {
        console.log("Weekday");
    } else if (dayNumber === 6 || dayNumber === 7) {
        console.log("Weekend");
    } else {
        console.log("Invalid day");
    }
}

// 7. Calculate electricity bill (tiered calculation)
function calculateElectricityBill(units) {
    let bill = 0;
    if (units <= 50) {
        bill = units * 2;
    } else if (units <= 150) {
        bill = (50 * 2) + ((units - 50) * 4);
    } else {
        bill = (50 * 2) + (100 * 4) + ((units - 150) * 6);
    }
    console.log("Total Bill: ₹" + bill);
}

// 8. Attendance percentage
function checkAttendance(percentage) {
    if (percentage >= 90) {
        console.log("Excellent");
    } else if (percentage >= 75) {
        console.log("Good");
    } else if (percentage >= 50) {
        console.log("Satisfactory");
    } else {
        console.log("Poor");
    }
}

// 9. Find highest of three marks
function findHighestMark(m1, m2, m3) {
    if (m1 >= m2 && m1 >= m3) {
        console.log("Highest mark is " + m1);
    } else if (m2 >= m1 && m2 >= m3) {
        console.log("Highest mark is " + m2);
    } else {
        console.log("Highest mark is " + m3);
    }
}

// 10. Check specific number state
function checkNumberState(num) {
    if (num > 0 && num % 2 === 0) {
        console.log("Positive Even");
    } else if (num > 0 && num % 2 !== 0) {
        console.log("Positive Odd");
    } else if (num < 0 && num % 2 === 0) {
        console.log("Negative Even");
    } else if (num < 0 && num % 2 !== 0) {
        console.log("Negative Odd");
    } else {
        console.log("Zero");
    }
}


// D] Nested if Statement

// 1. > 10 and divisible by 3
function nestedCheck1(num) {
    if (num > 10) {
        if (num % 3 === 0) {
            console.log("Greater than 10 and divisible by 3");
        }
    }
}

// 2. >= 18 and has voter ID
function checkVoterEligibility(age, hasVoterId) {
    if (age >= 18) {
        if (hasVoterId) {
            console.log("Can Vote");
        }
    }
}

// 3. Score >= 40 and >= 80 for distinction
function checkDistinction(score) {
    if (score >= 40) {
        if (score >= 80) {
            console.log("Passed with Distinction");
        } else {
            console.log("Passed");
        }
    }
}

// 4. Simple ATM system
function atmSystem(enteredPin, actualPin, balance, withdrawalAmount) {
    if (enteredPin === actualPin) {
        if (balance >= withdrawalAmount) {
            console.log("Withdrawal Successful");
        } else {
            console.log("Insufficient Balance");
        }
    } else {
        console.log("Incorrect PIN");
    }
}

// 5. Strict Leap Year Check
function checkStrictLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is a Leap Year");
            } else {
                console.log(year + " is Not a Leap Year");
            }
        } else {
            console.log(year + " is a Leap Year");
        }
    } else {
        console.log(year + " is Not a Leap Year");
    }
}

// 6. Nested Email Validation
function validateEmail(email) {
    if (email.includes("@")) {
        if (email.endsWith(".com")) {
            if (email.length > 10) {
                console.log("Valid Email");
            }
        }
    }
}

// 7. Online Shopping Discount
function calculateShoppingDiscount(cartTotal, isPremium) {
    if (cartTotal >= 1000) {
        let finalAmount;
        if (isPremium) {
            finalAmount = cartTotal - (cartTotal * 0.20); // 20% discount
        } else {
            finalAmount = cartTotal - (cartTotal * 0.10); // 10% discount
        }
        console.log("Final Amount: ₹" + finalAmount);
    } else {
        console.log("Final Amount: ₹" + cartTotal);
    }
}

// 8. Positive, Even, Divisible by 4
function nestedCheck2(num) {
    if (num > 0) {
        if (num % 2 === 0) {
            if (num % 4 === 0) {
                console.log("Positive Even and Divisible by 4");
            }
        }
    }
}

// 9. Job eligibility checker
function checkJobEligibility(age, hasDegree, experienceYears) {
    if (age >= 21 && age <= 30) {
        if (hasDegree) {
            if (experienceYears >= 2) {
                console.log("Eligible for Interview");
            }
        }
    }
}

// 10. Exam eligibility checker
function checkExamEligibility(isPresent, internalMarks, externalMarks) {
    if (isPresent) {
        if (internalMarks >= 30) {
            if (externalMarks >= 35) {
                console.log("Eligible for Final Exam");
            }
        }
    }
}