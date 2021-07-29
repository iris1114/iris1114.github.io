---
title: "Day7: Array Cardio Day 2"
author: JavaScript30
date: 2021-06-25
hero: ./images/hero.png
excerpt: "練習 array 第二波， 包含 some、 every、 find、 findIndex、slice"
---

專案介紹： 練習 array 第二波， 包含 some、 every、 find、 findIndex、slice

作品頁面：https://iris1114.github.io/javascript30/07_Array-Cardio-Day-2/index.html (無畫面，請打開 console)

## 題目資料

題目給了 2 組資料，總共 5 道題目， people 資料用於第 1-2 題 ， comments 資料用於第 3-5 題 。

```javascript
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
```

## 1. is at least one person 19 or older?

方法： 使用 `some()` 測試陣列中是否至少有一個元素符合判斷，如果至少有一個符合回傳 true, 沒有的話則回傳 false 。

Ans:

```javascript
const ans1 = people.some((person) => {
  return new Date().getFullYear - person.year >= 19;
});

console.log("some():", ans1); //true
```

---

## 2. is everyone 19 or older?

方法： 使用 every() 測試陣列中的所有元素是否都符合判斷，如果都符合回傳 true, 沒有則回傳 false 。

Ans:

```javascript
const ans2 = people.every((person) => {
  return new Date().getFullYear - person.year >= 19;
});

console.log("every():", ans2); //false
```
---

## 3. find the comment with the ID of 823423.

方法： 使用 find() 會回傳第一個滿足所提供之測試函式的元素值。否則回傳 undefined。

Ans:

```javascript
const ans3 = comments.find((comment) => {
  return comment.id === 823423;
});

console.log("find()", ans3); //{text: "Super good", id: 823423}
```

---

## 4. Find the index with this ID of 823423.

方法： 使用 findIndex(), 依據提供的測試函式，尋找陣列中符合的元素，並返回其 index（索引）。如果沒有符合的對象，將返回 -1 。

Ans:

```javascript
const index = comments.findIndex((comment) => {
  return comment.id === 823423;
});

console.log("findIndex()", index); //1
```

---

## 5. delete the comment with the ID of 823423.

方法： 使用 slice()， 會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。特別注意，如果使用 splice() 則會藉由刪除既有元素並／或加入新元素來改變原本陣列的內容。

Ans:

```javascript
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

console.log("newComments", newComments);
```

---

## 參考資料

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find
