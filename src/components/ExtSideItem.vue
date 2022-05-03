<template>
  <a
    class="w-full font-thin text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start border-r-4 side-link"
    :class="{ 'active': id === active }"
  >
    <i class="text-left icon" :class="icon"></i>
    <span class="mx-4 text-sm font-normal"> {{ name }} </span>
  </a>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  props: ['name', 'id', 'icon', 'active'],
  setup(props) {
    const active = toRef(props, 'active');
    return {
      name: props.name,
      id: props.id,
      icon: props.icon,
      active
    }
  },
})
</script>


<style lang="scss" scoped>
  .side-link {
    transition: all .25s ease;
    &.active {
      background-color: #ECFDF5;
      border-color: #10B981;
      color: #10B981;
    }
  }
  .side-link:hover {
    cursor: pointer;
    background-color: #ECFDF5;
    border-color: #10B981;
    color: #10B981;
  }
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

  .orb-style {
    background: url('/orb-style.svg');
    background-size: contain;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
</style>