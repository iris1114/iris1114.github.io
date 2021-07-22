---
title: "Day2:  JS and CSS Clock"
author: JavaScript30
date: 2021-06-15
hero: ./images/hero.png
excerpt:
---

專案介紹： 實作一個時鐘。

作品頁面： https://iris1114.github.io/javascript30/02_JS-and-CSS-Clock/index.html

### 1. 做法：

- 取得目前時、分、秒
- 取得時、分、秒角度
- 再去改變時、分、秒 style transform
- 初始執行 及 每秒再去執行

### 2. 取得時、分、秒角度

這個是我覺得最混亂的部分，因為我數學不太好 XD 紀錄一下計算方法：

```javascript
const secondsDegrees = seconds * 6; // （360度/60秒= 1秒6度 ）
const minsDegrees = mins * 6 + (seconds * 6) / 60; //（360度/60分鐘= 1分鐘6度 ，目前分鐘*6度）+ （目前秒*6度/60秒）
const hourDegrees = hour * 30 + (mins * 30) / 60; //（360度/12小時 = 1小時30度， 目前小時*30度）+（目前分鐘*30度/60分鐘）
```

在時針的部分，為什麼還要加後面的 (mins * 30 / 60) 呢？ 因為當目前時間為 1145 時，時針也會趨近 12 的方向，所以需加入（目前分鐘*30 度/60 分鐘），讓時針跟著一起動，而不會一直只指向 11 點。

### 3. setInterval & setTimeOut & requestAnimationFrame

setInterval ： 固定延遲了某段時間之後，才去執行對應的程式碼，然後「不斷循環」

setTimeOut： 是在延遲了某段時間 (單位為毫秒) 之後，才去執行「一次」指定的程式碼

requestAnimationFrame() ：通知瀏覽器我們想要產生動畫，並且要求瀏覽器在下次重繪畫面前呼叫特定函數更新動畫。處理畫面更新的 setTimeOut。

### 4. code

```javascript
(() => {
  const hourHand = document.querySelector(".hour-hand");
  const minsHand = document.querySelector(".min-hand");
  const secondsHand = document.querySelector(".second-hand");

  const setTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = seconds * 6; // （360度/60秒= 1秒6度 ）
    const minsDegrees = mins * 6 + (seconds * 6) / 60; //（360度/60分鐘= 1分鐘6度 ，目前分鐘*6度）+ （目前秒*6度/60秒）
    const hourDegrees = hour * 30 + (mins * 30) / 60; //（360度/12小時 = 1小時30度， 目前小時*30度）+（目前分鐘*30度/60分鐘）

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  };

  setInterval(setTime, 1000);
  setTime(); //初始化畫面
})();
```

### 5. 參考資料

https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform
https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/
https://developer.mozilla.org/zh-TW/docs/Web/API/window/requestAnimationFrame
