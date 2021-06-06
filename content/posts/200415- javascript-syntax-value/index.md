---
title: 'JavaScript  Syntax - Value #5'
author: Iris Chew
date: 2020-04-15
hero: ./images/js5.png
excerpt: Fixed values are called literals. Variable values are called variables.
---

### literals

-   Numbers are written with or without decimals:

```javascript
10.50 or 1001
```

-   Strings are text, written within double or single quotes:

```javascript
"John Doe" or 'John Doe'
```

### Variables

-   JavaScript uses the var keyword to declare variables.

```javascript
var x
x = 6
or
var x = 6
```

-   Start the statement with var and separate the variables by comma:

```javascript
var person = 'John Doe',
    carName = 'Volvo',
    price = 200
```

-   Re-Declaring Variables
    If you re-declare a JavaScript variable, it will not lose its value.

```javascript
var carName = 'Volvo'
var carName
```

-   Arithmetic
    As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

```javascript
var x = 5 + 2 + 3
```

-   Dollar Sign $
Remember that JavaScript identifiers (names) must begin with:
A letter (A-Z or a-z)
A dollar sign ($)
    Or an underscore (\_)

```javascript
var $ = 2
var $myMoney = 5
var _lastName = 'Johnson'
```

### Undefined

A variable declared without a value will have the value undefined.

```javascript
var carName //undefined
```
