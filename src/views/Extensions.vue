<template>
  <div class="flex flex-row container center">
    <div class="h-auto hidden lg:block my-4 ml-4 shadow-lg relative w-80">
      <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div class="flex items-center justify-center pt-6">
          <img src="/favicon.png" class="ext-logo" />
          <span class="text-gray-700 font-normal text-lg"
            >Vine.js 组件市场</span
          >
        </div>
        <nav class="mt-6">
          <div>
            <ExtSideItem
              v-for="item in extList"
              :key="item.id"
              :name="item.name"
              :id="item.id"
              :icon="item.icon"
              :active="active"
            ></ExtSideItem>
          </div>
        </nav>
      </div>
    </div>

    <div class="w-full  p-12">
      <div class="header flex items-end justify-between mb-12">
        <div class="title">
          <p class="text-4xl font-normal text-gray-800 mb-4">最新推荐</p>
          <p class="text-2xl font-light text-gray-400">
            共查询到 6 条结果
          </p>
        </div>
        <div class="text-end">
          <form
            class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
          >
            <div class="relative">
              <input
                type="text"
                id='"form-subscribe-Search'
                class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
                text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="名称 / 作者 / 适配类型..."
              />
            </div>
            <button
              class="flex-shrink-0 px-4 py-2 text-base font-normal text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-green-200"
              type="button"
            >
              搜索
            </button>
          </form>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <ExtCard v-for="item in searchAns" :key="item.id" :data="item"></ExtCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExtSideItem from "@/components/ExtSideItem.vue";
import ExtCard from "@/components/ExtCard.vue";

const active = 0;

const searchAns = [
  {
    cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog-image/QQ%E6%88%AA%E5%9B%BE20220502223450.png',
    showCover: true,
    id: 0,
    type: 'core',
    isOfficial: true,
    title: '常规个人博客主核心',
    projectTitle: 'vinejs-blog-core',
    fit: 'all',
    description: '一个经典的两栏响应式布局博客，非常简单易用。此核心为CLI预设主核心之一。',
    author: 'Shawn Zhou',
    publishTime: '2022/05/02',
    downloadCount: 233
  }
]

const extList = [
  {
    name: "主核心",
    id: 0,
    icon: "orb-core",
  },
  {
    name: "部署器",
    id: 1,
    icon: "orb-deployer",
  },
  {
    name: "扩展链：特征",
    id: 2,
    icon: "orb-feature",
  },
  {
    name: "扩展链：数据",
    id: 3,
    icon: "orb-data",
  },
  {
    name: "扩展链：构建",
    id: 4,
    icon: "orb-build",
  },
  {
    name: "扩展链：样式",
    id: 5,
    icon: "orb-style",
  },
  {
    name: "扩展链：自定义",
    id: 6,
    icon: "orb-custom",
  },
];
</script>

<style lang="scss" scoped>
.center {
  margin: 0 auto;
}

.ext-logo {
  max-width: 3rem;
  margin-right: 1rem;
}
</style>
