---
title: 'JavaScript Where To #2'
author: Iris Chew
date: 2020-04-04
hero: ./images/js2.png
excerpt: Where can place scipts at the html? Head? Body? External? or External References?
---

Old JavaScript examples may use a type attribute: `<script type="text/javascript">.`

The type attribute is not required. JavaScript is the default scripting language in HTML.

### 1.JavaScript in Head

```html
<head>
    <script>
        document.getElementById('demo').innerHTML = 'My First JavaScript'
    </script>
</head>

<body>
    <p id="demo"></p>
</body>
```

### 2.JavaScript in Body

```html
<body>
    <p id="demo"></p>
    <script>
        document.getElementById('demo').innerHTML = 'My First JavaScript'
    </script>
</body>
```

### 3.External JavaScript \*_(commonly used)_

```html
<body>
    <p id="demo">A Paragraph.</p>
    <script src="script.js"></script>
    <script src="script2.js"></script>
    //add several script files
</body>
```

Scripts can also be placed in external files (script.js) :

```javascript
function myFunction() {
    document.getElementById('demo').innerHTML = 'My First JavaScript'
}

window.addEventListener('load', myFunction)
```

-   External scripts cannot contain `<script>` tags.
-   It separates HTML and code
-   It makes HTML and JavaScript easier to read and maintain
-   Cached JavaScript files can speed up page loads

![](https://i.imgur.com/A1A5LPI.png)

### 4.External References \*_(commonly used)_

```html
<script src="https://www.w3schools.com/js/myScript1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

-   can be referenced with a full URL or with a path relative to the current web page.
-   can import the javaScript Package from[ cdnjs](https://cdnjs.com/) , it can make the Javascript resources load faster.
