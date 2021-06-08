---
title: 'JSX & Visual Dom 介紹#03'
author: Iris Chew
date: 2020-10-03
hero: ./images/react03.png
excerpt: 一開始看到 JSX 我就覺得很混亂，為什麼會有 JavaScript 又有 HTML,看起來很亂。沒錯，上一篇文章有提到， React 就是藉由 JavaScript 產生 HTML 。
---

## JSX 介紹

一開始看到 JSX 我就覺得很混亂，為什麼會有 JavaScript 又有 HTML,看起來很亂。沒錯，上一篇文章有提到， React 就是藉由 JavaScript 產生 HTML 。

JSX 就是 Javascript 和 XML 結合的一種格式，允許使用 JavaScript 所有的功能。 React 發明了 JSX ，可以方便的利用 HTML 語法來創建 Virtual DOM，當遇到 `<` ，JSX 就當作 HTML 解析，遇到 `{` 就當 JavaScript 解析。

我們都知道 browser 只看得懂三個語言，那就是 HTML、CSS 和 JavaScript，那 JSX 要怎麼讓 browser 讀懂呢？
登登登等，答案是 Babel ，Babel 會將讀到的 JSX 再轉為真正的 JavaScript 寫法。在一開始的 Create React App 我們就已安裝咯。如果沒有 Babel，等於就得親自使用 React 的 createElement 去寫，那應該會累死。可以看看下面兩個例子：

#### JSX 寫法

```javascript=
const element = <h1 className="greeting">Hello, World!</h1>
```

等同於

#### createElement 寫法

```javascript=
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, World!'
)
```

從上方例子就可以看出 JSX 語法大量簡化了我們的工作。Babel 將 JSX 直接轉換為 React.createElement() 的程式 ， 讓我們更直觀快速。

## JSX 怎麼寫? 它的注意事項

1. HTML 的 class 屬性在 JSX 須寫為 className (class 為 JSX 保留字)

```htmlmixed=
<div className="testClass">Test</div>
```

2. JSX 中所有元素都需要關閉 例如:

```htmlmixed=
<div>content</div> 或 <img /> (self-closing)
```

3. 事件觸發需使用駝峰式命名，例:

```htmlmixed=
<div onClick={() => console.log('click test'}>Click Me</div>
```

4. style 屬性要以 JS 物件的格式撰寫，採用駝峰式命名法而非-，單位要用單引號包住 (例: '50%')。外面則要再加上一層大括號。 例：

```htmlmixed=
<p style={{fontSize: '15px',marginTop: '20px'}}>Some text</p>
```

5. 在 JSX 中仍然可以撰寫 JS，但是需使用大括號包起來

6. 函式 return 需要由一個頂端 tag 包住內容，直接看以下範例
   以下語法不會出錯。

```javascript=
const App = () => {
    return <div className="App">This is my first react app!</div>
}
```

以下語法則會報錯(沒有一個最外層包住所有內容的 tag)

```javascript=
const App = () => {
  return (
    <p>some text</p>
    <div className="App">
      This is my first react app!
    </div>
  );
}
```

## Virtual Dom

![](https://i.imgur.com/HxKdduo.png)

這張是 [summer](https://cythilya.github.io/2017/03/31/virtual-dom/) 劃的圖，而且解釋得很清楚。Babel 看到 JSX 語法，會轉換成 React.createElement，產生出 dom 就是 visual dom。相較於 real Dom 成本較低 ,重繪時效率高。當畫面更新只渲染變化部分，不會重新更新全部。所以如果只修改不同的地方，它就只重繪一次。大大提升效能。

例子： 假設今天有一個 table，有很多欄位。目前想增加一個欄位，在還沒 virtual dom 之前，就會整個 table 都重新 render，而 virtual dom 就能只針對那個欄位進行改變，可以提升效能。

_reference:
https://zh-hant.reactjs.org/docs/introducing-jsx.html
https://ithelp.ithome.com.tw/articles/10214217
https://jspang.com/detailed?id=46#toc223
https://cythilya.github.io/2017/03/31/virtual-dom/_
