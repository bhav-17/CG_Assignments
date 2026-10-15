# Assignment 5 — Answers (all answers commented out)
# Remove the leading "# " from a question's code block when you want to run it.
# Every solution follows the single-for-loop approach as far as the question allows.

# Q1
# for i in range(2, 15, 3):
#     print(i)
# Output:
# 2
# 5
# 8
# 11
# 14

# Q2
# for i in range(15, 2, -3):
#     print(i)
# Output:
# 15
# 12
# 9
# 6
# 3

# Q3
# for i in range(4, 31, 5):
#     print(i)
# Values: 4, 9, 14, 19, 24, 29
# Iterations: 6

# Q4
# for i in range(3, 19, 3):
#     print(i)

# Q5
# for i in range(5, 11):
#     print(i, 20 - i)

# Q6
# for i in range(1, 7):
#     print(i, i ** 2, i ** 3)

# Q7
# start, end = map(int, input().split())
# total = 0
# for i in range(start, end + 1):
#     total += i
# print(total)

# Q8
# n = int(input())
# count = 0
# for i in range(1, n + 1):
#     if i % 3 == 0:
#         count += 1
# print(count)

# Q9
# n = int(input())
# total = 0
# for i in range(1, n + 1):
#     if i % 4 == 0:
#         total += i
# print(total)

# Q10
# n = int(input())
# count = 0
# for i in range(1, n + 1):
#     if i % 3 == 0 and i % 5 == 0:
#         count += 1
# print(count)

# Q11
# n = int(input())
# total = 0
# for i in range(1, n + 1):
#     if i % 3 != 0:
#         total += i
# print(total)

# Q12
# n = int(input())
# even = 0
# odd = 0
# for i in range(1, n + 1):
#     if i % 2 == 0:
#         even += 1
#     else:
#         odd += 1
# print("Even =", even, "Odd =", odd)

# Q13
# n = int(input())
# total = 0
# for i in range(1, n + 1):
#     total += i
#     print(total)

# Q14
# n = int(input())
# product = 1
# for i in range(1, n + 1):
#     product *= i
#     print(product)

# Q15
# n = int(input())
# factorial = 1
# for i in range(1, n + 1):
#     factorial *= i
# print(factorial)

# Q16
# n = int(input())
# factorial = 1
# for i in range(1, n + 1):
#     factorial *= i
#     print(str(i) + "! =", factorial)

# Q17
# n = int(input())
# product = 1
# for i in range(2, n + 1):
#     if i % 2 == 0:
#         product *= i
# print(product)

# Q18
# n = int(input())
# product = 1
# for i in range(1, n + 1, 2):
#     product *= i
# print(product)

# Q19
# n = int(input())
# product = 1
# for i in range(2, n + 1, 2):
#     product *= i
# print(product)

# Q20
# n = int(input())
# total = 0
# for i in range(1, n + 1):
#     total += i ** 2
# print(total)

# Q21
# n = int(input())
# total = 0
# for i in range(1, n + 1):
#     total += i ** 3
# print(total)

# Q22
# n = int(input())
# factorial = 1
# total = 0
# for i in range(1, n + 1):
#     factorial *= i
#     total += factorial
# print(total)

# Q23 — no string conversion; this is intentionally simple but inefficient.
# n = int(input())
# count = 0
# for i in range(n):
#     if n > 0:
#         count += 1
#         n //= 10
# print(count)

# Q24
# n = abs(int(input()))
# total = 0
# for i in range(n):
#     if n > 0:
#         total += n % 10
#         n //= 10
# print(total)

# Q25
# n = abs(int(input()))
# product = 1
# for i in range(n):
#     if n > 0:
#         product *= n % 10
#         n //= 10
# print(product)

# Q26
# n = abs(int(input()))
# count = 0
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit % 2 == 0:
#             count += 1
#         n //= 10
# print(count)

# Q27
# n = abs(int(input()))
# total = 0
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit % 2 == 0:
#             total += digit
#         n //= 10
# print(total)

# Q28
# n = abs(int(input()))
# largest = 0
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit > largest:
#             largest = digit
#         n //= 10
# print(largest)

# Q29
# n = abs(int(input()))
# smallest = 9
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit < smallest:
#             smallest = digit
#         n //= 10
# print(smallest)

# Q30
# n = int(input())
# original = n
# reversed_number = 0
# for i in range(n):
#     if n > 0:
#         reversed_number = reversed_number * 10 + n % 10
#         n //= 10
# print(reversed_number)

# Q31
# n = int(input())
# original = n
# reversed_number = 0
# for i in range(n):
#     if n > 0:
#         reversed_number = reversed_number * 10 + n % 10
#         n //= 10
# if original == reversed_number:
#     print("Palindrome")
# else:
#     print("Not Palindrome")

