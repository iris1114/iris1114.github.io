---
title: 'JavaScript Syntax - Operators #6'
author: Iris Chew
date: 2020-04-16
hero: ./images/js6.png
excerpt: JavaScript uses arithmetic operators` ( + - * / )` to compute values
---

JavaScript uses arithmetic operators`( + - * / )` to compute values

JavaScript uses an assignment operator `( = )` to assign values to variables,not an "equal to" operator.

The "equal to" operator is written like `==` in JavaScript.

```javascript
;(5 + 6) * 10
var x, y
x = 5
y = 6
```

## 1. Arithmetic Operators

Arithmetic operators are used to perform arithmetic on numbers:
![](https://i.imgur.com/I0T9IWE.png)

-   ### Adding /Subtracting/Multiplying/Dividing/Remainder

```javascript
var x = 5
var y = 2
var z = x + y //7
var z = x - y //3
var z = x * y //10
var z = x / y //2.5
var z = x % y //1
```

-   ### Incrementing/Decrementing

```javascript
var x = 5
x++
var z = x //6
x--
var z = x //4
```

-   ### Exponentiation
    x \*\* y produces the same result as Math.pow(x,y):

```javascript
var x = 5
var z = x ** 2 //25
var z = Math.pow(x, 2) // 25
```

-   ### Operator Precedence
    Multiplication (\*) and division (/) have higher precedence than addition (+) and subtraction (-).

```javascript
var x = 100 + 50 * 3 //250
var x = (100 + 50) * 3 //450
```

-   ### Operator Precedence Values
    ![](https://i.imgur.com/dvMLUJ0.png)

---

## 2. Assignment Operators

Assignment operators assign values to JavaScript variables.

![](https://i.imgur.com/TaFk8I8.png)
[_image source_
](https://www.w3schools.com/js/js_operators.asp)

> The \*\*= operator is an experimental part of the ECMAScript 2016 proposal (ES7). It is not stable across browsers. Do not use it.

example:

```javascript
var x = 10
x += 5 //15
x -= 5 //5
x *= 5 //50
x /= 5 //2
x %= 5 //0
```

---

## 3. String Operators

The + operator can also be used to add (concatenate) strings.

```javascript
var txt1 = 'John'
var txt2 = 'Doe'
var txt3 = txt1 + ' ' + txt2 //John Doe
```

---

## 4. Adding Strings and Numbers

```javascript
var y = '5' + 5 //55
var z = 'Hello' + 5 //Hello5
```

---

## 5. Comparison Operators

![](https://i.imgur.com/NogKf0N.png)

-   ### Ternary Operator
    Syntax:

```
variablename = (condition) ? value1:value2
```

Example:

```javascript
var age = 30
var voteable = age < 18 ? 'Too young' : 'Old enough' //Old enough
```

-   ### Test true or false
    Given that x = 5

```javascript
x == 8 //false
x == 5 //true
x == '5' //true
x === 5 //true
x === '5' //false
x != 8 //true
x !== 5 //false
x !== '5' //true
x !== 8 //true
```

-   ### Comparing Different Types
    When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
    A non-numeric string converts to NaN which is always false.

```javascript
2 < '12' //true cover a string to number
2 < 'John' //false  NaN
2 > 'John' //false  NaN
2 == 'John' //false  NaN
'2' < '12' //false
'2' > '12' //true  //"2" will be greater than "12", because (alphabetically) 1 is less than 2.
'2' == '12' //false
```

---

## 6.Logical Operators

![](https://i.imgur.com/5QBYbmG.png)

Example:
Given that x = 6 and y = 3

```
(x < 10 && y > 1)  //true
(x == 5 || y == 5)  //false
!(x == y)  //false
```

---

## 7.Bitwise Operators

![](https://i.imgur.com/xFprLH7.png)
