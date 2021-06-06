---
title: 'JavaScript Statements #4'
author: Iris Chew
date: 2020-04-14
hero: ./images/js4.png
excerpt: There're five output in javascript
---

### 1.Semicolons

Add a semicolon at the end of each executable statement:

```javascript
var a, b, c // Declare 3 variables
a = 5 // Assign the value 5 to a
b = 6 // Assign the value 6 to b
c = a + b // Assign the sum of a and b to c
a = 5
b = 6
c = a + b //multiple statements on one line are allowed
```

### 2.White Space

A good practice is to put spaces around operators ( = + - \* / ):

```javascript
var x = y + z
var person = 'Hege'
```

### 3.Line Length and Line Breaks

If a JavaScript statement does not fit on one line, the best place to break it is after an operator

```javascript
document.getElementById('demo').innerHTML = 'Hello Dolly!'
```

### 4.Code Blocks{}

The purpose of code blocks is to define statements to be executed together.

```javascript
function myFunction() {
    document.getElementById('demo1').innerHTML = 'Hello Dolly!'
    document.getElementById('demo2').innerHTML = 'How are you?'
}
```

### 5.Keywords

In JavaScript you cannot use these reserved words as variables, labels, or function names:
https://www.w3schools.com/js/js_reserved.asp

### 6.Comments

Code after double slashes `//` or between `/*` and `*/` is treated as a comment.

-   #### Single Line Comments
    Single line comments start with //.

```javascript
// Change heading:
document.getElementById('myH').innerHTML = 'My First Page'
```

-   #### Multi-line Comments
    Multi-line comments start with /_ and end with _/.

```javascript
/*
The code below will change
the heading with id = "myH"
*/
```

### 7. Others

-   Numbers are not allowed as the first character.
-   In JavaScript, the first character must be a letter, or an underscore (\_), or a dollar sign (\$).
-   All JavaScript identifiers are case sensitive.
-   JavaScript does not interpret VAR or Var as the keyword var.
-   Hyphens are not allowed in JavaScript. They are reserved for subtractions. (ex.`first-name`)
-   Underscore `first_name`/Upper Camel Case`FirstName` /Lower Camel Case `firstName` are allowed in JavaScript.
-   JavaScript programmers tend to use camel case that starts with a lowercase letter (ex.`firstName`)
-   JavaScript uses the Unicode character set. [Complete Unicode Reference.](https://www.w3schools.com/charsets/ref_html_utf8.asp)
-   All JavaScript variables must be identified with unique names.
-   Reserved words [(like JavaScript keywords)](https://www.w3schools.com/js/js_statements.asp) cannot be used as names
