---
title: "Day10: Hold Shift and Check Checkboxes"
author: JavaScript30
date: 2021-07-01
hero: ./images/hero.png
excerpt: "按住 Shift 鍵對多個 checkbox 進行勾選。"
---

專案介紹： 按住 Shift 鍵對多個 checkbox 進行勾選。

作品頁面：https://iris1114.github.io/javascript30/10_Hold-Shift-and-Check-Checkboxes/

## 做法

- 取得所有 checkbox 元素
- 用 forEach 跑，點擊元素再進行 handleCheck() 這個函式

## code

```javascript
const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  let inBetween = false; // 是否按著 Shift 鍵
  if (e.shiftKey && this.checked) {
    //檢查是否有按著 Shift 鍵以及是否被勾選
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      // 紀錄首先勾選的核取方塊到最後勾選的核取方塊
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; //此時inBetween = true
        console.log("Starting to check them in between!");
      }

      if (inBetween) {
        checkbox.checked = true; //inBetween = true 後進行勾選
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
```
