---
title: "Day12: Key Sequence Detection"
author: JavaScript30
date: 2021-07-05
hero: ./images/hero.png
excerpt: "按下密碼後，在頁面顯示一些驚喜的圖片。"
---

專案介紹： 按下密碼後，在頁面顯示一些驚喜的圖片。

作品頁面： https://iris1114.github.io/javascript30/12_Key-Sequence-Detection/

## code

```javascript
const pressed = [];
const secretCode = "ok";

window.addEventListener("keyup", (e) => {
  //把按下的鍵盤元素加入陣列
  pressed.push(e.key);

  //透過運算使pressed陣列長度始終與設定密碼相同，且當超出時替換掉陣列第一個元素
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  //判斷輸入值陣列的內容是否與設定密碼相同
  if (pressed.join("").includes(secretCode)) {
    cornify_add();
  }
});
```

## 補充

### splice()

`splice(start, deleteCount, item1, item2, ...)`可以對陣列內容過行刪除或新增。

`start`: 陣列中要開始改動的元素索引
`delete`: 一個表示欲刪除的原陣列元素數量的整數
`item1, item2, ...`: 從 start 開始，要加入到陣列的元素。

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); //["Jan", "Feb", "March", "April", "June"]

const arr = [1, 2, 3];
arr.splice(0, 1); //[2,3]
```

### join()

`arr.join([separator])` , 會將陣列中所有的元素連接、合併成一個字串，並回傳此字串。

`separator`:如果未傳入此參數，陣列中的元素將預設用英文逗號（「,」）隔開。如果 separator 是空字串，合併後，元素間不會有任何字元。

```javascript
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"
```

### includes()

`arr.includes(searchElement[, fromIndex])` 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。

```javascript
const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false
```

## 參考資料

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
