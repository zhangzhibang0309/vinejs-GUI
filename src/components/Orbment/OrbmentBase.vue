<template>
  <div class=" orbment-base rounded-lg relative">
    <div class="flex absolute orbment-left-part">
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
    height: 550px;
    border-radius: .5rem;
    background-repeat: no-repeat;
    box-shadow: #3b3b3ba8 4px 3px 5px 2px;
  }

  .orbment-left-part {
    min-height: 750px;
    background: url('/orbment-lbg.jpg');
    border-radius: .5rem;
    width: 28rem;
    background-position: -14rem -7rem;
    left: -10rem;
    background-size: inherit;
    background-repeat: no-repeat;
    box-shadow: #3b3b3ba8 4px 3px 5px 2px;
  }

</style>
