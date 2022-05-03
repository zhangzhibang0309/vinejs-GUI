<template>
  <div class="orbment-base rounded-lg relative">
    <div class="absolute orbment-left-part">
      <div class="orbment-core-box">
        <div class="orbment-core-outer"></div>
        <div class="orbment-core-middle"></div>
        <div class="orbment-core-inner"></div>
        <div class="orbment-core">
          <span class="shadow"></span>
          <span class="core-text"></span>
        </div>
      </div>
      <div class="orbment-lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        <div class="line4"></div>
        <div class="line5"></div>
      </div>
    </div>
    <div class="flex p-6 orbment-right-part">
      <div class="right-line1">
        <OrbmentCircuit :link="link1_Data"></OrbmentCircuit>
      </div>
      <div class="right-line2">
        <OrbmentCircuit :link="link2_Data"></OrbmentCircuit>
      </div>
      <div class="right-line3">
        <OrbmentCircuit :link="link3_Data"></OrbmentCircuit>
      </div>
      <div class="right-line4">
        <OrbmentCircuit :link="link4_Data"></OrbmentCircuit>
      </div>
      <div class="right-line5">
        <OrbmentCircuit :link="link5_Data"></OrbmentCircuit>
      </div>
    </div>
  </div>
</template>

<script setup>
import OrbmentCircuit from './OrbmentCircuit.vue';
let core_Data = {};
let link1_Data = [
  {
    name: 'blog-friend',
    alias: '博客友链',
    color: 'aqua'
  },
  {
    name: 'netease-music',
    alias: '网易云播放器',
    color: 'red'
  },
  {
    name: 'valine',
    alias: 'valine评论区',
    color: 'green'
  },
  {
    name: 'github-fork',
    alias: 'GitHub Fork',
    color: 'silver'
  },
  {
    name: 'busuanzi',
    alias: '不算子网站统计',
    color: 'green'
  }
];
let link2_Data = [
  {
    name: 'rich-text',
    alias: '富文本文档',
    color: 'dark'
  },
  {
    name: 'mysql',
    alias: 'MySQL数据库',
    color: 'aqua'
  },
  {
    name: 'ali-oss-img',
    alias: '阿里云OSS图床',
    color: 'light'
  }
];
let link3_Data = [
  {
    name: 'compress-img',
    alias: '图片压缩',
    color: 'brown'
  }
];
let link4_Data = [
  {
    name: 'sakura-theme',
    alias: '主题-樱',
    color: 'red'
  },
  {
    name: 'sakura-theme-friend',
    alias: '主题-樱-友链',
    color: 'red'
  },
  {
    name: 'mouse-click',
    alias: '鼠标点击动效',
    color: 'silver'
  }
];
let link5_Data = [
  {
    name: 'reward',
    alias: '功能-打赏',
    color: 'light'
  }
];
</script>

<style lang="scss" scoped>

@keyframes flow {
  100% {
    background-position: -400% 0;
  }
}
.orbment-lines {
  position: absolute;
  width: 70%;
  height: 100%;
  // border: 1px solid red;
  left: 30%;
  top: 35px;

  div {
    width: 100%;
    height: 8px;
    border-radius: 10px;
    // background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    position: absolute;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
      filter: blur(10px);
      z-index: -1;
      
    }
  }

  .line1 {
    top: 11.5rem;
    background: $orbment-line1;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
    transform: rotate(315deg);
    left: 45px;
    &::before {
      background: $orbment-line1-light;
      background-size: 400%;
      animation: flow 4.5s linear infinite;
    }
  }

  .line2 {
    top: 16.2rem;
    background: $orbment-line2;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
    transform: rotate(340deg);
    left: 8px;
    &::before {
      background: $orbment-line2-light;
      background-size: 400%;
      animation: flow 4.5s linear infinite;
    }
  }

  .line3 {
    top: 21rem;
    background: $orbment-line3;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
    &::before {
      background: $orbment-line3-light;
      background-size: 400%;
      animation: flow 4.5s linear infinite;
    }
  }
  .line4 {
    top: 25.8rem;
    background: $orbment-line4;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
    transform: rotate(20deg);
    left: 8px;
    &::before {
      background: $orbment-line4-light;
      background-size: 400%;
      animation: flow 4.5s linear infinite;
    }
  }

  .line5 {
    top: 30.5rem;
    background: $orbment-line5;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
    transform: rotate(45deg);
    left: 45px;
    &::before {
      background: $orbment-line5-light;
      background-size: 400%;
      animation: flow 4.5s linear infinite;
    }
  }
}

@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes counterclockwise {
  0% {
    transform: rotate(360deg);
  }
  25% {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.orbment-base {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 550px;
  flex: 1;
  margin: 0 2rem;
}
.orbment-right-part {
  background: url("/orbment-rbg.jpg");
  background-size: cover;
  flex: 1;
  height: 700px;
  border-radius: 0.5rem;
  background-repeat: no-repeat;
  box-shadow: #3b3b3ba8 4px 3px 5px 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 0;
  & > div {
    width: 100%;
    height: 8px;
    margin-top: 1px;
    border-radius: 10px;
    animation: flow 4.5s linear infinite;
    z-index: 1;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      right: -5px;
      top: -5px;
      bottom: -5px;
      filter: blur(10px);
      z-index: -1;
      animation: flow 4.5s linear infinite;
    }
  }
}

.right-line1 {
  background: $orbment-line1;
  background-size: 400%;
  animation: flow 4.5s linear infinite;
  &::before {
    background: $orbment-line1-light;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
  }
}

.right-line2 {
  background: $orbment-line2;
  background-size: 400%;
  animation: flow 4.5s linear infinite;
  &::before {
    background: $orbment-line2-light;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
  }
}

.right-line3 {
  background: $orbment-line3;
  background-size: 400%;
  animation: flow 4.5s linear infinite;
  &::before {
    background: $orbment-line3-light;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
  }
}

.right-line4 {
  background: $orbment-line4;
  background-size: 400%;
  animation: flow 4.5s linear infinite;
  &::before {
    background: $orbment-line4-light;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
  }
}

.right-line5 {
  background: $orbment-line5;
  background-size: 400%;
  animation: flow 4.5s linear infinite;
  &::before {
    background: $orbment-line5-light;
    background-size: 400%;
    animation: flow 4.5s linear infinite;
  }
}

.orbment-left-part {
  min-height: 750px;
  background: url("/orbment-lbg.jpg");
  border-radius: 0.5rem;
  width: 28rem;
  background-position: -27rem -1rem;
  left: -10rem;
  background-size: inherit;
  background-repeat: no-repeat;
  box-shadow: #3b3b3ba8 4px 3px 5px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.orbment-core-box {
  width: 15rem;
  height: 15rem;
  position: relative;
  z-index: 10;
}

.orbment-core-outer {
  width: 100%;
  height: 100%;
  background: url("/outer.png");
  background-size: cover;
  position: absolute;
  animation: counterclockwise 15s linear 0.1s infinite running;
}

.orbment-core-middle {
  width: 100%;
  height: 100%;
  background: url("/middle.png");
  background-size: cover;
  position: absolute;
  animation: clockwise 14.5s linear 0.1s infinite running;
}

.orbment-core-inner {
  width: 100%;
  height: 100%;
  background: url("/inner.png");
  background-size: cover;
  position: absolute;
  animation: counterclockwise 14s linear 0.1s infinite running;
}

.orbment-core {
  display: block;
  margin: auto;
  width: 80%;
  height: 80%;
  position: absolute;
  border-radius: 50%;
  background: $orbment-aqua;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &::before {
    content: "";
    position: absolute;
    top: 1%;
    left: 5%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 0px,
      #ffffff,
      rgba(255, 255, 255, 0) 58%
    );
    filter: blur(5px);
    z-index: 2;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 120%,
      #81e8f6,
      #76deef 10%,
      #055194 80%,
      #062745 100%
    );
    transform: rotateX(90deg) translateZ(-150px);
    z-index: -1;
  }
  .core-text {
    width: 100%;
    height: 100%;
    position: absolute;
    &::before {
      content: "blog";
      position: absolute;
      left: 0;
      top: 3rem;
      right: 0;
      bottom: 0;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      font-family: Arial;
      font-size: 50px;
    }
  }
}
</style>
