---
title: '挑戰JavaScript 30 Day1'
author: Iris Chew
date: 2021-06-13
hero: ./images/drumKit.png
excerpt:
---

自從疫情警戒第三級後 ​，待在家除了作息不正常外，也沒做什麼營養的事 (大概就一直看劇滑手機。最近終於覺得這樣下去不行，開始實施了 10 億早晨習慣，生活狀態整個有所提升，之後也來寫部落格分享分享。

終於也把部落格翻新好，是不是比之前好看 XDD
藉著這次疫情，在家也想重拾回寫部落格的初心。
其實這個之前一直很想做的挑戰，也做過大概前面幾個，就半途而廢了。希望這次能堅持，也從中學到被遺忘的 javascript 和自律。

事不宜遲馬上開始～ DAY 1 ～

專案介紹： 按下鍵盤發出音樂效果。

### 1. 做法：

-   按下按鍵去執行播放音樂
-   取得按鍵的 DOM 物件 及 按鍵所對應的音樂
-   如果有對應的音樂，則播放，並對該按鍵做 css 效果
-   當該放下按鍵，則取消 css 效果

### 2. keydown, keypress, keyup 的差別

-   **keydown**

    -   指按下鍵盤的那個剎那，任何的鍵盤按鍵按下都有 keyCode。
    -   大寫和小寫是一樣的 keyCode。
    -   按下鍵盤不放時，則會不斷地連續觸發該事件。

-   **keypress**

    -   只會針對可以輸出文字符號的按鍵有效 ， ESC、方向鍵等等無法觸法。
    -   會因為大小寫的不同取得不同的 keyCode。
    -   按下鍵盤不放時，則會不斷地連續觸發該事件。

-   **keyup**
    -   是指放開鍵盤的那個剎那
    -   因為每次只會放開鍵盤一次，所以不會有連續觸發的狀況發生
    -   任何的鍵盤按鍵按下都有 keyCode，大寫和小寫是一樣的 keyCode。
    -   想要取得 input 的 value，也只有在 keyup 的事件上可以拿到目前最新的 value。

> 這三者事件的觸發優先順序為：keydown→keypress→keyup

### 3. transitionend 事件

transitionend 事件會在 CSS transition 結束後觸發。當 transition 完成前移除 transition 時，比如移除 css 的 transition-property 屬性，事件將不會被觸發。如在 transition 完成前設置 display 為"none"，事件同樣不會被觸發。

```jsx
key.addEventListener('transitionend', transitionendHandle)
```

### 4. audio 屬性

currentTime : 返回 audio/video 播放的當前位置（以秒計）

若要重複播放，則將 `currentTime = 0;` ，從 0 再開始播放。

### 5. 其他

更多 event ：

[https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)

audio /video method and properties:
[https://www.w3schools.com/tags/ref_av_dom.asp](https://www.w3schools.com/tags/ref_av_dom.asp)

### 6. code

```jsx
<script>
  (function(){
    const palyHandle = (e) => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

      if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
      }
    }

    const transitionendHandle = (e) => {
      e.currentTarget.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
      key.addEventListener('transitionend', transitionendHandle);
    });

    window.addEventListener('keydown',palyHandle);
  })();
</script>
```
