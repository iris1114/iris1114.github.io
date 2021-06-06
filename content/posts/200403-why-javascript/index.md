---
title: 'Why JavaScript #1'
author: Iris Chew
date: 2020-04-03
hero: ./images/js1.png
excerpt: This is the weekly writing challenge, i hope i can do it. Now is the perfect time to make a fresh start.
---

## Why Study JavaScript?

JavaScript is one of the 3 languages all web developers must learn:

-   HTML to define the content of web pages
-   CSS to specify the layout of web pages
-   JavaScript to program the behavior of web pages

## What Can JavaScript Do?

#### 1. JavaScript Can Change HTML Content

```html
<p id="demo">JavaScript can change HTML content.</p>
<script>
    document.getElementById('demo').innerHTML = 'hello JavaScript'
</script>
```

#### 2. JavaScript Can Change HTML Attribute Values

```html
<img id="myImage" src="pic_bulboff.gif" />
<script>
    document.getElementById('myImage').src = 'pic_bulbon.gif'
</script>
```

#### 3. JavaScript Can Change HTML Styles (CSS)

```html
<p id="demo">change the font size</p>
<script>
    document.getElementById('demo').style.fontSize = '35px'
</script>
```

#### 4. JavaScript Can Hide HTML Elements

```html
<p id="demo">Hello JavaScript!</p>
<script>
    document.getElementById('demo').style.display = 'none'
</script>
```

#### 5. JavaScript Can Show HTML Elements

```html
<p id="demo" style="display:none">Hello JavaScript!</p>
<script>
    document.getElementById('demo').style.display = 'block'
</script>
```
