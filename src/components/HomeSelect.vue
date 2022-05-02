<template>
  <div class="w-full sm:w-1/2 md:w-1/2 
      lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg 
      dark:bg-gray-800 relative select-card"
      @click="handleClick"
  >
    <div class="flex-shrink-0">
      <div
        class="flex items-center mx-auto justify-center h-14 w-14 shadow-lg rounded-full bg-green-500 text-white select-icon-box"
      >
        <i class="icon" :class="icon"></i>
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
  props: ["title", "description", "icon", "mode"],
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit('clickCard', props.mode);
    }
    return {
      title: props.title,
      description: props.description,
      icon: props.icon,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
  .indent {
    text-indent: 2em;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }
  .icon-create {
    background: url('/folder-add.svg');
    background-size: contain;
  }

  .icon-open {
    background: url('/folder-open.svg');
    background-size: contain;
  }

  .icon-update {
    background: url('/cloud-upload.svg');
    background-size: contain;
  }

  .select-card {
    transition: all .25s ease;
    bottom: 0;
  }

  .select-icon-box {
    transition: all .25s ease;
  }

  .select-card:hover {
    bottom: 10px;
    cursor: pointer;
    background: #ECFDF5;

    .select-icon-box {
      background: #34D399;
    }
  }

  @keyframes underline {
    0% {
      border-bottom: none;
      border-width: 0;
      border-bottom: 2px solid #374151;
    }
    25% {
      border-width: 25%;
    }
    50% {
      border-width: 50%;
    }
    75% {
      border-width: 75%;
    }
    100% {
      border-width: 100%;
    }
  }
</style>
