<template>
  <div
    class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
  >
    <a href="#" class="w-full block h-full">
      <img
        v-if="data.showCover"
        :src="data.cover"
        class="max-h-40 w-full object-cover"
      />
      <div class="bg-white w-full p-4">
        <p class="text-green-500 text-sm font-light" v-if="data.isOfficial">official</p>
        <p class="text-gray-800 text-lg font-medium mb-2">
          {{ data.title }}
          <span class="text-gray-600 text-sm font-light mb-2">{{ data.projectTitle }}</span>
        </p>
        <p class="text-gray-500 font-light text-md">
          {{ data.description }}
        </p>
        <div class="text-gray-400 font-light mt-2 text-sm">
          适配：
          <span class="px-2 text-sm rounded text-white  bg-green-600 font-light">
            {{ data.fit }}
          </span>
        </div>
        <div class="flex items-center mt-4">
          <div class="flex flex-col justify-between text-sm">
            <p class="text-gray-800 dark:text-white">{{ data.author }}</p>
            <p class="text-gray-400 dark:text-gray-300">
              {{ data.publishTime }} - {{ data.downloadCount }} downloads
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ['data'],
  setup(props, ctx) {
    return {
      data: props.data
    }
  },
});
</script>

<style lang="scss" scoped></style>
