# Assignment-3 - Solved

# All Questions and Answers are kept in commented form.

# Topic 1: Comparison Operators

# Question 1 — Predict the Output

# Predict the output before running the code.

# Answer-1:

# a = 15

# b = 20

#

# print(a < b)

# print(a > b)

# print(a == b)

# print(a != b)

# print(a <= b)

# print(a >= b)

#

# Output:

# True

# False

# False

# True

# True

# False

# Question 2 — Compare Expressions

# Predict the output.

# Answer-2:

# x = 10

# y = 10

#

# print(x == y)

# print(x != y)

# print(x < y)

# print(x <= y)

# print(x >= y)

#

# Output:

# True

# False

# False

# True

# True

#

# == is used for comparison, while = is used for assignment.

# Question 3 — Comparison with Arithmetic

# Predict the output.

# Answer-3:

# a = 10

# b = 5

#

# print(a + b == 15)

# print(a * b > 40)

# print(a - b != 5)

# print(a // b == 2)

#

# Output:

# True

# True

# False

# True

# Question 4 — String Comparison

# Predict the output and explain case sensitivity.

# Answer-4:

# print("Python" == "Python")

# print("Python" == "python")

# print("Hello" != "hello")

#

# Output:

# True

# False

# True

#

# String comparison is case-sensitive.

# "P" and "p" are treated as different characters.

# Topic 2: Assignment Operators

# Question 5 — Trace the Value

# Predict the final value of x and write the value after each statement.

# Answer-5:

# x = 20

#

# x += 10

# # x = 30

#

# x -= 5

# # x = 25

#

# x *= 2

# # x = 50

#

# x //= 5

# # x = 10

#

# print(x)

#

# Output:

# 10

# Question 6 — Assignment Operator Practice

# Start with marks = 50.

# Increase by 10, decrease by 5 and multiply by 2.

# Answer-6:

# marks = 50

#

# marks += 10

# marks -= 5

# marks *= 2

#

# print(marks)

#

# Output:

# 110

# Topic 3: Membership Operators with Strings

# Question 7 — Basic Membership

# Predict the output.

# Answer-7:

# text = "Python Programming"

#

# print("Python" in text)

# print("Java" in text)

# print("Python" not in text)

#

# Output:

# True

# False

# False

# Question 8 — Character Membership

# Check whether p is present, x is present and c is not present.

# Answer-8:

# word = "computer"

#

# print("p" in word)

# print("x" in word)

# print("c" not in word)

#

# Output:

# True

# False

# False

# Question 9 — Case Sensitivity in Membership

# Predict the output and explain the difference.

# Answer-9:

# text = "Python"

#

# print("P" in text)

# print("p" in text)

# print("Python" in text)

# print("python" in text)

#

# Output:

# True

# False

# True

# False

#

# Membership operators are case-sensitive.

# Therefore, "P" and "p" are different.

# Question 10 — Membership with User Input

# Take a word or sentence as input and check whether "a" occurs in it.

# Answer-10:

# text = input("Enter a word or sentence: ")

#

# print("a" in text)

# Question 11 — Email Symbol Check

# Take an email address and check whether "@" is present.

# Answer-11:

# email = input("Enter email address: ")

#

# print("@" in email)

# Topic 4: ASCII and Unicode

# Question 12 — Find Character Codes

# Use ord() to find the Unicode code point of A, a, Z, z, 0, 9 and @.

# Answer-12:

# print(ord("A"))

# print(ord("a"))

# print(ord("Z"))

# print(ord("z"))

# print(ord("0"))

# print(ord("9"))

# print(ord("@"))

#

# Output:

# 65

# 97

# 90

# 122

# 48

# 57

# 64

# Question 13 — Convert Codes to Characters

# Use chr() to convert the given Unicode values.

# Answer-13:

# print(chr(65))

# print(chr(66))

# print(chr(97))

# print(chr(98))

# print(chr(48))

# print(chr(57))

# print(chr(64))

#

# Output:

# A

# B

# a

# b

# 0

# 9

# @

# Question 14 — Uppercase and Lowercase

# Find the code points of A, a, B and b.

