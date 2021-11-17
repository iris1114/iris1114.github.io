---
title: "CSS 選擇器的優先權順序"
author: CSS
date: 2021-11-17
hero: ./images/hero.png
excerpt: ""
---

1. 在相同選擇器下，後者敘述優先於前者。

2. 在不同選取器下， 權重依輕到重：

- Tag 選取器 （如: `span`、 `h1`、 `p`）、
  伪元素 （如：`::before` 、 `::after`）

- Class 選取器 (如: `.container` 、 `.wrap`) 、
  偽類（如：`:hover` 、 `:focus`）、
  属性选择器 （如： `[type="radio"]` `[attr=value]`）

- Id 選取器 (如: `#wrap`)

- Inline style (如: `style="color:red"`)

- !important (如: `color: red !important;`)

---

結論：

!important > Inline style > Id 選取器 > Class 選取器、偽類、属性选择器 > Tag 選取器、伪元素

## 參考資料

https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity
