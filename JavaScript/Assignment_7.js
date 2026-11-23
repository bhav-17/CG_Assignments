// 1. push()

// Q1
// let colors1 = ["Red", "Blue", "Green"];
// colors1.push("Yellow", "Black");
// console.log(colors1);

// Q2
// let numbers1 = [];
// numbers1.push(5);
// numbers1.push(10);
// numbers1.push(15);
// console.log(numbers1);

// Q3
// let items1 = ["Pen", "Book"];
// items1.push("Eraser", "Scale");
// console.log(items1);

// Q4: push() adds elements at the end of an array.
// Q5: Yes, push() changes the original array.


// 2. pop()

// Q1
// let numbers2 = [10, 20, 30, 40, 50];
// let removed1 = numbers2.pop();
// let removed2 = numbers2.pop();
// console.log(numbers2);
// console.log(removed1, removed2);

// Q2
// let colors2 = ["Red", "Blue", "Green"];
// let removedColor = colors2.pop();
// console.log(colors2);
// console.log(removedColor);

// Q3
// let numbers3 = [100, 200, 300, 400];
// let removedNumber = numbers3.pop();
// console.log(removedNumber);
// console.log(numbers3);

// Q4: pop() returns the removed last element.
// Q5: pop() on an empty array returns undefined.


// 3. unshift()

// Q1
// let languages1 = ["CSS", "JavaScript"];
// languages1.unshift("HTML");
// console.log(languages1);

// Q2
// let numbers4 = [20, 30];
// numbers4.unshift(5, 10);
// console.log(numbers4);

// Q3
// let cities1 = [];
// cities1.unshift("Delhi");
// cities1.unshift("Mumbai");
// cities1.unshift("Ahmedabad");
// console.log(cities1);

// Q4: unshift() adds elements at the beginning of an array.
// Q5: Yes, unshift() can add multiple elements in one call.


// 4. shift()

// Q1
// let cities2 = ["Delhi", "Mumbai", "Patna", "Ranchi"];
// let removedCity = cities2.shift();
// console.log(cities2);
// console.log(removedCity);

// Q2
// let numbers5 = [10, 20, 30, 40];
// let removedFirst = numbers5.shift();
// let removedSecond = numbers5.shift();
// console.log(numbers5);
// console.log(removedFirst, removedSecond);

// Q3
// let fruits1 = ["Apple", "Banana", "Mango"];
// let removedFruit = fruits1.shift();
// console.log(removedFruit);
// console.log(fruits1);

// Q4: shift() removes the first element, whereas pop() removes the last element.
// Q5: shift() returns the removed first element.


// 5. indexOf()

// Q1
// let fruits2 = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Papaya"];
// console.log(fruits2.indexOf("Mango"));
// console.log(fruits2.indexOf("Watermelon"));

// Q2
// let letters1 = ["A", "B", "C", "B", "D"];
// console.log(letters1.indexOf("B"));

// Q3
// let students1 = ["Bhavya", "Rahul", "Aman", "Rohit"];
// console.log(students1.indexOf("Bhavya"));

// Q4: indexOf() returns -1 if the element is not found.
// Q5: indexOf() returns the index of the first occurrence.


// 6. lastIndexOf()

// Q1
// let numbers6 = [10, 20, 30, 20, 40, 20];
// console.log(numbers6.lastIndexOf(20));

// Q2
// let letters2 = ["X", "Y", "Z", "Y", "X"];
// console.log(letters2.lastIndexOf("Y"));
// console.log(letters2.lastIndexOf("X"));

// Q3
// let numbers7 = [10, 20, 30, 20, 50];
// console.log(numbers7.lastIndexOf(20));

// Q4: indexOf() finds the first occurrence, while lastIndexOf() finds the last occurrence.
// Q5: Use lastIndexOf() when you need the last occurrence of an element.


// 7. includes()

// Q1
// let friends1 = ["Rahul", "Aman", "Rohit", "Karan"];

// if (friends1.includes("Aman")) {
//     console.log("Name is present");
// } else {
//     console.log("Name is not present");
// }

// Q2
// let numbers8 = [11, 22, 33, 44];
// console.log(numbers8.includes(33));
// console.log(numbers8.includes(55));

// Q3
// let subjects1 = ["Maths", "Physics", "Chemistry", "English"];
// console.log(subjects1.includes("Physics"));
// console.log(subjects1.includes("Biology"));

// Q4: includes() returns true if found and false if not found.
// Q5: Yes, includes() works with both numbers and strings.


