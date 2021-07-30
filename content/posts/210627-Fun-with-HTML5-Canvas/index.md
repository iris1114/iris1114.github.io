---
title: "Day8: Fun with HTML5 Canvas"
author: JavaScript30
date: 2021-06-27
hero: ./images/hero.png
excerpt: "練習操作 Canvas"
---

專案介紹： 練習操作 Canvas

作品頁面：https://iris1114.github.io/javascript30/08_Fun-with-HTML5-Canvas/index.html

## Step1 : 設定變數

```javascript
//取得 #draw 元素。
const canvas = document.querySelector("#draw");
//getContext 取得context 來繪畫， 2d 代表二維繪圖
const ctx = canvas.getContext("2d");

//將原本高寬800的canvas設定為window寬高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//設定樣式
ctx.strokeStyle = "#BADA55"; //筆觸顏色
ctx.lineJoin = "round"; //線條連接樣式
ctx.lineCap = "round"; //線條結束樣式
ctx.lineWidth = 100; //線條寬度

//設定參數
let isDrawing = false; //判斷是否執行畫圖中
let lastX = 0; //繪畫位置
let lastY = 0;
let hue = 0; //顏色，在hsl中使用
let direction = true; //判斷粗細增減用
```

## Step 2 : 設定 draw() 函式

```javascript
function draw(e) {
  if (!isDrawing) return; //如果沒有執行畫圖就停止
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //顏色
  ctx.beginPath(); //初始化一條路徑。
  // start from
  ctx.moveTo(lastX, lastY); //初始位置
  // go to
  ctx.lineTo(e.offsetX, e.offsetY); //連接路徑終點到指定的座標中
  ctx.stroke(); //繪製路徑
  [lastX, lastY] = [e.offsetX, e.offsetY]; //把結束點放回 X 和 Y 變數

  hue++;
  if (hue >= 360) {
    //當色碼超過360後歸零
    hue = 0;
  }
  //如果筆觸粗細大於等於 50 或 小於等於 1 就反轉
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  //// 增加或減少筆觸粗細
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
```

## Step3 : 綁定 mouse 事件

```javascript
//mousedown 按下滑鼠按鍵畫的時候，isDrawing = true, 把目前滑鼠的位置設定為變數中的X、Y
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

//滑鼠移動中
canvas.addEventListener("mousemove", draw);
//放開滑鼠按鍵時
canvas.addEventListener("mouseup", () => (isDrawing = false));
//滑鼠移開
canvas.addEventListener("mouseout", () => (isDrawing = false));
```

## 補充： Canvas

HTML5 的 Canvas 只有兩個屬性跟兩個方法：

- width
- height
- getContext()
- toDataURL()

前三個是一定會用到的，我們通常一定會指定 canvas 的長寬。另外，不使用 getContext 來取得 context，就沒有方法繪圖了。

Canvas 2d context 的操作大概分成幾群：

- 管理狀態：save(), restore()
- 變形：scale(), rotate(), translate(), transform(), setTransform()
- 畫面組成：globalAlpha, globalCompositionOperation
- 色彩與風格：strokeStyle, fillStyle, createLinearGradient(), createRadialGradient(), createPattern()
- 線條邊角及組合：lineWidth, lineCap, lineJoin, miterLimit
- 陰影：shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor
- 方形繪出：clearRect(), fillRect(), strokeRect()
- 路徑 API：beginPath(), closePath(), moveTo(), lineTo(), quadraticCurveTo(), bezierCurveTo(), arcTo(), rect(), arc(), fill(), stroke(), clip(), isPointInPath()
- 焦點管理：drawFocusRing()
- 文字：font, textAlien, textBaseline, fillText(), strokeText(), measureText()
- 影像：drawImage(), createImageData(), getImageData(), putImageData()

## 參考資料

https://ithelp.ithome.com.tw/articles/10055676
https://guahsu.io/2017/06/JavaScript30-08-Fun-with-HTML5-Canvas/
