---
title: '建立React開發環境 #02'
author: Iris Chew
date: 2020-10-02
hero: ./images/react02.png
excerpt:
---

## 安裝 node.js

可至[node.js 官方網站](https://nodejs.org/en/)進行下載安裝。建議是使用左邊版本，目前比較多人使用的版本，也相對比較穩定。

安裝成功後，可打開 terminal，檢查 node 及 npm 版本。

```
node -v
npm -v
```

如果都有出現版號(如 v12.8.0)，即表示安裝成功。
若已安裝 node.js, 記得檢查當前版本是否符合 React 適用開發環境。
目前 React 有規定 node.js 及 npm 版本為：**Node >= 8.10 和 npm >= 5.6**

## Create React App

```html=
cd Desktop //位置為桌面 mkdir react //建立react資料夾 npx create-react-app
my-app //創建react app 資料夾命名 cd my-app //創建後進入my-app資料夾 npm start
//開始預覽
```

npx 不是拼寫錯誤 —— 它是一個 npm 5.2+ 附帶的 package 執行器。
`npm start` 後等到瀏覽器打開 http://localhost:3000/ 出現 react logo，即表示安裝成功啦啦。

React 官網說明：

Create React App 並不會處理 backend 邏輯或資料庫；它只會建立一個 frontend build pipeline，以便你配合任何 backend 來使用。基本上，它是使用 Babel 和 webpack。

當你準備好發佈到線上環境，執行 npm run build 會在 build 文件夾裡建立一個你的應用程式的最佳化版本，你可以從 Create React App 的 [README](https://github.com/facebook/create-react-app#create-react-app--) 和 [使用者指南](https://create-react-app.dev/)了解更多資訊。

## 搭建 Babel + Webpack + Sass 的 React 環境

若後續專案較大型，可參考[marcnuri blog](https://blog.marcnuri.com/react-babel-webpack-sass-application/) 建立環境。

## React App 文件夾解釋

以前都不知道各個檔案的作用，紀錄給曾經不懂的自己和新手們。

![](https://i.imgur.com/qfYn5uu.jpg)

_reference:
https://zh-hant.reactjs.org/docs/create-a-new-react-app.html
https://blog.marcnuri.com/react-babel-webpack-sass-application/_