# Q32
# n, target = map(int, input().split())
# n = abs(n)
# count = 0
# for i in range(n):
#     if n > 0:
#         if n % 10 == target:
#             count += 1
#         n //= 10
# print(count)

# Q33
# n = int(input())
# for i in range(n):
#     if n >= 10:
#         n //= 10
# print(n)

# Q34
# n = abs(int(input()))
# largest = 0
# smallest = 9
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit > largest:
#             largest = digit
#         if digit < smallest:
#             smallest = digit
#         n //= 10
# print(largest - smallest)

# Q35
# n = int(input())
# position = 1
# for i in range(n):
#     if n > 0:
#         print(n % 10, position)
#         n //= 10
#         position += 1

# Q36
# n = int(input())
# original = n
# total = 0
# for i in range(3):
#     digit = n % 10
#     total += digit ** 3
#     n //= 10
# if total == original:
#     print("Armstrong Number")
# else:
#     print("Not Armstrong Number")

# Q37
# s = input()
# for i in range(len(s)):
#     print(i, s[i])

# Q38
# s = input()
# count = 0
# for ch in s:
#     count += 1
# print(count)

# Q39
# s = input()
# vowels = 0
# consonants = 0
# for ch in s.lower():
#     if ch.isalpha():
#         if ch in "aeiou":
#             vowels += 1
#         else:
#             consonants += 1
# print("Vowels =", vowels, "Consonants =", consonants)

# Q40
# s, target = input().split()
# count = 0
# for ch in s:
#     if ch == target:
#         count += 1
# print(count)

# Q41
# s, target = input().split()
# position = -1
# for i in range(len(s)):
#     if s[i] == target and position == -1:
#         position = i
# if position == -1:
#     print("Not Found")
# else:
#     print(position)

# Q42
# s = input()
# upper = 0
# lower = 0
# for ch in s:
#     if ch.isupper():
#         upper += 1
#     elif ch.islower():
#         lower += 1
# print("Uppercase =", upper, "Lowercase =", lower)

# Q43
# s = input()
# for ch in s:
#     print(ch, ord(ch))

# Q44
# s = input()
# result = ""
# for ch in s:
#     if ch.lower() not in "aeiou":
#         result += ch
# print(result)

# Q45
# s = input()
# middle = len(s) // 2
# print(s[middle])

# Q46
# s = input()
# middle = len(s) // 2
# print("First Half:", s[:middle])
# print("Second Half:", s[middle:])

# Q47
# s = input()
# first = ""
# middle = ""
# second = ""
# length = len(s)
# for i in range(length):
#     if length % 2 == 1 and i == length // 2:
#         middle += s[i]
#     elif i < length // 2:
#         first += s[i]
#     else:
#         second += s[i]
# print("First Half:", first)
# if length % 2 == 1:
#     print("Middle:", middle)
# print("Second Half:", second)

# Q48
# s = input()
# equal = True
# half = len(s) // 2
# for i in range(half):
#     if s[i] != s[i + half]:
#         equal = False
# if equal:
#     print("Equal Halves")
# else:
#     print("Different Halves")

# Q49
# s = input()
# symmetric = True
# for i in range(len(s) // 2):
#     if s[i] != s[len(s) - 1 - i]:
#         symmetric = False
# if symmetric:
#     print("Symmetric")
# else:
#     print("Not Symmetric")

# Q50
# s = input()
# result = ""
# for i in range(len(s)):
#     if i % 2 == 0:
#         result += s[i]
# print(result)

# Q51
# s = input()
# even_index = 0
# odd_index = 0
# for i in range(len(s)):
#     if i % 2 == 0:
#         even_index += 1
#     else:
#         odd_index += 1
# print("Even Index =", even_index, "Odd Index =", odd_index)

# Q52
# s = input()
# result = ""
# for i in range(0, len(s), 2):
#     result += s[i + 1] + s[i]
# print(result)

# Q53 — no string conversion; inefficient range bound keeps one for loop.
# n = abs(int(input()))
# largest = -1
# second_largest = -1
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit > largest:
#             second_largest = largest
#             largest = digit
#         elif digit < largest and digit > second_largest:
#             second_largest = digit
#         n //= 10
# if second_largest == -1:
#     print("No second largest distinct digit")
# else:
#     print(second_largest)

# Q54
# s = input()
# current = 0
# best = 0
# previous = ""
# for ch in s:
#     if ch == previous:
#         current += 1
#     else:
#         current = 1
#         previous = ch
#     if current > best:
#         best = current
# print(best)

# Q55
# s, target = input().split()
# count = 0
# for ch in s:
#     if ch == target:
#         count += 1
# frequency = count / len(s) * 100
# print("Count =", count, "Frequency =", format(frequency, ".2f") + "%")

