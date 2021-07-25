---
title: "Day3: CSS Variables"
author: JavaScript30
date: 2021-06-17
hero: ./images/hero.png
excerpt: "使用 JavaScript 及 CSS3 去調整圖片的邊框間距、模糊度、及背景顏色，標題 JS 也隨著背景顏色而改變。"
---

專案介紹： 使用 JavaScript 及 CSS3 去調整圖片的邊框間距、模糊度、及背景顏色，標題 JS 也隨著背景顏色而改變。

作品頁面： https://iris1114.github.io/javascript30/03_CSS-Variables/index.html

### 1. 做法：

- 建立 css 變數
- 當改變間距、模糊度、背景色時，用 js 動態改變 css 的值

### 2. CSS 變數的使用

`:root` 工作中都沒有機會用過，看了 Amos 文章才知道主要是搭配 css 變數來應用。主要分為建立變數及套用變數。

建立變數可建立全域變數或是區域變數。全域則可以使用該變數，則區域就只有建立的區域能使用。

而套用變數，只要在要套用的地方使用關鍵字 var( ) 並在括號內寫上變數名稱，就套用成功了。

```css
/*建立 css 全域變數*/
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

/*建立 css 區域變數*/
.section {
  --base-area: #ffc600;
}

/* 套用變數 */
img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

### 3. input element

當一個 `<input>`, `<select>`, 或 `<textarea>` 元素的 value 被修改時，會觸發 input 事件。

注意： 每當元素的 value 改變，input 事件都會被觸發。這與 change 事件不同。 change 事件僅當 value 被提交時觸發。

原本我是使用 change 事件，但上網看到有人使用 input, 才知道只要 value 改變就會被觸法，這對於更換背景色的 UX 效果更好，所以最後使用了 input 事件。

### 4. 動態改變 CSS

可以利用 `document.documentElement.style.setProperty('--<varName>', '<varValue>')` 來動態修改 CSS 變數的值。

```javascript
document.documentElement.style.setProperty(
  `--${this.name}`,
  `${this.value}${suffix}`
);
```

### 5. code

```javascript
(() => {
  const inputs = document.querySelectorAll("input");

  function changeHandle() {
    const suffix = this.name === "base" ? "" : "px"; //記得加px,背景色則不用px
    document.documentElement.style.setProperty(
      `--${this.name}`,
      `${this.value}${suffix}`
    );
  }

  inputs.forEach((input) => {
    input.addEventListener("input", changeHandle);
  });
})();
```

### 6. 參考資料

https://ithelp.ithome.com.tw/articles/10228111
https://pjchender.dev/js30/js30-day03/
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/input_event