# Answer-14:

# print(ord("A"))

# print(ord("a"))

# print(ord("B"))

# print(ord("b"))

#

# Output:

# 65

# 97

# 66

# 98

#

# 1. ord("a") is larger than ord("A").

# 2. The difference is 32.

# 3. Yes, the difference is also 32 for B and b.

# Question 15 — Character Code Program

# Take one character as input and print its Unicode code point.

# Answer-15:

# character = input("Enter one character: ")

#

# print(ord(character))

# Question 16 — Next Character

# Take a single uppercase English letter and print the next character.

# Answer-16:

# character = input("Enter an uppercase letter: ")

#

# next_character = chr(ord(character) + 1)

#

# print(next_character)

# Question 17 — Character Comparison and Unicode

# Predict the output and use ord() to understand it.

# Answer-17:

# print("A" < "B")

# print("a" < "b")

# print("A" < "a")

# print("0" < "9")

#

# Output:

# True

# True

# True

# True

#

# ord("A") = 65

# ord("B") = 66

# ord("a") = 97

# ord("b") = 98

# ord("0") = 48

# ord("9") = 57

# Question 18 — Unicode Character Challenge

# Use chr() to display the given characters and verify using ord().

# Answer-18:

# print(chr(9731))

# print(chr(9829))

# print(chr(8377))

#

# Output:

# ☃

# ♥

# ₹

#

# print(ord(chr(9731)))

# print(ord(chr(9829)))

# print(ord(chr(8377)))

#

# Output:

# 9731

# 9829

# 8377

# Topic 5: String Indexing

# Question 19 — Basic Indexing

# Print the first, second, last and second-last character.

# Answer-19:

# text = "PYTHON"

#

# print(text[0])

# print(text[1])

# print(text[-1])

# print(text[-2])

#

# Output:

# P

# Y

# N

# O

# Question 20 — Positive and Negative Indexing

# Find the characters at 0, 3, -1 and -3.

# Answer-20:

# text = "COMPUTER"

#

# print(text[0])

# print(text[3])

# print(text[-1])

# print(text[-3])

#

# Output:

# C

# P

# R

# T

# Question 21 — Predict the Output

# Answer-21:

# text = "PYTHON"

#

# print(text[0])

# print(text[2])

# print(text[-1])

# print(text[-2])

#

# Output:

# P

# T

# N

# O

# Question 22 — Indexing a User Input

# Take a word and print its first and last character.

# Answer-22:

# word = input("Enter a word: ")

#

# print(word[0])

# print(word[-1])

# Question 23 — Think Carefully About Indexing

# Answer-23:

# word = "PROGRAM"

#

# print(word[0])

# print(word[2])

# print(word[-1])

# print(word[-4])

#

# Output:

# P

# O

# M

# R

# Topic 6: String Slicing

# Question 24 — Basic Slicing

# Answer-24:

# text = "PYTHON"

#

# print(text[0:3])

# print(text[2:5])

# print(text[1:6])

#

# Output:

# PYT

# THO

# YTHON

# Question 25 — Start and Stop

# Answer-25:

# text = "PROGRAMMING"

#

# print(text[:4])

# print(text[4:])

# print(text[:])

#

# Output:

# PROG

# RAMMING

# PROGRAMMING

# Question 26 — Negative Slicing

# Answer-26:

# text = "COMPUTER"

#

# print(text[-5:])

# print(text[:-3])

# print(text[-6:-2])

#

# Output:

# PUTER

# COMPU

# MPUT

# Question 27 — Step in Slicing

# Answer-27:

# text = "PYTHON"

#

# print(text[::2])

# print(text[1::2])

# print(text[::-1])

#

# Output:

# PTO

# YHN

# NOHTYP

# Question 28 — Reverse a String

# Take a string as input and reverse it using slicing.

# Answer-28:

# text = input("Enter a string: ")

#

# print(text[::-1])

# Question 29 — Alternate Characters

# Print every second character starting from index 0.

# Answer-29:

# text = input("Enter a string: ")

#

# print(text[::2])

# Question 30 — Extract First and Last Three Characters

# Answer-30:

