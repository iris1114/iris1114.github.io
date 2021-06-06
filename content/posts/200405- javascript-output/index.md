---
title: 'JavaScript Output #3'
author: Iris Chew
date: 2020-04-05
hero: ./images/js3.png
excerpt: There're five output in javascript
---

There're five output in javascript :
innerHTML / document.write() / window.alert() / console.log() / window.print()

### 1.Using innerHTML

```html
<p id="demo"></p>
<script>
    document.getElementById('demo').innerHTML = 5 + 6
</script>
```

-   Changing the innerHTML property of an HTML element is a common way to display data in HTML.

### 2.Using document.write()

```html
<p>My first paragraph.</p>
<script>
    document.write(5 + 6)
</script>
```

-   Using document.write() after an HTML document is loaded, will delete all existing HTML
-   The document.write() method should only be used for testing.

### 3.Using window.alert()

```html
<script>
    window.alert(5 + 6)
</script>
```

### 4. Using console.log() \*_(commonly used)_

```html
<script>
    console.log(5 + 6)
</script>
```

-   For debugging purposes, you can call the console.log() method in the browser to display data.

### 5. JavaScript Print

```html
<button onclick="window.print()">Print this page</button>
```
