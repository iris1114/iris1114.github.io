---
title: 'JavaScript Function Parameters #9'
author: Iris Chew
date: 2020-04-19
hero: ./images/js9.png
excerpt: A JavaScript function does not perform any checking on parameter values (arguments).
---

A JavaScript function does not perform any checking on parameter values (arguments).
_js function 不會針對參數進行檢查_

### Function Parameters and Arguments

-   Function parameters are the names listed in the function definition.
    _parameters(顯式參數)會在函數中定義時列出_

-   Function arguments are the real values passed to (and received by) the function.
    _argument(隱式參數)指的是在使用函數時傳遞(或收到)真正的值_

```javascript
function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}
```

### Parameter Rules

-   JavaScript function definitions do not specify data types for parameters.
    _不會規定 parameters 的資料型態_

-   JavaScript functions do not perform type checking on the passed arguments.  
    _不會對 argument 進行檢查_

-   JavaScript functions do not check the number of arguments received.
    _不會檢查 argument 的數量_

### Parameter Defaults

If a function is called with missing arguments (less than declared), the missing values are set to: undefined
_若沒給參數，則預設為 undefined，但建議可給於參數一個默認值_

```javascript
function myFunction(x, y) {
    if (y === undefined) {
        y = 0
    }
    return x * y //0
}
```

### The Arguments Object

JavaScript functions have a built-in object called the arguments object.The argument object contains an array of the arguments used when the function was called (invoked).

_js 本身有內建物件稱為 arguments object（包含陣列），當 function 被呼叫的時候可使用。_

```javascript
function findMax() {
    var i
    var max = -Infinity
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}
document.getElementById('demo').innerHTML = findMax(4, 5, 6)
```

```javascript
function sumAll() {
    var i
    var sum = 0
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
document.getElementById('demo').innerHTML = sumAll(1, 123, 500, 115, 44, 88) //871
```

### Arguments are Passed by Value

The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.

_在函數中調用的參數是函數的隱式參數。 JavaScript 隱式參數通過值來傳遞：函數僅僅只是獲取值。如果函數修改參數的值，不會修改顯式參數的初始值（在函數外定義）。隱式參數的改變在函數外是不可見的。_

### Objects are Passed by Reference

In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.

_在 JavaScript 中，可以引用對象的值。因此我們在函數內部修改對象的屬性就會修改其初始的值。修改對象屬性可作用於函數外部（全局變量）。修改對象屬性在函數外是可見的。_
