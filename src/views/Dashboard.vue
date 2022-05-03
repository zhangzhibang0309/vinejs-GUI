<template>
  <div class="container flex flex-row">
    <div class="orbment-main w-4/5">
      <OrbmentBase></OrbmentBase>
    </div>
    <div class="orbment-side w-1/5">

    </div>
  </div>
</template>

<script setup>
  import OrbmentBase from '../components/Orbment/OrbmentBase.vue';
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    min-height: 865px;
  }

  .orbment-main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .orbment-side {
    border: 1px solid green;
  }
</style>