# text = input("Enter a string: ")

#

# print(text[:3])

# print(text[-3:])

# Question 31 — Slicing Challenge

# Answer-31:

# text = "ABCDEFGHIJ"

#

# print(text[2:8:2])

# print(text[8:2:-2])

# print(text[::-2])

#

# Output:

# CEG

# IGE

# JHFDB

#

# First expression:

# start = 2

# stop = 8

# step = 2

#

# Second expression:

# start = 8

# stop = 2

# step = -2

#

# Third expression:

# start = end

# stop = beginning

# step = -2

# Question 32 — Slice Without Counting from the Beginning

# Extract BTECH, CSE and 2026 using slicing.

# Answer-32:

# text = "BTECH-CSE-2026"

#

# print(text[:5])

# print(text[6:9])

# print(text[-4:])

#

# Output:

# BTECH

# CSE

# 2026

# Topic 7: String split()

# Question 33 — Basic split()

# Answer-33:

# text = "Python is easy"

#

# print(text.split())

#

# Output:

# ['Python', 'is', 'easy']

#

# split() separates the words using whitespace by default.

# Question 34 — Custom Separator

# Answer-34:

# data = "apple,banana,mango"

#

# print(data.split(","))

#

# Output:

# ['apple', 'banana', 'mango']

# Question 35 — Separator Not Present

# Answer-35:

# text = "Python is easy"

#

# print(text.split(","))

#

# Output:

# ['Python is easy']

#

# It does not split at spaces because comma was given as the separator.

# Question 36 — Split a Full Name

# Take a full name and print each word on a separate line.

# Answer-36:

# name = input("Enter full name: ")

#

# first_name, middle_name, last_name = name.split()

#

# print(first_name)

# print(middle_name)

# print(last_name)

# Question 37 — Multiple Inputs Using split()

# Take first name and last name in one line.

# Answer-37:

# first_name, last_name = input("Enter first and last name: ").split()

#

# print(f"First Name: {first_name}")

# print(f"Last Name: {last_name}")

# Question 38 — Three Numeric Inputs

# Take three integers in one line and print their sum.

# Answer-38:

# a, b, c = input("Enter three integers: ").split()

#

# a = int(a)

# b = int(b)

# c = int(c)

#

# print(a + b + c)

# Question 39 — Student Record

# Take student information separated by commas.

# Answer-39:

# name, age, course, city = input("Enter student details: ").split(",")

#

# print(f"Name: {name}")

# print(f"Age: {age}")

# print(f"Course: {course}")

# print(f"City: {city}")

# Question 40 — Email Analyzer

# Use split("@") to separate username and domain.

# Answer-40:

# email = input("Enter email address: ")

#

# username, domain = email.split("@")

#

# print(f"Username: {username}")

# print(f"Domain: {domain}")

# Question 41 — Sentence Analyzer

# Find the first word, last word and total number of words.

# Answer-41:

# sentence = input("Enter a sentence: ")

#

# words = sentence.split()

#

# print(f"First word: {words[0]}")

# print(f"Last word: {words[-1]}")

# print(f"Total number of words: {len(words)}")

# Topic 8: Escape Sequences

# Question 42 — New Line

# Produce Hello and World on separate lines.

# Answer-42:

# print("Hello\nWorld")

# Question 43 — Tab

# Display the details using \t.

# Answer-43:

# print("Name:\tRahul")

# print("Age:\t20")

# print("City:\tAhmedabad")

# Question 44 — Backslash

# Display C:\Python\Programs using \.

# Answer-44:

# print("C:\Python\Programs")

# Question 45 — Single Quote

# Display It's Python.

# Answer-45:

# print("It's Python")

#

# Another way:

# print('It's Python')

# Question 46 — Double Quote

# Display He said "Hello".

# Answer-46:

# print('He said "Hello"')

#

# Another way:

# print("He said "Hello"")

# Question 47 — Predict the Output

# Answer-47:

# print("Python\nProgramming")

#

# Output:

# Python

# Programming

# Question 48 — Combined Escape Sequences

# Answer-48:

# print("Student Details\n")

# print("Name:\tRahul")

