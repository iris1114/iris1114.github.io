---
title: "Render Element #04"
author: Iris Chew
date: 2020-10-04
hero: ./images/react04.png
excerpt: 建立 React Apps 最小的單位是 element。而 element 是由 component 所「組成」的。
secret: true
---

建立 React Apps 最小的單位是 element。而 element 是由 component 所「組成」的。

與瀏覽器的 DOM element 不同，React element 是單純的 object，而且很容易被建立。React DOM 負責更新 DOM 來符合 React element。

## 如何 render Element 到 DOM 內

假設在 html 內有：

```htmlmixed=
<div id="root"></div>
```

我們稱為這是一個「root」DOM node，因為所有在內的 element 都會透過 React DOM 做管理。

如果要 render 一個 React element 到 root DOM node，需使用 `ReactDOM.render()`， 大部分只會呼叫 ReactDOM.render() 一次。
example：

```javascript=
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

> 可參考我寫的 [TryItCode 例子 1](https://codesandbox.io/s/react-learning-render-element4-6b7jg?file=/src/index.js)

## 新增可被 render 的 element

html 一樣有：

```htmlmixed=
<div id="root2"></div>
```

用 setInterval() 每秒去 callback ReactDOM.render()。

```javascript=
function timeUpdate() {
  const localTime = new Date().toLocaleTimeString();
  const element2 = (
    <div>
      <h1>Hello,world</h1>
      <h2>It's {localTime}</h2>
    </div>
  );
  const rootElement2 = document.getElementById("root2");
  ReactDOM.render(element2, rootElement2);
}

setInterval(timeUpdate, 1000);
```

![](https://i.imgur.com/t6ZSM7O.gif)

> 可參考我寫的 [TryItCode 例子 2](https://codesandbox.io/s/react-learning-render-element4-6b7jg?file=/src/index.js)

## React 只會更新必要的 Element

像剛剛上面那個範例，只有`<h2>`標籤內時間需要每秒被更新,則可看到他就只針對這個 DOM 去 render。React DOM 會將 element 和它的 children 與先前的狀態做比較，並且只更新必要的 DOM 達到理想的狀態。

![](https://i.imgur.com/UFCMBMZ.gif)

_reference:
https://reactjs.org/docs/rendering-elements.html_
