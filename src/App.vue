<template>
  <div>
    <header class="bg-green-200 shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row flex-nowrap items-center">
        <img src="../public/favicon.png" class="w-16 mr-4"> 
        <h1 class="text-2xl font-normal leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
        <h1 class="text-md font-normal leading-tight text-gray-900 flex-1 text-right">
          当前时间：{{ timer }}
        </h1>
      </div>
      <Navbar></Navbar>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script setup>
  import { ref } from 'vue';
  import dayjs from 'dayjs';
  import Navbar from './components/Navbar.vue';
  let timer = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  setInterval(() => {
    timer.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
</script>

