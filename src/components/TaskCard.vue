<template>
  <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 mb-8 flex-1 flex items-center">
    <div class="flex-row gap-4 flex w-full justify-between">
      <div class="flex task-icon">
        <i :class="data.icon"></i>
      </div>
      <div class="flex flex-col flex-1">
        <span class="text-gray-600 dark:text-white text-lg font-medium">
          {{ data.name }}
        </span>
        <span class="text-gray-400 text-xs"> {{ data.description }} </span>
      </div>
      <button type="button" class="py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 
      focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 
      focus:ring-offset-2 rounded-lg" @click="runTask(data.name)">
        运行
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  props: ['data'],
  setup(props, ctx) {
    const data = toRef(props, 'data');
    const runTask = (command) => {

    }
    return {
      data,
      runTask
    }
  },
});
</script>

<style lang="scss" scoped>

  .task-icon {
    width: 4rem;
    & > .task-build {
      width: 2rem;
      height: 2rem;
      background: url('/block.svg');
      background-size: contain;
    }
    & > .task-debug {
      width: 2rem;
      height: 2rem;
      background: url('/bug.svg');
      background-size: contain;
    }
    & > .task-publish {
      width: 2rem;
      height: 2rem;
      background: url('/cloud-server.svg');
      background-size: contain;
    }
    & > .task-clear {
      width: 2rem;
      height: 2rem;
      background: url('/delete.svg');
      background-size: contain;
    }
  }
</style>
