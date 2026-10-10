# Assignment 3: JavaScript Operators — Answers

---

## A] Arithmetic Operators

### 1. Addition `+`

1. **₹27,500**
   ```js
   15000 + 12500
   ```

2. **43 pages**
   ```js
   18 + 25
   ```

3. **303 items**
   ```js
   125 + 178
   ```

4. **Output:**
   ```text
   105
   ```
   Since one operand is a string, `+` performs string concatenation.

5. **Output:**
   ```text
   53
   ```
   The number `5` is converted to a string and concatenated with `"3"`.

6. **Output:**
   ```text
   42
   ```

7. **₹395**
   ```js
   350 + 45
   ```

8. **Result:**
   ```text
   "2510"
   ```
   `+` with a string performs concatenation, so `10` is converted to `"10"`.

9. **Total spent: ₹1,070**

   ```js
   let totalSpent = 750 + 320;
   let remainingBalance = 2000 - totalSpent;
   console.log(totalSpent);
   console.log(remainingBalance);
   ```

   Output:
   ```text
   1070
   930
   ```

10. **Outputs:**
    ```text
    555
    105
    555
    ```

    Explanation:
    - `5 + "5" + 5` → `"55" + 5` → `"555"`
    - `5 + 5 + "5"` → `10 + "5"` → `"105"`
    - `"5" + 5 + 5` → `"55" + 5` → `"555"`

---

### 2. Subtraction `-`

1. **27 empty seats**
   ```js
   80 - 53
   ```

2. **465 marks**
   ```js
   500 - 35
   ```

3. **1,625 boxes**
   ```js
   2500 - 875
   ```

4. **Output:**
   ```text
   7
   ```
   The `-` operator converts the numeric string `"10"` into the number `10`.

5. **Output:**
   ```text
   15
   ```
   Both strings are converted to numbers before subtraction.

6. **Output:**
   ```text
   63
   ```

7. **325 litres**
   ```js
   500 - 175
   ```

8. **Results:**
   ```text
   "50" - 20   → 30
   "50" - "20" → 30
   ```
   Both operands are converted to numbers for subtraction, so there is no difference.

9. **Expression:**
   ```js
   240 - 95 - 67
   ```
   **Answer:**
   ```text
   78 apples
   ```

10. **Outputs:**
    ```text
    50
    NaN
    3
    3
    ```

    Explanation:
    - `"100" - 50` → `50`
    - `"abc" - 10` → `NaN` because `"abc"` cannot be converted to a number.
    - `10 - "5" - "2"` → `10 - 5 - 2` → `3`
    - `"10" - "5" - "2"` → `10 - 5 - 2` → `3`

---

### 3. Multiplication `*`

1. **₹360**
   ```js
   45 * 8
   ```

2. **720 bottles**
   ```js
   120 * 6
   ```

3. **105 plants**
   ```js
   7 * 15
   ```

4. **Output:**
   ```text
   20
   ```
   The string `"5"` is converted to the number `5`.

5. **Output:**
   ```text
   20
   ```
   Numeric strings are converted to numbers for multiplication.

6. **Output:**
   ```text
   96
   ```

7. **₹1,196**
   ```js
   299 * 4
   ```

8. **Results:**
   ```text
   "7" * 6   → 42
   "7" * "6" → 42
   ```
   Both numeric strings are converted to numbers.

9. **Expression:**
   ```js
   45 * 8
   ```
   **Answer:**
   ```text
   360 units
   ```

10. **Outputs:**
    ```text
    30
    NaN
    25
    0
    ```

    Explanation:
    - `"5" * 3 * "2"` → `5 * 3 * 2` → `30`
    - `"abc" * 4` → `NaN`
    - `10 * "2.5"` → `25`
    - `"10" * "2.5" * "0"` → `10 * 2.5 * 0` → `0`

---

### 4. Division `/`

1. **12 pencils per student**
   ```js
   144 / 12
   ```

2. **60 km per hour**
   ```js
   360 / 6
   ```

3. **₹8,000 per department**
   ```js
   72000 / 9
   ```

4. **Output:**
   ```text
   5
   ```
   The string `"20"` is converted to the number `20`.

5. **Output:**
   ```text
   20
   ```

6. **Output:**
   ```text
   12
   ```

