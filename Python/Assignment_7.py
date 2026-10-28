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

# Question 31
# price = int(input("Enter the price: "))
# quantity = int(input("Enter the quantity: "))
# total_cost = 0
# count = 0
# while count < quantity:
#     total_cost += price
#     count += 1
# print(total_cost)

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
# daily_amount = int(input("Enter the daily amount: "))
# target = int(input("Enter the target: "))
# days = 0
# while saved < target:
#     saved = saved + daily_amount
#     days = days + 1
# print(days)

# Question 34 
# N = int(input("Enter a non-negative integer: "))
# result = 1
# i = 1
# while i <= N:
#     result *= i
#     i += 1
# print(result)

# Question 35
# start=int(input("Enter the start value: "))
# end=int(input("Enter the end value: "))
# sum=0
# while start<=end:
#     sum+=start
#     start+=1
# print(sum)

# Question 36 
# n=int(input("Enter a number: "))
# i=2
# while i<=n:
#     print(n)
#     n-=2

# Question 37
# n = int(input("Enter a number: "))
# while n > 0:
#     n //= 2
#     print(n)

# Question 38
# n = int(input("Enter a number: "))
# step=0
# while n>=0:
#     n-=3
#     step+=1
# print(step)

# Question 39
# saved=int(input("Enter the saved amount: "))
# daily_amount=int(input("Enter the daily amount: "))
# target=int(input("Enter the target amount: "))
# days=0
# while saved<target:
#     saved+=daily_amount
#     days+=1
# print(days)
    
# Question 40
# start = 20
# step = 5
# while start >= 0:
#     print(start)
#     start = start - step

# Question 41
# n = int(input("Enter a number: "))
# count = 0
# while n > 0:
#     count = count + 1
#     n = n // 10
# if count == 0:
#     count = 1
# print(count)

# Question 42
# n = int(input("Enter a number: "))
# total = 0
# while n > 0:
#     digit = n % 10
#     total = total + digit
#     n = n // 10
# print(total)

# Question 43
# n = int(input("Enter a number: "))
# reverse = 0
# while n > 0:
#     digit = n % 10
#     reverse = reverse * 10 + digit
#     n = n // 10
# print(reverse)

# Question 44
# n = int(input("Enter a number: "))
# product = 1
# while n > 0:
#     digit = n % 10
#     product = product * digit
#     n = n // 10
# if n == 0 and product == 1:
#     product = 0
# print(product)

# Question 45
# n = int(input("Enter a number: "))
# while n > 0:
#     digit = n % 10
#     print(digit)
#     n = n // 10

# Question 46
# n = int(input("Enter a number: "))
# last_digit = n % 10
# while n >= 10:
#     n = n // 10
# first_digit = n
# print("First digit:", first_digit)
# print("Last digit:", last_digit)

# Question 47
# n = int(input("Enter a number: "))
# count = 0
# while n > 0:
#     digit = n % 10
#     if digit % 2 == 0:
#         count = count + 1
#     n = n // 10
# print(count)

# Question 48
# n = int(input("Enter a number: "))
# count = 0
# while n > 0:
#     digit = n % 10
#     if digit % 2 != 0:
#         count = count + 1
#     n = n // 10
# print(count)

# Question 49
# n = int(input("Enter a number: "))
# total = 0
# while n > 0:
#     digit = n % 10
#     if digit % 2 == 0:
#         total = total + digit
#     n = n // 10
# print(total)

# Question 50
# n = int(input("Enter a number: "))
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
# n = int(input("Enter a number: "))
# i = 1
# factorial = 1
# while i <= n:
#     factorial = factorial * i
#     print(factorial)
#     i = i + 1

# Question 57
# n = int(input("Enter a number: "))
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
# n = int(input("Enter a number: "))
# i = 1
# factorial = 1
# largest = 1
# while factorial <= n:
#     largest = factorial
#     i = i + 1
#     factorial = factorial * i
# print(largest)

# TYPE 5

# Question 79
# num=int(input("Enter a number: "))
# i=2
# while num%i==0:
#     print("Not Prime")
#     i+=1
#     break
# else:
#     print("Prime")

# Question 80
# num1=int(input("Enter a: "))
# num2=int(input("Enter b: "))
# if num1 < num2:
#     hcf = num1
# else:
#     hcf = num2
# while hcf > 0:
#     if num1 % hcf == 0 and num2 % hcf == 0:
#         break
#     hcf = hcf - 1
# print("The HCF is:", hcf)

# Question 81
# num1 = int(input("Enter the first number: "))
# num2 = int(input("Enter the second number: "))
# if num1 > num2:
#     greater = num1
# else:
#     greater = num2
# while True:
#     if greater % num1 == 0 and greater % num2 == 0:
#         break
#     greater += 1
# print("The LCM is:", greater)

# Question 82
# num=int(input("Enter a number: "))
# i=1
# sum=0
# while num>i:
#     if num%i==0:
#         sum+=i
#     i+=1
# if sum==num:
#     print("Perfect")
# else:
#     print("Not perfect")

# Question 83
# num=int(input("Enter a number: "))
# fact=1
# while num>0:
#     digit=num%10
#     num//=10
#     fact*=digit
# print(fact)

