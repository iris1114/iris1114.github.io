---
title: "JavaScript Function Definitions #8"
author: Iris Chew
date: 2020-04-18
hero: ./images/js8.png
excerpt: A JavaScript function is a block of code designed to perform a particular task.
secret: true
---

A JavaScript function is a block of code designed to perform a particular task.

### 1. JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs ([same rules as variables](https://iris1114.github.io/2020/04/04/js-w3s5/#Variables)).

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
  return parameter1 + parameter2;
}
```

### 2. Function Expressions

A function expression can be stored in a variable:

```javascript
var x = function(a, b) {
  return a * b;
};
```

After a function expression has been stored in a variable, the variable can be used as a function:

```javascript
var x = function(a, b) {
  return a * b;
};
var z = x(4, 3);
```

### 3. The Function() Constructor

Functions can also be defined with a built-in JavaScript function constructor called Function().

```javascript
var myFunction = new Function("a", "b", "return a * b");
```

> Most of the time, you can avoid using the new keyword in JavaScript.

### 4. Self-Invoking Functions

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

The function above is actually an anonymous self-invoking function (function without name).

```javascript
(function() {
  var x = "Hello!!"; // I will invoke myself
})();
```

### 5. Arrow Functions

Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

```javascript
// ES5
var x = function(x, y) {
  return x * y;
};

// ES6
const x = (x, y) => x * y;
```

### 6. Other

Functions can Be used as values
JavaScript functions can be used in expressions.

```javascript
function myFunction(a, b) {
  return a * b;
}

var x = myFunction(4, 3);
var x = myFunction(4, 3) * 2;
```

Functions are Objects

The typeof operator in JavaScript returns "function" for functions.

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received when the function was invoked:

```javascript
function myFunction(a, b) {
  return arguments.length;
}
```

The toString() method returns the function as a string:

```javascript
function myFunction(a, b) {
  return a * b;
}

var txt = myFunction.toString();
```