# print("Age:\t20")

# print("Course:\tB.Tech")

# Topic 9: print(), sep, end and f-Strings

# Question 49 — sep

# Predict the output.

# Answer-49:

# print("2026", "09", "09", sep="-")

#

# Output:

# 2026-09-09

# Question 50 — end

# Predict the output.

# Answer-50:

# print("Hello", end=" ")

# print("Python")

#

# Output:

# Hello Python

# Question 51 — sep and end

# Produce 10-20-30 and 40-50-60.

# Answer-51:

# print("10", "20", "30", sep="-", end="\n")

# print("40", "50", "60", sep="-")

#

# Output:

# 10-20-30

# 40-50-60

# Question 52 — Student Introduction

# Take name, age, city and course and display them using an f-string.

# Answer-52:

# name = input("Enter name: ")

# age = input("Enter age: ")

# city = input("Enter city: ")

# course = input("Enter course: ")

#

# print(f"Name: {name}")

# print(f"Age: {age}")

# print(f"City: {city}")

# print(f"Course: {course}")

# Question 53 — Formatted Price

# Take a price and display exactly two decimal places.

# Answer-53:

# price = float(input("Enter price: "))

#

# print(f"{price:.2f}")

# Topic 10: Debugging

# Question 54 — String and Integer

# Correct the error in the program.

# Answer-54:

# age = input("Enter age: ")

# age = int(age)

#

# print("Age after 5 years:", age + 5)

#

# Error reason:

# input() returns a string, so age must be converted to int

# before adding 5.

# Question 55 — Incorrect Quotes

# Correct print('It's Python').

# Answer-55:

# print("It's Python")

#

# Another correct way:

# print('It's Python')

# Question 56 — Incorrect Slicing Syntax

# Correct text[1,4].

# Answer-56:

# text = "Python"

#

# print(text[1:4])

#

# Output:

# yth

# Question 57 — Incorrect split() Separator

# Correct the program for input 10 20.

# Answer-57:

# a, b = input().split()

#

# print(a)

# print(b)

#

# The program fails with split(",") because the input values

# are separated by a space, not a comma.

# Question 58 — String Addition vs Numeric Addition

# Explain and correct the program.

# Answer-58:

# a, b = input().split()

#

# print(a + b)

#

# For input:

# 10 20

#

# Output:

# 1020

#

# Correct numeric addition:

#

# a, b = input().split()

#

# a = int(a)

# b = int(b)

#

# print(a + b)

#

# Output:

# 30

# Question 59 — Escape Sequence Debugging

# Correct the program so that C:\new\test is displayed.

# Answer-59:

# print("C:\new\test")

#

# Output:

# C:\new\test

#

# \n represents a new line and \t represents a tab.

# Therefore, writing them as normal backslashes can cause

# special-character problems.

# Topic 11: Integrated Problems

# Question 60 — Student Result Information

# Take student name and three subject marks.

# Calculate total and average.

# Answer-60:

# name = input("Enter student name: ")

#

# mark1, mark2, mark3 = input("Enter three marks: ").split()

#

# mark1 = int(mark1)

# mark2 = int(mark2)

# mark3 = int(mark3)

#

# total = mark1 + mark2 + mark3

# average = total / 3

#

# print(f"Name: {name}")

# print(f"Total: {total}")

# print(f"Average: {average:.2f}")

# Question 61 — Student ID Analyzer

# Separate the ID into degree, batch, branch and roll number.

# Also extract the last three characters using slicing.

# Answer-61:

# student_id = input("Enter student ID: ")

#

# degree, batch, branch, roll_number = student_id.split("-")

#

# last_three = student_id[-3:]

# roll_number = int(roll_number)

#

# print(f"Degree: {degree}")

# print(f"Batch: {batch}")

# print(f"Branch: {branch}")

# print(f"Roll Number: {roll_number}")

#

# print(f"Last Three Characters: {last_three}")

# Question 62 — Username Generator

# Create username from a three-word full name.

# Answer-62:

# full_name = input("Enter three-word full name: ")

#

# names = full_name.split()

#

# first_name = names[0]

