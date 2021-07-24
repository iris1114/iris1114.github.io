---
title: "Day5: Flex Panels"
author: JavaScript30
date: 2021-06-21
hero: ./images/hero.png
excerpt:
---

專案介紹： 練習 css flex 及 js 點擊圖片做展開效果

作品頁面： https://iris1114.github.io/javascript30/05_Flex-Panel-Gallery/index.html

### 1. 做法：

- 用 flex 進行排版
- 點擊圖片，新增 2 種效果
- 2 種效果： 圖片放大 、 上下文字出現

### 2. 用 flex 進行排版

使用 flex 將版面排好，並用 transform 把第一和最後一個文字移至畫面外。

```css
/*  在 panels 新增 flex 屬性 */

.panels {
  display: flex;
}

/* 每個 panel 比例為1
要使文字垂直置中，direction 為 column */

.panel {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
}

/* panel 的第一個p和最後一個p移至畫面外 */
.panel p:first-child {
  transform: translateY(-100vh);
}

.panel p:last-child {
  transform: translateY(100vh);
}
```

### 3. 點擊圖片，新增 2 種效果

其兩種效果的 className 為 .open 及 .show-text。

```css
/* 畫面佔比放大 */
.panel.open {
  font-size: 40px;
  flex-grow: 3;
}

/* 將文字移動至原來位置 */
.panel.show-text :first-child,
.panel.show-text :last-child {
  transform: translateY(0px);
}
```

### 4. JavaScript 處理

先取得所有 panel，當點擊時 toggle 要暫時的 css 效果， 就把兩個 className 加入即可。

```javascript
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("open");
    panel.classList.toggle("show-text");
  });
});
```

wesbos 版本， 他有使用 transitionend , 當 CSS transition 結束後觸發 toggleActive function 。

```javascript
// wesbos's method
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
```

### 5. 參考資料

https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform
https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList
