<template>
  <div class=" orbment-base rounded-lg relative">
    <div class="absolute orbment-left-part">
      <div class="orbment-core-box">
        <div class="orbment-core-outer"></div>
        <div class="orbment-core-middle"></div>
        <div class="orbment-core-inner"></div>
      </div>
    </div>
    <div class="flex p-6 orbment-right-part">
      <div class="flex flex-wrap">
        123
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

  @keyframes clockwise {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(90deg) }
    50% { transform: rotate(180deg) }
    75% { transform: rotate(270deg) }
    100% { transform: rotate(360deg) }
  }

  @keyframes counterclockwise {
    0% { transform: rotate(360deg) }
    25% { transform: rotate(270deg) }
    50% { transform: rotate(180deg) }
    75% { transform: rotate(90deg) }
    100% { transform: rotate(0deg) }
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
    background: url('/orbment-rbg.jpg');
    background-size: cover;
    flex: 1;
    height: 700px;
    border-radius: .5rem;
    background-repeat: no-repeat;
    box-shadow: #3b3b3ba8 4px 3px 5px 2px;
  }

  .orbment-left-part {
    min-height: 750px;
    background: url('/orbment-lbg.jpg');
    border-radius: .5rem;
    width: 28rem;
    background-position: -27rem -1rem;
    left: -10rem;
    background-size: inherit;
    background-repeat: no-repeat;
    box-shadow: #3b3b3ba8 4px 3px 5px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .orbment-core-box {
    width: 15rem;
    height: 15rem;
    // border: 1px solid red;
    margin-bottom: 5rem;
    position: relative;
  }

  .orbment-core-outer {
    width: 100%;
    height: 100%;
    background: url('/outer.png');
    background-size: cover;
    position: absolute;
    animation: counterclockwise 15s linear .1s infinite running;
  }

  .orbment-core-middle {
    width: 100%;
    height: 100%;
    background: url('/middle.png');
    background-size: cover;
    position: absolute;
    animation: clockwise 14.5s linear .1s infinite running;
  }

  .orbment-core-inner {
    width: 100%;
    height: 100%;
    background: url('/inner.png');
    background-size: cover;
    position: absolute;
    animation: counterclockwise 14s linear .1s infinite running;
  }
</style>
