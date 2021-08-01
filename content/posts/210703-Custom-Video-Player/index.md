---
title: "Day11: Custom Video Player"
author: JavaScript30
date: 2021-07-03
hero: ./images/hero.png
excerpt: "客製化player播放器，功能包含播放、暫停、音量、速度、快進、快退、全螢幕。"
---

專案介紹： 客製化 player 播放器，功能包含播放、暫停、音量、速度、快進、快退、全螢幕。

作品頁面：https://iris1114.github.io/javascript30/11_Custom-Video-Player/

## Code

```javascript
/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreenBtn = player.querySelector(".screen__button");
const iconBtn = player.querySelector(".icon__button");

/* Build out functions */

// 影片播放或暫停
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

//依據影片播放或暫停去改變icon ui
function updateButton() {
  const icon = this.paused
    ? ` <i class="fas fa-play"></i>`
    : `<i class="fas fa-pause"></i>`;
  toggle.innerHTML = icon;

  const iconVideo = this.paused ? ` <i class="fas fa-play"></i>` : ``;
  iconBtn.innerHTML = iconVideo;
}

//快進及快退， 讓video的curentTime =+ data-skip 的時間
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

//video 的 volume 及 playbackRate 的值進行修改
function handleRangeUpdate() {
  video[this.name] = this.value;
}

//進度條ui及顏色調整
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  progressBar.style.background = "#ff0000";
}

//更改影片播放位置
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//request fullscreen
function fullscreen() {
  video.requestFullscreen();
}

/* Hook up the event listeners */

//針對影片播放暫停做處理
video.addEventListener("click", togglePlay); //點擊影片執行togglePlay
toggle.addEventListener("click", togglePlay); //下方toggle點擊執行togglePlay
video.addEventListener("play", updateButton); //監聽影片播放執行按鈕畫面
video.addEventListener("pause", updateButton); //監聽影片暫停執行按鈕畫面

//當影片current time 有更新時，則出發timeupdate事件，進行進度條ui呈現
video.addEventListener("timeupdate", handleProgress);

//針對快進/慢進做處理
skipButtons.forEach((button) => button.addEventListener("click", skip));

//針對音量、速度滑動條進行處理
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

//針對進度條做處理，按著滑鼠 mousedown 時是 true,放開滑鼠 mouseup 則為 false
let mousedown = false;
progress.addEventListener("click", scrub); //點擊進行條執行scrub
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); //如果mousedown=true，則執行scrub
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

//針對全螢幕做處理
fullscreenBtn.addEventListener("click", fullscreen);
```

## 補充

### video.play()

开始播放。

### video.pause()

暂停播放。

### video.currentTime

会以秒为单位返回当前媒体元素的播放时间。设置这个属性会改变媒体元素当前播放位置。

### video.volume

可设置媒体播放时的音量。值从 0.0（静音）到 1.0（最大音量）。

### video.playbackRate

属性设置媒体文件播放时的速率。这用于实现让用户控制快放、慢放等。 正常播放速率乘以该值表示当前的播放速率，所以 1.0 表示一个正常的播放速率。将 playbackRate 设为负值不可以实现倒播。

### video.duration

属性以秒为单位给出媒体的长度，如果没有媒体数据可用，则为零。

### video timeupdate event

当 currentTime 更新时会触发 timeupdate 事件。

这个事件的触发频率由系统决定，但是会保证每秒触发 4-66 次（前提是每次事件处理不会超过 250ms）。

### mousedown & mouseup & mousemove

- mousedown： 任一滑鼠按鍵按下時觸發，相當於手機上的 touchstart。
- mouseup： 任一滑鼠按鍵放開時觸發，相當於手機上的 touchend。
- mousemove：滑鼠移動時觸發，通常在需要用到時才綁定，避免不斷觸發。

## 參考資料

https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement
https://medium.com/@shizukuichi/mouse-event-%E5%B0%8F%E7%AD%86%E8%A8%98-feb5dd866b0
