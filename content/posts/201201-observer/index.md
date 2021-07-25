---
title: "Observer 好強大 - IntersectionObserver 筆記"
author: JavaScript
date: 2020-12-01
hero: ./images/observer.png
excerpt: 昨天上班接到一個需求是當畫面滑動到某個位置的時候，送出 GA 事件。菜菜的我只想到用 scroll 來監聽去算 offsetTop 等等
---

昨天上班接到一個需求是當畫面滑動到某個位置的時候，送出 GA 事件。菜菜的我只想到用 scroll 來監聽去算 offsetTop 等等，主管說可以用 observer 去處理，才發現了強大的 observer。

用 scroll 也不是不行，只是這種方法的缺點是，由於 scroll 事件密集發生，計算量很大，容易造成性能問題。而 observer 可以非同步自動觀察目標物， 就是當目標物出現在觀察器（window）的時候才會 callback，降低了主執行緒（main thread）的負擔 (JS 是 Single Thread 程式)，大幅提升效能。

## IntersectionObserver HowTo

### 1. 建立觀察器（observer）

```javascript
const observer = new IntersectionObserver(callback, [option]);
```

### 2. 可指定參數：callback

callback 就是當目標物（entry）進入到觀察器的鏡頭（root）內時，要做什麼事的 function。

callback 帶進來的都會是陣列，不管觀察的目標物是 1 個或多個

```javascript
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

callback 的項目：

```javascript
[
  {
    // ReadOnly：目標元素的矩形區域的信息
    boundingClientRect: {
      /* ... */
    },

    // 目標物的可見比例
    intersectionRatio: 1,

    // ReadOnly：目標物與root的交叉區域
    intersectionRect: {
      /* ... */
    },

    // 是否出現在鏡頭(root))中
    isIntersecting: true,

    // ReadOnly：鏡頭(root)的資訊
    rootBounds: {
      /* ... */
    },

    // 目標物本身
    target: 獵物的DOM節點,
  },
];
```

### 3. 可指定參數：option

option 就是調整觀察器的鏡頭用的。option 是選填，不填就是預設值。如果沒有需求，可以只寫 callback 即可。

```javascript
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1,
};
```

- root 必須是目標元素的父級元素。root 的預設是 null，root 為 null 時就代表鏡頭就是你的視窗，就是螢幕正在看的區域。
- rootMargin 的預設值是"0px 0px 0px 0px"。4 個值分別代表上、右、下、左，這個是放大或縮小鏡頭的邊界用的。比方你的螢幕只有 13 寸，但你想讓鏡頭的範圍拉大到 15 寸，這樣就可以讓目標離不開你的視線，那就填 rootMargin 來拉大。

- threshold 指目標物出現了多少部份在你的鏡頭裡，而出現的部份到了指定的百分比後，都會執行 callback，下面例子則以[0, 0.25, 0.5, 0.75, 1]去做設定。

![](https://i.imgur.com/Z40SqXH.gif)

### 4. 開始 observe

定義要觀察的目標物，再用建立好的觀察器（observer）去觀察 （observe）即可。
也有另外兩個方法（取消觀察/關閉觀察器）可以去執行。

```javascript
let target = document.querySelector(".container");
observer.observe(target);
```

- 開始觀察某個目標物：observer.observe(target);
- 取消觀察某個目標物：observer.unobserve(target);
- 關掉這個觀察器：observer.disconnect();

### 5. demo

```html
<h1>IntersectionObserver Sample</h1>
<div class="box box1">box1</div>
<div class="box box2">box2</div>
<div class="box box3">box3</div>
```

```css
.box {
  height: 500px;
  background: #ccc;
  margin-bottom: 30px;
}

.box2 {
  background: #add;
}

.box3 {
  background: #809;
}
```

```javascript
let init = () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //當目標物進入，即可執行想做的程式
        let box = entry.target;
        console.log("entry", entry);
        console.log("box3", box);
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector(".box3");

  observer.observe(target);
};

init();
```

https://codesandbox.io/s/intersectionobserver-f7dlt?file=/src/index.js

---

reference:

https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
https://letswrite.tw/intersection-oserver-basic/
http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html

圖片來源：
https://developers.google.com/web/updates/2016/04/intersectionobserver
