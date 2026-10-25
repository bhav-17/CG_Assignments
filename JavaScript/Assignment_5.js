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

// PART D: REVERSE FOR LOOP

// Q1. 
// for(let i=50;i>=1;i--){
//     if (i%3===0 && i%9!==0){
//     console.log(i);
//     }
// }
// // Q2.
// let num=4729;

// Q3.
// let string="programming";
// for (let i=string.length;i>=0;i--){
//     if (string[i]!=="a"&& string[i]!=="e"&& string[i]!=="i"&& string[i]!=="o"&& string[i]!=="u"){
//         console.log(string[i])
//     }
// }

// Question 4
// let val2 = 377
// let val1 = 233
// let numbers = ""
// numbers += val2 + " " + val1 + " "
// for (let i=15; i>2; i--){
//     let val3 = val2 - val1
//     numbers += val3 + " "
//     val2 = val1
//     val1 = val3
// }
// console.log(numbers);


// Question 5
// let number = 47974
// let numberCopy = number
// let numberReverse = 0
// for (let i=1; i<=Math.ceil(Math.log10(number)); i++){
//     numberReverse = numberReverse*10 + numberCopy%10
//     numberCopy = Math.floor(numberCopy/10)
// }
// if (number == numberReverse){
//     console.log("Palindrome");
// }else {
//     console.log("Not a Palindrome");
// }


// Question 6
// let nums = [12, 45, 7, 23, 56, 89, 34]
// let largestNum = 0
// for (let i = nums.length-1; i>=0; i--){
//     if (nums[i]>largestNum && nums[i]<50){
//         largestNum=nums[i]
//     }
// }
// console.log(largestNum);


// Question 7
// let temps = [32, 28, 41, 19, 35, 27, 38]
// let count = 0
// for (let i = temps.length-1; i>=0; i--){
//     if (temps[i]<30){
//         count+=1
//     }
// }
// console.log(count);


// Question 8
// let number = 13
// let binary = ""
// for (let i = 0; i<= 20; i++){
//     binary += number%2
//     number = Math.floor(number/2)
//     if (number==0){
//         break
//     }
// }
// let binaryReverse = ""
// for (let i = binary.length-1; i>=0; i--){
//     binaryReverse+=binary[i]
// }
// console.log(binaryReverse);


// Question 9
// let scores = [90, 85, 70, 95, 60, 88, 75]
// for (let i = scores.length-1; i>=0; i--){
//     if (scores[i]>80){
//         console.log(`Score: ${scores[i]}, Index: ${i}`);
//         break
//     }
// }


// Question 10
// for (let i=40; i>=1; i--){
//     if (i**0.5%1==0){
//         continue
//     }
//     console.log(i);
// }

// PART E: Nested For Loop Questions

// Question 1
// let num = 1
// for (let i=1; i<=4; i++){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag += num + " "
//         num++
//     }
//     console.log(bag);
// }


// Question 2
// for (let i=1; i<=4; i++){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag += i + " "
//     }
//     console.log(bag);
// }


// Question 3
// let num = 1
// for (let i=1; i<=4; i++){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag += num + " "
//         num++
//     }
//     console.log(bag);
// }


// Question 4
// let num = "*"
// for (let i=1; i<=4; i++){
//     let bag = ""
//     for (let j=1; j<=4; j++){
//         if (i==1 || j==1 || j==4 || i==4){
//             bag += num
//         }else{
//             bag+=" "
//         }
//         bag+=" "
//     }
//     console.log(bag);
// }


// Question 5
// for (let i=1; i<=6; i++){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         if (i%2!=0){
//             bag += "# "
//         }else{
//             bag += "$ "
//         }
//     }
//     console.log(bag);
// }


// Question 6
// let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// for (let i=1; i<=5; i++){
//     let bag = ""
//     for (let j=0; j<i; j++){
//         bag += string[j] + " "
//     }
//     console.log(bag);
// }


// Question 7
// let num = "*"
// for (let i=1; i<=5; i++){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         if (i==1 || j==1 || j==i || i==5){
//             bag += num
//         }else{
//             bag+=" "
//         }
//         bag+=" "
//     }
//     console.log(bag);
// }


// Question 8
// for (let i=5; i>=1; i--){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag+="*"
//     }
//     console.log(bag);
// }


// Question 9
// for (let i=5; i>=1; i--){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag+= i + " "
//     }
//     console.log(bag);
// }


// Question 10
// for (let i=5; i>=1; i--){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag+= j + " "
//     }
//     console.log(bag);
// }


// Question 11
// let num = 15
// for (let i=5; i>=1; i--){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         bag += num + " "
//         num--
//     }
//     console.log(bag);
// }


// Question 12
// for (let i=5; i>=1; i--){
//     let bag = ""
//     for (let j=1; j<=i; j++){
//         if (i==1 || j==1 || j==i || i==5){
//             bag += "* "
//         }else{
//             bag+="  "
//         }
//     }
//     console.log(bag);
// }


// Question 13
// for (let i=1; i<=5; i++){
//     let bag = ""
//     for (let j=1; j<=5; j++){
//         if(i==j){
//             bag+=" "
//             continue
//         }
//         bag += "*"
//     }
//     console.log(bag);
// }


// Question 14
// for (let i=1; i<=5; i++){
//     let bag = ""
//     for (let j=1; j<=10; j++){
//         if ((i*j)%2==0){
//             bag += i*j + " "
//         }
//     }
//     console.log(bag);
// }


// Question 15
// for (let i=1; i<=3; i++){
//     let bag = ""
//     for (let k=3-i; k>=1;k--){
//         bag+= "  "
//     }
//     for (let j=1; j<=i; j++){
//         bag += j + " "
//     }
//     for (let l=i; l>1; l--){
//         bag += (l-1) + " "
//     }
//     console.log(bag);
// }
