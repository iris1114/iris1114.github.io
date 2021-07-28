---
title: "Day6: Type-Ahead"
author: JavaScript30
date: 2021-06-23
hero: ./images/hero.png
excerpt: "用 fetch 去 get 城市資料，並用正規表達式來回傳搜尋相關程式"
---

專案介紹： 用 fetch 去 get 城市資料，並用正規表達式來回傳搜尋相關程式

作品頁面：https://iris1114.github.io/javascript30/06_Type-Ahead/index.html

## 做法：

- fetch 取得城市資料
- 取得輸入的值並用 regex 與城市資料的 city 及 state 做對比
- 用 filter 取得對比成功的值，並回傳新陣列
- 用此篩選好的新陣列再去呈現畫面

## fetch & ajax

fetch 取得 json 資料：

```javascript
let cities = null;
fetch(endpoint)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    cities = res;
  });
```

若是用 ajax 做法：(太久沒用 複習一下 XD)

```javascript
function requestHandle() {
  console.log(JSON.parse(this.response));
}

let req = new XMLHttpRequest();
req.addEventListener("load", requestHandle);
req.open("get", endpoint);
req.send();
```

## 正規表示法 Regular Expressions

正規表示法 (Regex) 是用來處理字串的方法，Regex 用自己一套特殊的符號表示法，讓我們可以很方便的搜尋字串、取代字串、刪除字串或測試字串是否符合樣式規則。

```javascript
const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};
```

- RegExp() 物件用來建立正規式：第一個參數是正規式的內容，第二個參數是 flag。
- g 表示 Global search，尋找整份文件，而不會找到就停。
- i 表示 Case insensitive，表示不區分大小寫。
- match() 方法可在字符串内找到指定的値，或找到一个或多個正規式的匹配。

```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

- 設定一個 numberWithCommas() 的方法，用於表達千分位。`\B(?=(\d{3})+(?!\d))` 是千分位的正規式。

- `\d{3}`匹配 3 個數字，+表示前面的内容重複 1 到多次，所以`(\d{3})+` 表示三個數字的 1 到多次，也就是 3,6,9...等 3 的倍數個數字的字串
- `(?!\d)` 匹配一个位置，此位置後面不是數字
- `(?=(\d{3})+(?!\d))` 匹配一个位置，這個位置後面首先是 3 的倍數個數字的字串，接下来的位置不是數字
- `/\B(?=(\d{3})+(?!\d))/g` 就是全部匹配一个位置，這個位置前面要有字元存在，然後後面是 3 的倍數個數字，再後面是非數字。

## replace() 、 match()

replace() 方法會傳回一個新字串，此新字串是透過將原字串與 pattern 比對，以 replacement 取代吻合處而生成。pattern 可以是字串或 RegExp，而 replacement 可以是字串或函式（會在每一次匹配時被呼叫）。

syntax: `str.replace(regexp|substr, newSubstr|function)`

範例

```javascript
var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

match()方法檢索返回一個字符串匹配正則表達式的結果。

syntax: `str.match(regexp)`

範例

```javascript
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

## Code

```javascript
(() => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  let cities = null;
  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      cities = res;
    });

  //根據輸入字串filter符合city或place的結果
  const findMatches = (wordToMatch, cities) => {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  //將人口數量進行千分位的表達
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //將符合的值呈現至畫面
  function handleChange() {
    const matchArray = findMatches(this.value, cities);

    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `
  <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
  </li>
`;
      })
      .join("");
    suggestions.innerHTML = html;
  }

  const search = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  search.addEventListener("input", handleChange);
})();
```

### 參考資料

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
https://ithelp.ithome.com.tw/questions/10195924
https://blog.epoch.tw/
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace
