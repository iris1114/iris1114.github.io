---
title: "JavaScript Function Invocation #11"
author: Iris Chew
date: 2020-04-21
hero: ./images/js11.png
excerpt: JavaScript variables can belong to the local or global scope.Global variables can be made local (private) with closures.
secret: true
---

JavaScript variables can belong to the local or global scope.Global variables can be made local (private) with closures.

### local or global scope

```javascript
function myFunction() {
  var a = 4; //local variable
  return a * a;
}
```

```javascript
var a = 4; //global variable
function myFunction() {
  return a * a;
}
```

> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

### A Counter Dilemma 计数器困境

You could use a global variable, and a function to increase the counter.
_你可以使用全局變量，函數設置計數器遞增。_

```javascript
// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
```

There is a problem with the solution above: Any code on the page can change the counter, without calling add().
The counter should be local to the add() function, to prevent other code from changing it
_問題來了，頁面上的任何腳本都能改變計數器，即便沒有調用 add() function。如果在函數內聲明計數器，如果沒有調用函數將無法修改計數器的值_

```javascript
// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 0
```

A JavaScript inner function can solve this.JavaScript _內嵌函數可以解決該問題。_

### JavaScript Nested Functions 内嵌函数

the inner function plus() has access to the counter variable in the parent function
_內嵌函數 plus() 可以訪問父函數的 counter 變量：_

```javascript
function add() {
  var counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter; //1
}
```

This could have solved the counter dilemma, if we could reach the plus() function from the outside.
We also need to find a way to execute counter = 0 only once.We need a closure.
_如果我們能在外部訪問 plus() 函數，這樣就能解決計數器的困境。我們同樣需要確保 counter = 0 只執行一次。我們需要閉包函數。_

### JavaScript Closures

```javascript
var add = (function() {
  var counter = 0;
  return function() {
    return (counter += 1);
  };
})();

add(); //1
add(); //2
add(); //3
```

The variable add is assigned the return value of a self-invoking function.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

_變量 add 指定了函數自我調用的返回字值。 add 變量可以作為一個函數使用。非常棒的部分是它可以訪問函數上一層作用域的計數器。這個叫作 JavaScript 閉包。它使得函數擁有私有變量變成可能。計數器受匿名函數的作用域保護，只能通過 add 方法修改。_

\*_source w3school_