7. **40 students per classroom**
   ```js
   360 / 9
   ```

8. **Results:**
   ```text
   "100" / 4   → 25
   "100" / "4" → 25
   ```
   Both operands are converted to numbers.

9. **Expression:**
   ```js
   2400 / 6
   ```
   **Answer: ₹400 per person**

10. **Outputs:**
    ```text
    Infinity
    -Infinity
    NaN
    2.5
    NaN
    ```

    Explanation:
    - `10 / 0` → `Infinity`
    - `-10 / 0` → `-Infinity`
    - `0 / 0` → `NaN`
    - `"20" / "4" / 2` → `20 / 4 / 2` → `2.5`
    - `"abc" / 5` → `NaN` because `"abc"` is not a numeric string.

---

### 5. Modulus `%`

1. **3 students left over**
   ```js
   53 % 5
   ```

2. **8 candies left**
   ```js
   128 % 10
   ```

3. **3 toys left**
   ```js
   237 % 6
   ```

4. **25 people left**
   ```js
   185 % 40
   ```

5. **Output:**
   ```text
   NaN
   ```
   Any number modulo `0` results in `NaN`.

6. **Output:**
   ```text
   4
   ```

7. **4 chocolates left over**
   ```js
   23 % 4
   ```

8. **Results:**
   ```text
   0 % 7  → 0
   15 % 0 → NaN
   ```
   `0` divided by a non-zero number has remainder `0`, while modulo `0` results in `NaN`.

9. **Expressions:**
   ```js
   let pages = 47;
   let pagesPerSheet = 6;

   let fullSheets = Math.floor(pages / pagesPerSheet);
   let remainingPages = pages % pagesPerSheet;

   console.log(fullSheets);
   console.log(remainingPages);
   ```

   Output:
   ```text
   7 full sheets
   5 pages left over
   ```

   Note: `47 / 6` gives `7.833...`; `Math.floor()` gives the number of complete sheets.

10. **Outputs:**
    ```text
    2
    -2
    2
    -2
    NaN
    ```

    Explanation:
    The `%` operator keeps the sign of the dividend (the number on the left).
    - `17 % 5` → `2`
    - `-17 % 5` → `-2`
    - `17 % -5` → `2`
    - `-17 % -5` → `-2`
    - `10 % 0` → `NaN`

---

### 6. Exponentiation `**`

1. **216 cm³**
   ```js
   6 ** 3
   ```

2. **81 cells**
   ```js
   9 ** 2
   ```

3. **625**
   ```js
   5 ** 4
   ```

4. **1,048,576 pixels**
   ```js
   1024 ** 2
   ```

5. **Output:**
   ```text
   0.5
   ```
   ```js
   2 ** -1
   ```
   A negative exponent gives the reciprocal: `1 / 2`.

6. **Output:**
   ```text
   81
   ```

7. **81 square units**
   ```js
   9 ** 2
   ```

8. **Results:**
   ```text
   2 ** 5 → 32
   5 ** 2 → 25
   ```
   No, they are **not the same**.

9. **Outputs:**
   ```text
   512
   64
   0.125
   SyntaxError
   4
   ```

   Explanation:
   - `2 ** 3 ** 2` → `2 ** (3 ** 2)` → `2 ** 9` → `512`
   - `(2 ** 3) ** 2` → `8 ** 2` → `64`
   - `2 ** -3` → `1 / 2 ** 3` → `0.125`
   - `-2 ** 2` is a **SyntaxError** because the unary minus cannot be used directly before `**` in this form.
   - `(-2) ** 2` → `4`
   - `4 ** 0.5` → `2`

10. **Output:**
    ```text
    1
    ```
    Any non-zero number raised to the power `0` is `1`.

---

## B] Assignment Operators

### 1. Simple Assignment `=`

1. ```js
   let studentName = "Priya";
   let marks = 92;
   ```
2. ```js
   let score = 0;
   ```
3. ```js
   let a = b = c = 50;
   ```
   In modern JavaScript, declare variables separately for clarity: `let a, b, c; a = b = c = 50;`.
4. **Output:** `100` — `x` is assigned `100` before it is printed.
5. **Output:** `15 30` — assigning `q = p` copies the current number into `q`; changing `q` does not change `p`.

### 2. Add and Assign `+=`

