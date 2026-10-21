//  PART-A

//  Q1. Counting Numbers
//  for (let i = 1; i <= 15; i++) {
//      console.log(i);
//  }

//  Q2. Even Numbers
//  for (let i = 2; i <= 40; i += 2) {
//      console.log(i);
//  }

//  Q3. Odd Numbers
//  for (let i = 1; i <= 35; i += 2) {
//      console.log(i);
//  }

//  Q4. Saving Money
//  let total = 0;
//  for (let i = 1; i <= 10; i++) {
//      total += i * 10;
//  }
//  console.log("Total savings after 10 days: ₹" + total);

//  Q5. Multiplication Table
//  for (let i = 1; i <= 10; i++) {
//      console.log("12 x " + i + " = " + (12 * i));
//  }

//  Q6. Daily Water Intake
//  let glasses = 0;
//  for (let day = 1; day <= 7; day++) {
//      glasses += 3;
//      console.log("Day " + day + ": " + glasses + " glasses");
//  }

//  Q7. Shopping Calculation
//  for (let i = 1; i <= 10; i++) {
//      if (i === 1) {
//          console.log(i + " chocolate = ₹" + (i * 15));
//      } else {
//          console.log(i + " chocolates = ₹" + (i * 15));
//      }
//  }

// Q8. Sum of Even Numbers
//  let sum = 0;
//  for (let i = 2; i <= 30; i += 2) {
//      sum += i;
//  }
//  console.log("Sum of even numbers: " + sum);

//  Q9. Weekly Exercise
//  for (let day = 1; day <= 7; day++) {
//      console.log("Day " + day + ": " + (day * 5) + " push-ups");
//  }

//  Q10. Movie Tickets
//  for (let i = 1; i <= 8; i++) {
//      if (i === 1) {
//          console.log(i + " person: ₹" + (i * 150));
//      } else {
//          console.log(i + " people: ₹" + (i * 150));
//      }
//  }

//  PART B: FOR LOOP 

//  Q1. Count Temperatures Above 30°C
// let temperatures = [28, 32, 25, 40, 18, 35];
// let count = 0;
// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 30) {
//         count++;
//     }
// }
// console.log(count);

//  Q2. Calculate the Sum of Digits of a Number
// let num = 4729;
// let sum = 0;
// for (; num > 0; num = Math.floor(num / 10)) {
//     sum += num % 10;
// }
// console.log(sum);

//  Q3. Print Numbers Divisible by 3 and 5 but Not by 7
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//         console.log(i);
//     }
// }

//  Q4. Extract Consonants from a String
// let str = "JavaScript";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "a" && str[i] !== "e" &&
//         str[i] !== "i" && str[i] !== "o" &&
//         str[i] !== "u" && str[i] !== "A" &&
//         str[i] !== "E" && str[i] !== "I" &&
//         str[i] !== "O" && str[i] !== "U") {
//         result += str[i];
//     }
// }
// console.log(result);

//  Q5. Find the Largest Number in an Array
// let arr = [12, 45, 7, 89, 34, 67];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

//  Q6. Check Whether a Number Is a Perfect Number
// let num = 28;
// let sum = 0;
// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum += i;
//     }
// }
// if (sum === num) {
//     console.log("Perfect Number");
// } else {
//     console.log("Not a Perfect Number");
// }

//  Q7. Print the Powers of 2 Series
// let num = 1;
// for (let i = 1; i <= 8; i++) {
//     console.log(num);
//     num = num * 2;
// }

//  Q8. Print the First 20 Fibonacci Numbers (Optional)
// let a = 0;
// let b = 1;
// for (let i = 1; i <= 20; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }

//  Q9. Calculate Average Score and Count Students Above Average
// let scores = [45, 78, 90, 32, 56, 88];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }
// let average = sum / scores.length;
// let count = 0;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > average) {
//         count++;
//     }
// }
// console.log("Average:", average);
// console.log("Above average:", count);

//  Q10. Convert a Decimal Number to Binary (Optional)
// let num = 13;
// let binary = "";
// if (num === 0) {
//     binary = "0";
// }
// for (; num > 0; num = Math.floor(num / 2)) {
//     binary = (num % 2) + binary;
// }

// console.log(binary);

//  PART C: BREAK INSIDE A FOR LOOP

//  Q1. Find the First Occurrence of 7 in an Array
// let arr = [3, 5, 2, 7, 9, 7];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         console.log(i);
//         break;
//     }
// }

//  Q2. Password Checker with Five Attempts
// let correctPassword = "1234";
// let access = false;
// for (let i = 1; i <= 5; i++) {
//     let password = prompt("Enter password");
//     if (password === correctPassword) {
//         console.log("Access granted");
//         access = true;
//         break;
//     }
// }
// if (access === false) {
//     console.log("Account locked");
// }

//  Q3. Stop Adding Numbers When the Sum Exceeds 100
// let sum = 0;
// for (let i = 1; ; i++) {
//     sum += i;
//     if (sum > 100) {
//         console.log(i - 1);
//         break;
//     }
// }

//  Q4. Find the First Name Starting with S
// let names = ["Aman", "Rahul", "Sneha", "Sahil", "Priya"];
// for (let i = 0; i < names.length; i++) {
//     if (names[i][0] === "S") {
//         console.log(names[i]);
//         break;
//     }
// }

//  Q5. Stop at the First Perfect Square Greater Than 20
// for (let i = 1; i <= 50; i++) {
//     if (i > 20 && i === 25) {
//         break;
//     }
//     console.log(i);
// }

//  PART C: CONTINUE INSIDE A FOR LOOP

//  Q1. Skip Numbers Divisible by 4
// for (let i = 1; i <= 30; i++) {
//     if (i % 4 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//  Q2. Calculate the Sum of Positive Numbers
// let arr = [10, -5, 20, -8, 15, -2];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//         continue;
//     }
//     sum += arr[i];
// }
// console.log(sum);

//  Q3. Print Characters Without Spaces
// let str = "Hello World";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//         continue;
//     }
//     console.log(str[i]);
// }

//  Q4. Multiplication Table of 6, Skipping Products Divisible by 5
// for (let i = 1; i <= 12; i++) {
//     let product = 6 * i;
//     if (product % 5 === 0) {
//         continue;
//     }
//     console.log("6 x " + i + " = " + product);
// }

//  Q5. Print Ages Eligible for Voting
// let ages = [12, 18, 25, 15, 30, 17, 22];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 18) {
//         continue;
//     }
//     console.log(ages[i]);
// }