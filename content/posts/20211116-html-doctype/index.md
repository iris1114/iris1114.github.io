---
title: "DOCTYPE 是什麼"
author: HTML
date: 2021-11-16
hero: ./images/hero.png
excerpt: "在 HTML 文件一開始第一行我們都要寫上 DOCTYPE"
---

# `DOCTYPE` 是什麼？

在 HTML 文件一開始第一行我們都要寫上 DOCTYPE：

```
<!DOCTYPE html>
```

### DOCTYPE 有什麼用？

`DOCTYPE` 是 document type 的縮寫，他不是 HTML tag，是用來聲明文件類型，告訴瀏覽器這份文件是屬於什麼文件類型。

現在的網頁基本上都使用`<!DOCTYPE html>` 來告知瀏覽器這是一份標準的 HTML5 文件。

---

### 標準模式（Standards mode） 與 怪異模式（Quirks mode）

標準模式： 依照現今 HTML 與 CSS 規範來渲染網頁。

怪異模式： 如果沒有宣告 DOCTYPE、宣告錯誤的 DOCTYPE、 放任何東西在 DOCTYPE 前面、會造成瀏覽器無法預期的行為，像是渲染 (render) CSS 排版時怎麼和你想要的不太一樣，稱之為瀏覽器處於怪異模式 (Quirks mode)。

---

### HTML 文檔類型

1. 在 HTML5 中，<!DOCTYPE>聲明很簡單：

```
<!DOCTYPE html>
```

2. 在較舊的文檔（HTML 4 或 XHTML）中，聲明更複雜，因為聲明必須引用 DTD（文檔類型定義）。

HTML 4.01：

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

XHTML 1.1：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

---

### 其他

1. 所有 HTML 文檔都必須以<!DOCTYPE>聲明開頭。

```htmlmixed=
<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
</head>
<body>
The content of the document......
</body>
</html>

```

2. `<!DOCTYPE>`聲明是不區分大小寫。

```
<!DOCTYPE html>
<!DocType html>
<!Doctype html>
<!doctype html>
```

---

### 參考資料

https://www.fooish.com/html/doctype.html
https://ithelp.ithome.com.tw/articles/10236447
https://developer.mozilla.org/zh-TW/docs/Web/HTML/Quirks_Mode_and_Standards_Mode
https://www.w3schools.com/tags/tag_doctype.asp
