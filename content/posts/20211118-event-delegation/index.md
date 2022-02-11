---
title: "什麼是事件委託（Event Delegation）"
author: JavaScript
date: 2021-11-18
hero: ./images/hero.png
excerpt: "事件委託，就是利用冒泡原理，把事件監聽器委託給父層，觸發執行。"
---

事件委託，就是利用冒泡原理，把事件監聽器委託給父層，觸發執行。

不用每個子元素都單獨設定事件監聽器。在觸發子元素時，事件會冒泡到父層，父層監聽器就會觸發。

優點是：

1. 減少監聽器的數量，提高效能，因為只需要綁定在父元素上。
2. 對於新增或刪除的子元素也不需再額外設定事件監聽器。

缺點是：

1. 需要判斷哪些子元素是我們要執行的項目

---

### 程式 demo

![](https://i.imgur.com/L2an6Fp.gif)

```html
<div id="container">
  <div class="card">
    <h2>Card 1</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <button class="remove_btn">delete</button>
  </div>
  <div class="card">
    <h2>Card 2</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <button class="remove_btn">delete</button>
  </div>
  <div class="card">
    <h2>Card 3</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <button class="remove_btn">delete</button>
  </div>
</div>
```

```javascript
document.getElementById("container").addEventListener("click", (event) => {
  const target = event.target;

  if (target.className === "remove_btn") {
    target.closest(".card").remove();
  }
});
```

如上圖，我們要的效果就是刪除 card。應用事件委託的方法就是，將`click`事件綁定在父層 `container` 上， 在點擊子層 `remove_btn` 時，藉由冒泡到父層執行程式。過程中就需要判斷如果 class name 是 `remove_btn` ，才將離該元素最近的父層`card`刪除。

---

## 參考資料

- https://cythilya.github.io/2015/07/08/javascript-event-delegation/
- https://javascript.info/event-delegation
- https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest
