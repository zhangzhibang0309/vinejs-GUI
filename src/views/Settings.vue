<template>
  <div class="container">
    <div class="settings">
      <div
        class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
      >
        <h2
          class="text-3xl font-normal text-black dark:text-white sm:text-4xl"
        >
          <span class="block"> 此功能正在开发中... </span>
          <span class="block text-green-500"> 敬请期待 </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              @click="toHome"
              class="py-4 px-6 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const $router = useRouter();

  const toHome = () => {
    $router.push('/');
  }
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>
