<template>
  <a
    class="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start border-r-4 "
    href="#" :class="{ 'bg-green-50': id === active, 'border-green-500': id === active, 'text-green-500': id === active }"
  >
    <i class="text-left icon orb-core" :class="icon"></i>
    <span class="mx-4 text-sm font-normal"> {{ name }} </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['name', 'id', 'icon', 'active'],
  setup(props, ctx) {
    return {
      name: props.name,
      id: props.id,
      icon: props.icon
    }
  },
})
</script>


<style lang="scss" scoped>
  .orb-core {
    background: url('/orb-core.svg');
    background-size: contain;
  }

  .orb-build {
    background: url('/orb-build.svg');
    background-size: contain;
  }

  .orb-custom {
    background: url('/orb-custom.svg');
    background-size: contain;
  }

  .orb-data {
    background: url('/orb-data.svg');
    background-size: contain;
  }

  .orb-deployer {
    background: url('/orb-deployer.svg');
    background-size: contain;
  }

  .orb-feature {
    background: url('/orb-feature.svg');
    background-size: contain;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
</style>