1. ```js
   let score = 80;
   score += 25; // 105
   ```
2. ```js
   let balance = 1500;
   balance += 120; // 1620
   ```
3. **Output:** `15`
4. **Output:** `Good Morning` — strings are concatenated.
5. **Final value:** `"205"` — `n += "5"` concatenates because one operand is a string.

### 3. Subtract and Assign `-=`

1. ```js
   let health = 100;
   health -= 35; // 65
   ```
2. ```js
   let stock = 300;
   stock -= 45; // 255
   ```
3. **Output:** `3`
4. **Output:** `25` — the numeric string `"40"` is converted to a number.
5. **Result:** `NaN` — `"abc"` cannot be converted to a valid number for subtraction.

### 4. Multiply and Assign `*=`

1. ```js
   let price = 500;
   price *= 1.18; // 590
   ```
2. ```js
   let quantity = 8;
   quantity *= 3; // 24
   ```
3. **Output:** `220.00000000000003` may appear because of floating-point precision (mathematically, 220).
4. **Output:** `21` — `"7"` is converted to the number `7`.
5. **Result:** `NaN` — `"hello"` cannot be converted to a number for multiplication.

### 5. Divide and Assign `/=`

1. ```js
   let chocolates = 180;
   chocolates /= 6; // 30
   ```
2. ```js
   let distance = 300;
   distance /= 5; // 60 km/h
   ```
3. **Output:** `50`
4. **Output:** `25` — `"100"` is converted to the number `100`.
5. **Result:** `Infinity` — dividing a positive non-zero number by `0` gives positive infinity in JavaScript.

### 6. Modulus and Assign `%=`

1. ```js
   let num = 47;
   num %= 6; // 5
   ```
2. ```js
   let counter = 23;
   counter %= 12; // 11
   ```
3. **Output:** `4`
4. **Output:** `2` — `"17"` is converted to the number `17`.
5. **Result:** `NaN` — remainder with a divisor of `0` is `NaN`.

### 7. Exponentiation and Assign `**=`

1. ```js
   let side = 5;
   side **= 3; // 125 (volume in cubic units)
   ```
2. ```js
   let num = 4;
   num **= 2; // 16
   ```
3. **Output:** `32`
4. **Output:** `2` — raising `4` to the power `0.5` gives its square root.
5. **Result:** `0.5` — a power of `-1` gives the reciprocal: `1 / 2`.

---

## C] Comparison Operators

### 1. Loose Equality `==`

1. `"25" == 25` → **`true`** — loose equality converts the numeric string to a number.
2. `0 == false` → **`true`** — both are converted to equivalent numeric values.
3. ```text
   true
   true
   ```
   `10 == "10"` is true after conversion; `null == undefined` is a special true case.
4. ```text
   true
   true
   ```
   `"" == 0` is true after conversion. `[] == false` is also true after conversion of the empty array and boolean.
5. `NaN == NaN` → **`false`** because `NaN` is unequal to every value, including itself.

### 2. Loose Inequality `!=`

1. `"18" != 18` → **`false`** — the values are equal after conversion.
2. **No.** `"1234" != 1234` returns `false`, because loose comparison converts the string to a number.
3. ```text
   false
   false
   ```
4. ```text
   false
   false
   ```
   `null` and `undefined` are loosely equal, and `""` is loosely equal to `0`.
5. `NaN != NaN` → **`true`**, because `NaN == NaN` is false.

### 3. Strict Equality `===`

1. `"25" === 25` → **`false`** — the types differ (string vs number).
2. `0 === false` → **`false`**; `null === undefined` → **`false`**. Strict equality does not convert types.
3. ```text
   false
   false
   ```
4. ```text
   false
   false
   ```
   An empty string is not a number, and an array is not a boolean.
5. `===` is usually preferred because it compares without automatic type conversion, making results more predictable and avoiding many coercion-related bugs.

### 4. Strict Inequality `!==`

1. `"18" !== 18` → **`true`** — the types differ.
2. `0 !== false` → **`true`**; `null !== undefined` → **`true`**.
3. ```text
   true
   true
   ```
4. ```text
   true
   true
   ```
   The types differ in `"" !== 0`; `NaN` is not strictly equal to itself.
5. ```js
   if (input !== "0") {
       console.log("Input is not the string 0");
   }
   ```
