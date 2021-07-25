---
title: "Day4:  Array Cardio 1 💪"
author: JavaScript30
date: 2021-06-19
hero: ./images/hero.png
excerpt: "練習 array 的應用，包含 filter 、 map 、 sort 、 reduce"
---

專案介紹： 練習 array 的應用，包含 filter 、 map 、 sort 、 reduce

作品頁面： https://iris1114.github.io/javascript30/04_Array-Cardio-Day-1/index.html (無畫面，請打開 console)

### 題目資料

題目給了 3 組資料，總共 8 道題目， inventors 資料用於 1-5 題 ， people 資料用於第 7 題， data 資料用在第 8 題。

```javascript
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
```

### Q1. Filter the list of inventors for those who were born in the 1500's

- 方法 : 使用 filter() 去篩選符合條件的元素。filter() 會建立新陣列並回傳符合的元素。

- Ans:

```javascript
const ans1 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return inventor;
  }
});

console.table(ans1);
```

- 參考： https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---

### Q2. Give us an array of the inventors first and last names

- 方法： 使用 map() 回傳 inventors 的 first last names 。map() 也會產生新陣列，並回傳你所需要的值。

- Ans:

```javascript
const ans2 = inventors.map((inventor) => {
  return `${inventor.first}  ${inventor.last}`;
});

console.table(ans2);
```

- 參考： https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

### Q3. Sort the inventors by birthdate, oldest to youngest

- 方法： 使用 sort() 排序生日。sort() 則不會產生新陣列， 對原陣列進行排序，並回傳此陣列。
  但要注意的是排序不一定穩定，排序順序是根據字串的 Unicode 編碼位置而定。

- Ans:

```javascript
const ans3 = inventors.sort((a, b) => {
  return a.year - b.year;
});

console.table(ans3);
```

- 補充：

```javascript
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

以上例子，不是我們預想的排序，因為元素將被轉換為字串並以 Unicode 編碼位置進行比較來排序。所以這時候我們就需要使用`compareFunction` 來做比較。

語法： `arr.sort([compareFunction])`

如果 compareFunction 被應用，陣列元素們將根據比較函式之回傳值來排序。如果 a 和 b 為被比較之兩元素， a 小於 b ，則 a 排在 b 前面。 a 大於 b， 則 a 排在 b 後面。回傳 0，則 a 與 b 皆不會改變彼此的順序。

函式會是以下形式（用於第 7 題作法）：

```javascript
function compare(a, b) {
  if (在某排序標準下 a 小於 b) {
    return -1;
  }
  if (在某排序標準下 a 大於 b) {
    return 1;
  }
  // a 必須等於 b
  return 0;
}
```

為了比較數字而不是字串，比較函式可以僅僅利用 a 減 b。以下函式將會升冪排序陣列（用於第 3 題、第 5 題作法）：

```javascript
function compareNumbers(a, b) {
  return a - b;
}
```

因為第三題只需要數字比較，我這邊就使用 a 減 b 進行排序。

- 參考：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

---

### Q4. How many years did all the inventors live all together?

- 方法： 使用 reduce 來計算他們總共幾歲。reduce() 跟其他陣列方法（例如：map、filter）的差別是它會 return 一個值，而不是一個新陣列。不過一般我們也可以使用 forEach 進行加總也可以。

- Ans:

```javascript
const ans4 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); //從0開始+

console.log(ans4);

//forEach 方法

let total = 0;
inventors.forEach((inventor) => {
  total += inventor.passed - inventor.year;
});
console.log(total);
```

- 補充

語法：
`Array.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)`

accumulator：經由個別 currentValue 加總的累計值

initialValue：預設值，放在 function 的最後方，非必填

若未提供預設值：

```javascript
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(reduceArr); // 15
```

上述範例若未提供預設值，accumulator（累計值）就會取陣列的第一個元素也就是 1，而 currentValue 就會從陣列的第二個值開始 loop。

若加上預設值 0 ：

```javascript
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {
  console.log(accumulator); // 0, 1, 3, 6, 10
  console.log(currentValue); // 1, 2, 3, 4, 5
  return accumulator + currentValue;
}, 0);
console.log(reduceArr); // 15
```

他就會從 0 開始加起，再繼續從陣列第一個值 loop 下去。

他也可用於合併陣列 ：

```javascript
const arr = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
const reduceArr = arr.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
console.log(reduceArr); // ['a', 'b', 'c', 'd', 'e', 'f'];
```

- 參考
  https://w3c.hexschool.com/blog/a2cb755f （這篇講很清楚！

---

### Q5. Sort the inventors by years lived

- 方法：使用 sort() 排序他們的壽命。
- Ans：

```javascript
//新增他們壽命，來檢查排序是否有錯誤
inventors.forEach((inventor) => {
  inventor.age = inventor.passed - inventor.year;
});

const ans5 = inventors.sort((a, b) => {
  return a.passed - a.year - (b.passed - b.year);
});

console.table(ans5);
```

- 第三題已有針對 sort() 進行補充，這題多了計算壽命的部分。

---

### Q6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

- 方法： 從[這個網站](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)中 list 找出含'de'字眼的街道名稱。 先用 querySelectorAll 找出所有 list , 但找到的 list 不是 array， 他是 nodelist， 無法進行 mapping， 所以可以使用 Array.from 將 nodeList 轉為 Array。 或是 nodelist 也可以使用 forEach 跑 loop。

```javascript
// method1
const array = [];
const lists = document.querySelectorAll(".mw-category li a"); //nodelist 不是陣列，但可以用 forEach 跑迭代, 可以用 array from

lists.forEach((list) => {
  array.push(list.title);
});

const ans6 = array.filter((title) => {
  return title.indexOf("de") !== -1;
});

console.log(ans6);

//method2
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes("de"));
```

- 參考
  https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList
  https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from

---

### Q7. Sort the people alphabetically by last name

- 方法： 使用 people 資料的 last name 進行排序， 一樣是使用 sort, 可參考第三題補充， 但因為他是文字， 使用我們 compareFunction(a, b) 函式進行排序。

- Ans:

```javascript
const ans7 = people.sort((a, b) => {
  const [aFirtst, aLast] = a.split(", ");
  const [bFirtst, bLast] = b.split(", ");

  return aLast > bLast ? 1 : aLast < bLast ? -1 : 0;
});

console.log("7. Sort the people alphabetically by last name");
console.log(ans7);
```

---

### Q8. Sum up the instances of each of these

- 方法： 使用 data 資料的來計算裡面相同東西的數量，剛剛上面 reduce() 沒提到的應用， 他也可以計算相同字串的數量並以物件呈現。

- Ans:

```javascript
const ans8 = data.reduce((obj, content) => {
  if (!obj[content]) {
    //如果沒有的話則為0
    obj[content] = 0;
  }
  obj[content] += 1; //如果沒有的相同的則+1

  return obj;
}, {}); //預設給個空object

console.log(ans8);
```

這篇部落格花我好多時間，比寫 code 時間還久很多很多 XD 終於完成，繼續加油！
