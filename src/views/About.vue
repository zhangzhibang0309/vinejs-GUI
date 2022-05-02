<template>
  <div>
    <div class="flex items-center justify-center px-5 py-5">
      <div
        class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50"
      >
        <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src="/avatar1.png"
              class="mx-auto object-cover rounded-full h-20 w-20"
            />
          </a>
        </div>
        <div class="w-full mb-10">
          <div class="text-3xl text-green-500 text-left leading-tight h-3">
            “
          </div>
          <p class="text-md text-gray-600 dark:text-gray-100 text-left px-5 indent">
            借助 Vine.js ，赋能创造，为网站建设带来更多可能。Guider 非常注重用户的使用体验，
            设计 Guider 的目的是尽量屏蔽命令行下的学习成本，真正让小白用户也能体会到集成化网站搭建的魅力。
          </p>
          <div
            class="text-3xl text-green-500 text-right leading-tight h-3 -mt-3"
          >
            ”
          </div>
        </div>
        <div class="w-full">
          <p class="text-lg text-indigo-600 font-bold text-center">Shawn Zhou</p>
          <p class="text-sm text-gray-500 dark:text-gray-300 text-center">
            Author of Vine.js
            <img src="/favicon.png" class="xs-vine" />
          </p>
        </div>
      </div>
    </div>

    <div class="dark:bg-gray-800">
      <div
        class="w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
      >
        <h2
          class="text-3xl text-center font-normal text-black dark:text-white sm:text-4xl"
        >
          <span class="block"> 即刻启动你的高效率 Web 应用， </span>
          <span class="block text-green-600 mt-2"> 从新建 Vine.js 项目开始。 </span>
        </h2>
        <p class="text-md mt-4 max-w-1/2 text-center mx-auto text-gray-400">
          * Vine.js 要求操作系统中至少安装有 Node.js 14 及更高版本，<br />
          同时需要安装有 Git 环境。有关更多环境配置问题请参考 [Vine.js-运行环境]。
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0 flex align-center justify-center">
          <div class="mt-12 w-1/6 flex-row flex">
            <button
              type="button"
              class="py-4 px-6 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in 
              duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mr-6"
              @click="toHome"
            >
              开始使用
            </button>
            <button
              type="button"
              class="py-4 px-6 bg-white border-2 hover:border-green-500 hover:border-2 focus:ring-green-500 focus:ring-offset-green-200 text-gray-700 w-full transition ease-in 
              duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              @click="toDoc"
            >
              查看教程
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

const toDoc = () => {
  window.open('https://www.vinejs.tech/');
}
</script>

<style lang="scss" scoped>
  .xs-vine {
    width: 25px;
    display: inline-block;
  }

  .indent {
    text-indent: 2em;
  }
</style>
