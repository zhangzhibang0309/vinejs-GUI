<template>
  <div class="task-main container flex flex-nowrap flex-col center items-center">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:justify-between lg:py-16 lg:px-8 flex flex-col title">
      <h2 class="text-3xl font-normal leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 ">
        图形化命令面板
        <br />
        <span class="text-green-600 text-2xl letter-1">选择一项命令以启动 Vine.js</span>
      </h2>
    </div>
    <div class="w-1/2 flex-1 flex flex-col flex-nowrap">
      <task-card v-for="(item, index) in TaskList" :key="index" :data="item"></task-card>
    </div>
  </div>
</template>

<script setup>
import TaskCard from '@/components/TaskCard.vue';

const TaskList = [
  {
    icon: 'task-build',
    name: 'list',
    description: 'Vine.js 将静态页面打包生成至项目根目录下的 dist 文件夹。'
  },
  {
    icon: 'task-debug',
    name: 'debug',
    description: '启动一个本地 Node.js 服务器预览页面，如果之前还没有生成页面，Vine.js 将在执行预览前自动生成。'
  },
  {
    icon: 'task-publish',
    name: 'publish',
    description: '启动部署器，将静态页面打包上传至服务器，稍后即可发布此网站。'
  },
  {
    icon: 'task-clear',
    name: 'clear',
    description: '清除项目目录下的构建缓存。'
  }
]

</script>

<style lang="scss" scoped>
  .center {
    margin: 0 auto;
    min-height: 865px;
  }

  .title {
    margin: 0;
  }
</style>