# Q56
# n = int(input())
# total = 0
# for i in range(n):
#     if n > 0:
#         total += n % 10
#         print(total)
#         n //= 10

# Q57
# n = abs(int(input()))
# even = 0
# odd = 0
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         if digit % 2 == 0:
#             even += 1
#         else:
#             odd += 1
#         n //= 10
# if even > odd:
#     print("More Even Digits")
# elif odd > even:
#     print("More Odd Digits")
# else:
#     print("Equal")

# Q58
# n = int(input())
# total = 0
# sign = 1
# for i in range(n):
#     if n > 0:
#         total += sign * (n % 10)
#         sign *= -1
#         n //= 10
# print(total)

# Q59
# total = 0
# for i in range(1, 6):
#     total = total + i * 2
#     print(total)
# Output:
# 2
# 6
# 12
# 20
# 30

# Q60
# count = 0
# for i in range(1, 11):
#     if i % 2 == 0:
#         count += 1
# print(count)
# Output is 5 because 2, 4, 6, 8, and 10 are even.

# Q61
# Mistake: sum = i overwrites the accumulator on every iteration.
# Corrected code:
# total = 0
# for i in range(1, 6):
#     total += i
# print(total)
# Output: 15
# Each iteration adds the current i to the previous total.

# Q62
# n = int(input())
# total = 0
# highest = None
# lowest = None
# for i in range(n):
#     expense = int(input())
#     total += expense
#     if highest is None or expense > highest:
#         highest = expense
#     if lowest is None or expense < lowest:
#         lowest = expense
# print("Total:", total)
# print("Highest:", highest)
# print("Lowest:", lowest)

# Q63
# n = int(input())
# total = 0
# highest = None
# lowest = None
# for i in range(n):
#     marks = int(input())
#     total += marks
#     if highest is None or marks > highest:
#         highest = marks
#     if lowest is None or marks < lowest:
#         lowest = marks
# print("Total:", total)
# print("Average:", total / n)
# print("Highest:", highest)
# print("Lowest:", lowest)

# Q64
# n = int(input())
# present = 0
# absent = 0
# for i in range(n):
#     status = input().strip().upper()
#     if status == "P":
#         present += 1
#     elif status == "A":
#         absent += 1
# print("Present:", present)
# print("Absent:", absent)
# print("Attendance:", format(present / n * 100, ".2f") + "%")

# Q65
# n = int(input())
# total = 0
# above_ten = 0
# for i in range(n):
#     units = int(input())
#     total += units
#     if units > 10:
#         above_ten += 1
# print("Total Units:", total)
# print("Days Above 10:", above_ten)

# Q66
# n = int(input())
# total = 0
# above_1000 = 0
# for i in range(n):
#     price = float(input())
#     total += price
#     if price > 1000:
#         above_1000 += 1
# print("Total Bill:", total)
# print("Products Above 1000:", above_1000)

# Q67
# n = int(input())
# successful = 0
# failed = 0
# for i in range(n):
#     attempt = input().strip().lower()
#     if attempt == "success":
#         successful += 1
#     elif attempt == "failed":
#         failed += 1
# print("Successful:", successful)
# print("Failed:", failed)
# print("Success Rate:", format(successful / n * 100, ".1f") + "%")

# Q68 — no string conversion; inefficient range bound keeps one for loop.
# n = abs(int(input()))
# digits = 0
# total = 0
# largest = 0
# smallest = 9
# even = 0
# odd = 0
# for i in range(n):
#     if n > 0:
#         digit = n % 10
#         digits += 1
#         total += digit
#         if digit > largest:
#             largest = digit
#         if digit < smallest:
#             smallest = digit
#         if digit % 2 == 0:
#             even += 1
#         else:
#             odd += 1
#         n //= 10
# print("Digits:", digits)
# print("Sum:", total)
# print("Largest:", largest)
# print("Smallest:", smallest)
# print("Even Digits:", even)
# print("Odd Digits:", odd)

# Q69
# s = input()
# total = 0
# vowels = 0
# consonants = 0
# uppercase = 0
# lowercase = 0
# even_index = 0
# for i in range(len(s)):
#     ch = s[i]
#     total += 1
#     if i % 2 == 0:
#         even_index += 1
#     if ch.isalpha():
#         if ch.lower() in "aeiou":
#             vowels += 1
#         else:
#             consonants += 1
#         if ch.isupper():
#             uppercase += 1
#         elif ch.islower():
#             lowercase += 1
# print("Total Characters:", total)
# print("Vowels:", vowels)
# print("Consonants:", consonants)
# print("Uppercase:", uppercase)
# print("Lowercase:", lowercase)
# print("Even Index Characters:", even_index)