// 8. reverse()

// Q1
// let numbers9 = [10, 20, 30, 40, 50];
// console.log("Before:", numbers9);
// numbers9.reverse();
// console.log("After:", numbers9);

// Q2
// let letters3 = ["A", "B", "C", "D"];
// letters3.reverse();
// console.log(letters3);

// Q3
// let cities3 = ["Delhi", "Mumbai", "Patna", "Ranchi"];
// cities3.reverse();
// console.log(cities3);

// Q4: reverse() modifies the original array.
// Q5: In-place means changing the original array directly.


// 9. sort() - Basic Version

// Q1
// let students2 = ["Rohit", "Aman", "Bhavya", "Karan", "Rahul"];
// students2.sort();
// console.log(students2);

// Q2
// let animals1 = ["Dog", "Cat", "Elephant", "Ant"];
// animals1.sort();
// console.log(animals1);

// Q3
// let numbers10 = [40, 100, 5, 25];
// numbers10.sort();
// console.log(numbers10);

// Q4: sort() compares elements as strings by default, so numbers may not be sorted numerically.
// Q5: Yes, sort() changes the original array.


// 10. join()

// Q1
// let languages2 = ["JavaScript", "Python", "C", "Java"];
// console.log(languages2.join(" | "));

// Q2
// let languages3 = ["HTML", "CSS", "JavaScript"];
// console.log(languages3.join(" - "));

// Q3
// let subjects2 = ["Maths", "Physics", "Computer Science"];
// console.log(subjects2.join(" / "));

// Q4: Without a separator, join() uses a comma.
// Q5: join() returns a string.


// 11. concat()

// Q1
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combined1 = arr1.concat(arr2);

// console.log(combined1);
// console.log(arr1);
// console.log(arr2);

// Q2
// let arr3 = [1, 2];
// let arr4 = [3, 4];
// console.log(arr3.concat(arr4));

// Q3
// let arr5 = [10, 20];
// let arr6 = [30, 40];
// let arr7 = [50, 60];
// console.log(arr5.concat(arr6, arr7));

// Q4: concat() does not change the original arrays.
// Q5: Yes, concat() can combine more than two arrays.


// 12. slice()

// Q1
// let numbers11 = [5, 10, 15, 20, 25, 30];
// console.log(numbers11.slice(2, 5));

// Q2
// let numbers12 = [10, 20, 30, 40, 50];
// let sliced1 = numbers12.slice(1, 4);
// console.log(sliced1);
// console.log(numbers12);

// Q3
// let numbers13 = [1, 2, 3, 4, 5, 6];
// console.log(numbers13.slice(0, 3));

// Q4: slice() does not modify the original array.
// Q5: If the second argument is omitted, slice() extracts elements until the end.


// 13. splice()

// Q1
// let students3 = ["Jenil", "Mahir", "Arjun"];
// students3.splice(1, 0, "Krishna");
// console.log(students3);

// Q2
// let numbers14 = [10, 20, 30, 40, 50];
// numbers14.splice(1, 2, 25);
// console.log(numbers14);

// Q3
// let numbers15 = [100, 200, 300];
// numbers15.splice(1, 1, 250);
// console.log(numbers15);

// Q4: slice() extracts elements without modifying the original array, while splice() can add, remove, or replace elements.
// Q5: Yes, splice() changes the original array.


// 14. toString()

// Q1
// let movies1 = ["3 Idiots", "Dangal", "Interstellar", "Inception"];
// console.log(movies1.toString());

// Q2
// let numbers16 = [1, 2, 3, 4];
// console.log(numbers16.toString());

// Q3
// let subjects3 = ["Maths", "Physics", "Chemistry"];
// console.log(subjects3.toString());

// Q4: toString() uses a comma separator, while join() allows us to choose a separator.
// Q5: toString() uses a comma (,) by default.


// 15. fill()

// Q1
// let numbers17 = [1, 2, 3, 4, 5, 6];
// numbers17.fill(10);
// console.log(numbers17);

// Q2
// let numbers18 = [1, 2, 3, 4, 5];
// numbers18.fill(0);
// console.log(numbers18);

// Q3
// let greetings1 = ["Hi", "Hey", "Hello", "Welcome"];
// greetings1.fill("Hello");
// console.log(greetings1);

// Q4: Yes, fill() changes the original array.
// Q5: Yes, fill() can change only part of an array.

// let numbers19 = [1, 2, 3, 4, 5];
// numbers19.fill(0, 1, 4);
// console.log(numbers19);