# last_name = names[2]

#

# username = first_name.lower() + "." + last_name.lower()

#

# print(username)

#

# Example:

# Rahul Kumar Sharma

#

# Output:

# rahul.sharma

# Question 63 — Sentence Information

# Display the first word, last word and number of words.

# Answer-63:

# sentence = input("Enter a sentence: ")

#

# words = sentence.split()

#

# print(f"First word: {words[0]}")

# print(f"Last word: {words[-1]}")

# print(f"Number of words: {len(words)}")

# Question 64 — Email Analyzer + Membership

# Check @, separate username and domain.

# Answer-64:

# email = input("Enter email address: ")

#

# at_present = "@" in email

#

# username, domain = email.split("@")

#

# print(f"@ Present: {at_present}")

# print(f"Username: {username}")

# print(f"Domain: {domain}")

# Question 65 — Character Analyzer

# Display character, Unicode code, previous character and next character.

# Answer-65:

# character = input("Enter one character: ")

#

# code = ord(character)

#

# previous_character = chr(code - 1)

# next_character = chr(code + 1)

#

# print(f"Character: {character}")

# print(f"Code: {code}")

# print(f"Previous: {previous_character}")

# print(f"Next: {next_character}")

# Question 66 — Product Bill

# Calculate subtotal, discount and final total.

# Answer-66:

# product = input("Enter product name: ")

# price = float(input("Enter price: "))

# quantity = int(input("Enter quantity: "))

# discount_percentage = float(input("Enter discount percentage: "))

#

# subtotal = price * quantity

# discount = subtotal * discount_percentage / 100

# final_total = subtotal - discount

#

# print(f"Product: {product}")

# print(f"Price: {price:.2f}")

# print(f"Quantity: {quantity}")

# print(f"Subtotal: {subtotal:.2f}")

# print(f"Discount: {discount:.2f}")

# print(f"Final Total: {final_total:.2f}")

# Question 67 — Date Analyzer

# Separate day, month and year and extract year using slicing.

# Answer-67:

# date = input("Enter date in DD-MM-YYYY format: ")

#

# day, month, year = date.split("-")

#

# year_from_slicing = date[-4:]

#

# print(f"Day: {day}")

# print(f"Month: {month}")

# print(f"Year: {year}")

# print(f"Year using slicing: {year_from_slicing}")

# Question 68 — String Transformation Challenge

# Display both words and their reversed forms.

# Answer-68:

# text = input("Enter two-word string: ")

#

# words = text.split()

#

# first_word = words[0]

# second_word = words[1]

#

# print(f"First Word: {first_word}")

# print(f"Second Word: {second_word}")

# print(f"First Word Reversed: {first_word[::-1]}")

# print(f"Second Word Reversed: {second_word[::-1]}")

# Question 69 — Final Challenge — Student Code Formatter

# Format BTECH-2026-CSE-105 as required.

# Answer-69:

# student_code = input("Enter student code: ")

#

# parts = student_code.split("-")

#

# degree = parts[0]

# batch = parts[1]

# branch = parts[2]

# roll = parts[3]

#

# roll_from_slicing = student_code[-3:]

#

# code = f"{degree}/{branch}/{roll_from_slicing}"



# print(f"Degree: {degree}")

# print(f"Batch: {batch}")

# print(f"Branch: {branch}")

# print(f"Roll: {roll}")

# print(f"Code: {code}")






# Question 70 — Final String + Input/Output Challenge

# Take a three-word full name and create the required output.

# Answer-70:

# full_name = input("Enter full name: ")

#

# names = full_name.split()

#

# first_name = names[0]

# last_name = names[-1]

#

# first_name_upper_part = first_name[:3].upper()

# last_name_lower_part = last_name[2:].lower()

#

# full_name_reversed = full_name[::-1]

#

# print(f"Original: {full_name}")

# print(f"First Name: {first_name}")

# print(f"Last Name: {last_name}")

# print(f"First Name (Upper Part): {first_name_upper_part}")

# print(f"Last Name (Lower Part): {last_name_lower_part}")

# print(f"Full Name Reversed: {full_name_reversed}")