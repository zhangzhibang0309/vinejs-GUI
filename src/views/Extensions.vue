<template>
  <div class="flex flex-row container center">
    <div class="h-auto hidden lg:block my-4 ml-4 shadow-lg relative w-80">
      <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div class="flex items-center justify-center pt-6">
          <img src="/favicon.png" class="ext-logo"/>
          <span class="text-gray-700 font-normal text-lg">Vine.js 组件市场</span> 
        </div>
        <nav class="mt-6">
          <div>
            <ExtSideItem v-for="item in extList" :key="item.id"
              :name="item.name" :id="item.id" :icon="item.icon" :active="active"
            ></ExtSideItem>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExtSideItem from '@/components/ExtSideItem.vue';

const active = 0;

const extList = [
  {
    name: '主核心',
    id: 0,
    icon: 'orb-core'
  },
  {
    name: '部署器',
    id: 1,
    icon: 'orb-deployer'
  },
  {
    name: '扩展链：特征',
    id: 2,
    icon: 'orb-feature'
  },
  {
    name: '扩展链：数据',
    id: 3,
    icon: 'orb-data'
  },
  {
    name: '扩展链：构建',
    id: 4,
    icon: 'orb-build'
  },
  {
    name: '扩展链：样式',
    id: 5,
    icon: 'orb-style'
  },
  {
    name: '扩展链：自定义',
    id: 6,
    icon: 'orb-custom'
  },
]

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
