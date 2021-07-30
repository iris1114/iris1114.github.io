---
title: "Day9: Dev Tools Domination"
author: JavaScript30
date: 2021-06-29
hero: ./images/hero.png
excerpt: "DOM break on & 練習 console 用法"
---

專案介紹： DOM break on & 練習 console 用法

作品頁面：https://iris1114.github.io/javascript30/09_Dev-Tools-Domination/index.html (請打開 console)

## Breakpoints

有三種觸發模式(可複選)：

- subtree modifications 當添加、改變、刪除子元素時觸發
- attributes modifications 當元素屬性發生改變時觸發
- node removal 當移除元素時觸發

![](https://i.imgur.com/3a8VTvu.png)

## console 用法

### 1. console.log()

```javascript
console.log("test");
```

### 2. console.log(‘%s’, value)

可將字串中的%s 顯示為指定的參數

```javascript
console.log("Interpolated - my name is  %s .", "iris"); //字串
console.log("Interpolated - %f dollars .", 2.55); //浮點數
console.log("Interpolated - %d dollars.", 4.55); //整數
```

### 3. console.log(‘%c’, style)

可將字串顯示為參數中帶入的 css 樣式

```javascript
console.log("%cI am console style", "font-size:50px; background:red;");
```

### 4. console.warning()

```javascript
console.warn("OH NOOO");
```

### 5. console.error()

```javascript
console.error("Shit!");
```

### 6. console.info()

```javascript
console.info("Crocodiles eat 3-4 people per year");
```

### 7. console.assert()

可以拿來測試判斷是否為真，若為 false 則回傳對應的錯誤訊息。

```javascript
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");
```

### 8. console.clear()

清除 console 的所有訊息。

```javascript
console.clear();
```

### 9. console.dir()

顯示元素的所有屬性。

```javascript
console.dir(p);
```

### 10. console.group() 及 console.groupEnd()

群組化輸出資訊。 console.groupCollapsed() 會進行摺疊群組化資訊。

```javascript
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
```

### 11. console.count()

累加指定內容出現的次數。

```javascript
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
```

### 12. console.time()

計算指定任務執行的時間。

```javascript
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
```

### 13. console.table()

把資料整理成 table 格式方便瀏覽。

```javascript
console.table(dogs);
```

## 參考資料

https://guahsu.io/2017/06/JavaScript30-09-Dev-Tools-Domination/
