---
title: 'React Components #05'
author: Iris Chew
date: 2020-10-05
hero: ./images/react05.png
excerpt: Components 是可以重複被使用的，概念上來說，component 就像是 JavaScript 的 function，它接收任意的參數（react 為「props」）並且回傳至畫面的 React element。
---

Components 是可以重複被使用的，概念上來說，component 就像是 JavaScript 的 function，它接收任意的參數（react 為「props」）並且回傳至畫面的 React element。

## Function Component

定義 component 最簡單的方法即是撰寫一個 Javascript function：

```javascript=
function Welcome(props) {
    return <h1>hello {props.name}</h1>
}
const rootElement = document.getElementById('root')
ReactDOM.render(Welcome({ name: 'iris' }), rootElement)
```

```javascript=
function Welcome2(props) {
    return <h1>hello2 {props.name}</h1>
}
const rootElement2 = document.getElementById('root2')
ReactDOM.render(<Welcome2 name="iris" />, rootElement2)
```

以上兩種寫法產生的結果相同，只是 render 方式不同。

> 可參考我寫的 [TryItCode 例子 1 /例子 2](https://codesandbox.io/s/05component-and-props-fxzz6)

此 function 是一個符合規範的 React component，因為它接受一個「props」（指屬性 properties）物件並回傳一個 React element。我們稱之為 function component，因為它本身就是一個 JavaScript function。

## 可以定義很多個 props

```javascript=
function Welcome3(props) {
    return (
        <h1>
            {props.title} {props.name}
        </h1>
    )
}
const rootElement3 = document.getElementById('root3')
ReactDOM.render(<Welcome3 title="hello3" name="iris" />, rootElement3)
```

可以定義多個 props，如上面例子，新增了 `props.title` 。

> 可參考我寫的 [TryItCode 例子 3](https://codesandbox.io/s/05component-and-props-fxzz6)

## Class Component

也可以使用 ES6 Class 來定義 component，稱為 Class Component

```javascript=
class Welcome4 extends React.Component {
    render() {
        return (
            <h1>
                {this.props.title} {this.props.name}
            </h1>
        )
    }
}
const rootElement4 = document.getElementById('root4')
ReactDOM.render(<Welcome4 title="hello4" name="iris" />, rootElement4)
```

> 可參考我寫的 [TryItCode 例子 4](https://codesandbox.io/s/05component-and-props-fxzz6)

上述兩種 component 在 React 中是相同可以用的。但因為後來 react 16.8 版本後有新增 hook 功能，也問了朋友們，幾乎大家都使用 hook 更直觀，但也有朋友公司需要用 class 來維護。

## 組合 Component

這個意思是 Component 可以再引用其他 component。可以重複使用相同或不同的 Component 再把他組合起來，但他最後還是以 component 的方式呈現。

```javascript=
function Welcome5(props) {
    return <h1>Hello5, {props.name}</h1>
}
const welcome6 = <Welcome5 name="kyoyo" />
const welcomeVariable = <h1> Hello5 , Variable</h1>

function App() {
    return (
        <div>
            <Welcome5 name="Sara" />
            <Welcome5 name="Cahal" />
            <Welcome5 name="Edite" />
            {welcome6}
            {welcomeVariable}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root5'))
```

> 可參考我寫的 [TryItCode 例子 5](https://codesandbox.io/s/05component-and-props-fxzz6)

舉例，我寫了一個 function component（Welcome5）, 這個 Welcome5 他能被引入 App component 重複使用組合起來，甚至也能宣言一個變數（welcome6）引用。

這邊要注意變數我使用小寫，而 component 則使用 camel case 駝峰式，能快速幫助我們區分。此外在 component 引入變數是使用 `{welcomeVariable}`, 非使用 `<welcomeVariable />` 。

## Extracting Components （抽離 Component）

其實我覺得翻譯為抽離有點奇怪，反正意思就是一個大的 component 可以再拆更多小的 component ，以下面為例，原本的 component 長這樣：

```javascript=
function formatDate(date) {
    return date
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    )
}

const rootElement6 = document.getElementById('root6')
const author = {
    avatarUrl: 'https://picsum.photos/200/200/?random=1',
    name: 'iris',
}

ReactDOM.render(
    <Comment author={author} text="hello i'm iris" date="2020-05-31" />,
    rootElement6
)
```

我們可以把 Comment 裡面的 `calssName=UserInfo` 這個段落，拆為另一新的 component （UserInfo) , 甚至拆分更細的話，就是把 UserInfo Component 裡面的 `img` 拆為另一個更小，新的 component （Author）。

```javascript=
function formatDate(date) {
    return date
}

function Author(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Author user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    )
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    )
}
const rootElement6 = document.getElementById('root6')
const author = {
    avatarUrl: 'https://picsum.photos/200/200/?random=1',
    name: 'iris',
}
ReactDOM.render(
    <Comment author={author} text="hello i'm iris" date="2020-05-31" />,
    rootElement6
)
```

這樣我們看 Comment Component 就會變得更簡潔了。通常如果會被重複使用我們才會把他拆成更小的 component ，方便維護。

> 可參考我寫的 [TryItCode 例子 6](https://codesandbox.io/s/05component-and-props-fxzz6)

## Props 是唯讀的

不管你使用 function 或是 class 來宣告 component，都絕不能修改自己的 props。例如這個 sum function ：

```javascript=
function sum(a, b) {
    return a + b
}
```

像這樣的 function 是 Pure function 的，因為他們並沒有改變輸入，而且相同的輸入總是回傳一樣的結果。相反地，這個 function 並非 Pure function，因為它更改了它的參數：

```javascript=
function withdraw(account, amount) {
    account.total -= amount
}
```

React 是很彈性的，但有一條嚴格的規定：

**所有的 React component 都必須像 Pure function 一般保護他的 props**

如果需要變化頁面，可以使用 State。State 可以在不違反上述規則的前提下，讓 React component 隨使用者操作、網路回應、或是其他方式改變輸出內容。

_reference:
https://reactjs.org/docs/rendering-elements.html_
