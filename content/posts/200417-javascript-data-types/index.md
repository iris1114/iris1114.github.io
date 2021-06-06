---
title: 'JavaScript Data Types #7'
author: Iris Chew
date: 2020-04-17
hero: ./images/js7.png
excerpt: JavaScript variables can hold many data types.
---

JavaScript variables can hold many data types: numbers, strings, booleans,undefined, objects and function.

### 1.Numbers

Numbers can be written with, or without decimals
Extra large or extra small numbers can be written with scientific (exponential) notation

```javascript
var x1 = 34.0 // Written with decimals
var x2 = 34 // Written without decimals
var y = 123e5 // 12300000
var z = 123e-5 // 0.00123
```

### 2.Strings

Strings are written with quotes. You can use single or double quotes:

```javascript
var carName1 = 'Volvo XC60' // Using double quotes
var carName2 = 'Volvo XC60' // Using single quotes
var answer2 = "He is called 'Johnny'" // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"' // Double quotes inside single quotes
```

### 3.Booleans

Booleans can only have two values: true or false.

```javascript
var x = 5
var y = 5
var z = 6
;(x == y)(
    // Returns true
    x == z
) // Returns false
```

### 4.Undefined

In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

```javascript
var car // Value is undefined, type is undefined
```

### 5.Objects

JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas.

```javascript
var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
```

### 6. Function

The typeof operator does not return "object" for functions.

```javascript
typeof function myFunc() {} // Returns "function"
```

### 7.Others

-   #### The Concept of Data Types
    When adding a number and a string, JavaScript will treat the number as a string.

```javascript
var x = 16 + 'Volvo' //16Volvo
var x = 'Volvo' + 16 //Volvo16
```

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```javascript
var x = 16 + 4 + 'Volvo' //20Volvo  treats 16 and 4 as numbers
var x = 'Volvo' + 16 + 4 //Volvo164 first operand is a string, all operands are treated as strings.
```

-   #### JavaScript Types are Dynamic
    the same variable can be used to hold different data types:

```javascript
var x // Now x is undefined
x = 5 // Now x is a Number
x = 'John' // Now x is a String
```

-   #### Arrays
    written with square brackets [], array items are separated by commas.
    The typeof operator returns "object" for arrays because in JavaScript arrays are objects.

```javascript
var cars = ['Saab', 'Volvo', 'BMW'] //type:object
```

-   #### The typeof Operator
    You can use the JavaScript typeof operator to find the type of a JavaScript variable.

```javascript
typeof 'John Doe' // Returns "string"
typeof 3.14 // Returns "number"
typeof (3 + 4) // Returns "number"
```

-   #### Empty Values
    An empty value has nothing to do with undefined.
    An empty string has both a legal value and a type.

```javascript
var car = '' // The value is "", the typeof is "string"
```

-   #### Null
    in JavaScript, the data type of null is an object.

```javascript
var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
person = null // Now value is null, but type is still an object
```

You can also empty an object by setting it to undefined:

```javascript
var person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
person = undefined // Now both value and type is undefined
```

-   #### Difference Between Undefined and Null
    undefined and null are equal in value but different in type:

```javascript
typeof undefined // undefined
typeof null // object

null === undefined // false
null == undefined // true
```

-   #### Primitive Data
    A primitive data value is a single simple data value with no additional properties and methods.
    The typeof operator can return one of these primitive types: string, number, boolean and undefined.

```javascript
typeof 'John' // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof false // Returns "boolean"
typeof x // Returns "undefined" (if x has no value)
```

-   #### Complex Data
    The typeof operator can return one of two complex types:function and object.

```javascript
typeof { name: 'John', age: 34 } // Returns "object"
typeof [1, 2, 3, 4] // Returns "object"
typeof null // Returns "object"
typeof function myFunc() {} // Returns "function"
```
