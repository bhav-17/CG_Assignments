# Type 1: Output Guessing

# Question 1
# i = 1
# while i <= 4:
#     print(i)
#     i += 1

# Output
# 1
# 2
# 3
# 4


# Question 2
# n = 2
# while n <= 8:
#     print(n, end=" ")
#     n += 2

# Output
# 2 4 6 8


# Question 3
# x = 5
# while x >= 1:
#     print(x, end=" ")
#     x -= 1

# Output
# 5 4 3 2 1


# Question 4
# count = 7
# while count < 5:
#     print("Hello")
#     count += 1

# print("Finished")

# Output
# Finished

# Type 2: Basic While Loop Problems — Statement Based

# Question 21
# n=int(input("Enter a number: "))
# i=1
# while i<=n:
#     print(i)
#     i+=1

# Question 22
# n=int(input("Enter a number: "))
# while n>=1:
#     print(n)
#     n-=1
    
# Question 23
# n = int(input("Enter a number: "))
# i = 2
# while i <= n:
#   print(i)
#   i += 2
 
# Question 24
# n = int(input("Enter a number: "))
# i=1
# while i<=n:
#         print(i)
#         i+=2

# Question 25
# k = int(input("Enter a number: "))
# n = int(input("Enter the target number: "))
# i = 1
# while k * i <= n:
#   print(k * i)
#   i += 1

# Question 26 
# n=int(input("Enter a number: "))
# i=1
# while i<=10:
#     print(f"{n}x{i}={n*i}")
#     i+=1

# Question  27
# start=int(input("Enter the start value: "))
# step=int(input("Enter the step value: "))
# i=1
# while i<=5:
#     print(start)
#     start+=step
#     i+=1

# Question 28
# n=int(input("Enter a number: "))
# i=1
# sum = 0
# while i<=n:
#     sum+=i
#     i+=1
# print(sum)

# Question 29
# n=int(input("Enter a number: "))
# i=2
# sum=0
# while i<=n:
#     sum+=i
#     i+=2
# print(sum)

# Question 30
# n=int(input("Enter a number: "))
# i=i
# sum=0
# while i<=n:
#     sum+=i
#     i+=2
# print(sum)

### Question 31
# price=int(input("Enter the price: "))
# Question uestion uantity=int(input("Enter the Question uestion uantity: "))
# cost=price*Question uestion uantity
# while cost

# Question 32
# DAILY_SAVING = int(input("Enter the daily saving "))
# DAYS = 6
# total_saved = 0
# day = 1
# while day <= DAYS:
#     total_saved += DAILY_SAVING
#     day += 1
# print(total_saved)

# Question 33
# daily_amount = 15
# target = 70
# days = 0
# while saved < target:
#     saved = saved + daily_amount
#     days = days + 1
# print(days)

# Question 40
# start = 20
# step = 5
# while start >= 0:
#     print(start)
#     start = start - step

# Question 41
# n = 58321
# count = 0
# while n > 0:
#     count = count + 1
#     n = n // 10
# if count == 0:
#     count = 1
# print(count)

# Question 42
# n = 583
# total = 0
# while n > 0:
#     digit = n % 10
#     total = total + digit
#     n = n // 10
# print(total)

# Question 43
# n = 5830
# reverse = 0
# while n > 0:
#     digit = n % 10
#     reverse = reverse * 10 + digit
#     n = n // 10
# print(reverse)

# Question 44
# n = 234
# product = 1
# while n > 0:
#     digit = n % 10
#     product = product * digit
#     n = n // 10
# if n == 0 and product == 1:
#     product = 0
# print(product)

# Question 45
# n = 58321
# while n > 0:
#     digit = n % 10
#     print(digit)
#     n = n // 10

# Question 46
# n = 58321
# last_digit = n % 10
# while n >= 10:
#     n = n // 10
# first_digit = n
# print("First digit:", first_digit)
# print("Last digit:", last_digit)

# Question 47
# n = 583204
# count = 0
# while n > 0:
#     digit = n % 10
#     if digit % 2 == 0:
#         count = count + 1
#     n = n // 10
# print(count)

# Question 48
# n = 583204
# count = 0
# while n > 0:
#     digit = n % 10
#     if digit % 2 != 0:
#         count = count + 1
#     n = n // 10
# print(count)

# Question 49
# n = 583204
# total = 0
# while n > 0:
#     digit = n % 10
#     if digit % 2 == 0:
#         total = total + digit
#     n = n // 10
# print(total)

# Question 50
# n = 583204
# largest = 0
# while n > 0:
#     digit = n % 10
#     if digit > largest:
#         largest = digit
#     n = n // 10
# print(largest)

# Question 51
# n = 583204
# smallest = 9
# while n > 0:
#     digit = n % 10

# Question 52
# n = 1221
# original = n
# reverse = 0
# while n > 0:
#     digit = n % 10
#     reverse = reverse * 10 + digit
#     n = n // 10
# if original == reverse:
#     print("Palindrome")
# else:
#     print("Not Palindrome")

# Question 53
# n = 505250
# d = 5
# count = 0
# while n > 0:
#     digit = n % 10
#     if digit == d:
#         count = count + 1
#     n = n // 10
# if n == 0 and d == 0:
#     count = 1
# print(count)

# Question 54
# n = 7777
# digit = n % 10
# same = True
# while n > 0:
#     current = n % 10
#     if current != digit:
#         same = False
#     n = n // 10
# if same:
#     print("Yes")
# else:
#     print("No")

# Question 55
# n = 58321
# last_digit = n % 10
# total = 0
# first_digit = 0
# while n > 0:
#     digit = n % 10
#     total = total + digit
#     first_digit = digit
#     n = n // 10
# first_last_sum = first_digit + last_digit
# middle_sum = total - first_digit - last_digit
# print("First and last digits sum:", first_last_sum)
# print("Middle digits sum:", middle_sum)

# Question 56 
# n = 5
# i = 1
# factorial = 1
# while i <= n:
#     factorial = factorial * i
#     print(factorial)
#     i = i + 1

# Question 57
# n = 24
# i = 1
# factorial = 1
# while factorial < n:
#     i = i + 1
#     factorial = factorial * i
# if factorial == n:
#     print("Yes")
# else:
#     print("No")

# Question 58
# n = 20
# i = 1
# factorial = 1
# largest = 1
# while factorial <= n:
#     largest = factorial
#     i = i + 1
#     factorial = factorial * i
# print(largest)