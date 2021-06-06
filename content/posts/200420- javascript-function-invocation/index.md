---
title: 'JavaScript Function Closures #10'
author: Iris Chew
date: 2020-04-20
hero: ./images/js10.png
excerpt: The code inside a function is not executed when the function is defined.The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function".
---

The code inside a function is not executed when the function is defined.The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function", but JavaScript function can be invoked without being called.

<!--more-->

> #### The this Keyword
>
> Note that this is not a variable. It is a keyword. You cannot change the value of this.
> _this 是保留關鍵字，不能修改 this 的值。_

### The Global Object

When a function is called without an owner object, the value of this becomes the global object.
_當函數沒有被自身物件調用時 this 的值就會變成全局物件。在 web 瀏覽器中全局物件是 window。_

```javascript
var x = myFunction() // x will be the window object
function myFunction() {
    return this
}
document.getElementById('demo').innerHTML = x //[object Window]
```

### Invoking a Function as a Method

In JavaScript you can define functions as object methods.
_在 JavaScript 中你可以將函數定義為物件的方法。_

```javascript
var myObject = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
}
document.getElementById('demo').innerHTML = myObject.fullName() // Will return "John Doe"
```

The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

```javascript
var myObject = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this
    },
}
document.getElementById('demo').innerHTML = myObject.fullName() // Will return [object Object]
```

### Invoking a Function with a Function Constructor

If a function invocation is preceded with the new keyword, it is a constructor invocation. It looks like you create a new function, but since JavaScript functions are objects you actually create a new object.
_如果函數調用前使用了 new 關鍵字, 則是調用了構造函數。 這看起來就像創建了新的函數，但實際上是重新創建了 object。_

```javascript
// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1
    this.lastName = arg2
}

// This creates a new object
var x = new myFunction('John', 'Doe')
x.firstName // Will return "John"
```

### The JavaScript call() Method

The call() method is a predefined JavaScript method.
With call(), an object can use a method belonging to another object.

```javascript
var person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
}
var person1 = {
    firstName: 'John',
    lastName: 'Doe',
}
var person2 = {
    firstName: 'Mary',
    lastName: 'Doe',
}
person.fullName.call(person1) // Will return "John Doe"
```

### The call() Method with Arguments

The call() method can accept arguments:

```javascript
var person = {
    fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country
    },
}
var person1 = {
    firstName: 'John',
    lastName: 'Doe',
}
person.fullName.call(person1, 'Oslo', 'Norway')
```

### The JavaScript apply() Method

The apply() method is similar to the call() method

```javascript
var person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
}
var person1 = {
    firstName: 'Mary',
    lastName: 'Doe',
}
person.fullName.apply(person1) // Will return "Mary Doe"
```

### The Difference Between call() and apply()

The call() method takes arguments separately.
The apply() method takes arguments as an array.

```javascript
var person = {
    fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country
    },
}
var person1 = {
    firstName: 'John',
    lastName: 'Doe',
}
person.fullName.apply(person1, ['Oslo', 'Norway'])
person.fullName.call(person1, 'Oslo', 'Norway')
```

### Simulate a Max Method on Arrays

```javascript
Math.max(1, 2, 3) // Will return 3
Math.max.apply(null, [1, 2, 3]) // Will also return 3
Math.max.apply(Math, [1, 2, 3]) // Will also return 3
Math.max.apply(' ', [1, 2, 3]) // Will also return 3
Math.max.apply(0, [1, 2, 3]) // Will also return 3
```

### JavaScript Strict Mode

In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.

在 JavaScript 嚴格模式(strict mode)下, 在調用函數時第一個參數會成為 this 的值， 即使該參數不是一個物件。 在 JavaScript 非嚴格模式(non-strict mode)下, 如果第一個參數的值是 null 或 undefined, 它將使用全局對象替代。
