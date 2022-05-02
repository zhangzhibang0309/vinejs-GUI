<template>
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800">
    <div class="flex-shrink-0">
      <div
        class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
      >
        <i :class="icon"></i>
      </div>
    </div>
    <h3
      class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white pt-4 text-center"
    >
      {{ title }}
    </h3>
    <p class="text-md text-gray-500 dark:text-gray-300 py-4 indent">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title", "description", "icon"],
  setup(props, ctx) {
    return {
      title: props.title,
      description: props.description,
      icon: props.icon,
    };
  },
});
</script>

<style lang="scss" scoped>
  .indent {
    text-indent: 2em;
  }
</style>
