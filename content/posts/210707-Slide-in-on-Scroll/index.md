---
title: "Day13: Slide in on Scroll"
author: JavaScript30
date: 2021-07-07
hero: ./images/hero.png
excerpt: "滾動視窗到定點時動畫滑入圖片的效果。"
---

專案介紹： 滾動視窗到定點時動畫滑入圖片的效果。

作品頁面：https://iris1114.github.io/javascript30/13_Slide-in-on-Scroll/

## code

```javascript
//在一定時間20秒內只能觸發一次。
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//頁面滾到指定高度時，讓圖片滑入、滑出文章

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    //頁面已滾動距離 + 螢幕高度 - 圖片一半的高度 = 圖片滑入文章的高度
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;

    //圖片至螢幕頂端的距離 + 圖片的高度 = 圖片底部至螢幕頂端的距離
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    //判斷是否已達圖片應滑入高度，即圖片滑入文章的高度 > 圖片至螢幕頂端的距離
    const isHalfShown = slideInAt > sliderImage.offsetTop;

    //判斷是否未達圖片應滑出高度，即頁面已滾動距離 < 圖片底部至螢幕頂端的距離
    const isNotScrolledPast = window.scrollY < imageBottom;

    //如果已達圖片應滑入高度，且未達圖片應滑出高度，就加上 `active` 樣式
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

const sliderImages = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", debounce(checkSlide));
```

## 補充

### Window.scrollY

垂直方向已滚动的像素值。

### Window.innerHeight

瀏覽器窗口的視口（viewport）高度（以像素為單位）；如果有水平滾動條，也包括滾動條高度。

### HTMLElement.offsetTop

HTMLElement.offsetTop 為只讀屬性，它返回當前元素相對於其 offsetParent 元素的頂部內邊距的距離。

## 參考資料

https://blog.epoch.tw/
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetTop
