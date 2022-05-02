<template>
  <div class="bg-green-100">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8" >
      <div class="mt-8 flex lg:mt-0 w-full justify-center">
        <div class="inline-flex rounded-md w-9/12 justify-between">
          <router-link :to="item.to" v-for="(item, index) in NavList" :key="index"
            class="inline-flex items-center justify-center rounded-full shadow-md router-btn
            border border-transparent bg-green-600 px-1 py-1 text-base mr-5 w-16 h-16 relative
            font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-green-500 focus:outline-none"
            >
            <div class="icon absolute" :class="item.icon"></div>
            <div class="hover-description absolute">
              {{ item.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const NavList = [
    {
      to: '/',
      name: '主页',
      icon: 'icon-home'
    },
    {
      to: '/dashboard',
      name: '面板',
      icon: 'icon-dashboard'
    },
    {
      to: '/settings',
      name: '设定',
      icon: 'icon-setting'
    },
    {
      to: '/extensions',
      name: '扩展',
      icon: 'icon-extensions'
    },
    {
      to: '/task',
      name: '命令',
      icon: 'icon-task'
    },
    {
      to: '/about',
      name: '关于',
      icon: 'icon-about'
    },
    {
      to: '/help',
      name: '帮助',
      icon: 'icon-help'
    }
  ]
</script>

<style lang="scss" scoped>
  .hover-description, .icon {
    transition: all .25s ease;
  }
  .hover-description {
    opacity: 0;
  }
  .icon {
    opacity: 1;
  }
  .router-btn:hover {
    .hover-description {
      opacity: 1;
    }
    .icon {
      opacity: 0;
    }
  }
  
  .icon {
    width: 2rem;
    height: 2rem;
    // border: 1px solid red;
  }
  
  .icon-home {
    background: url('/home.svg');
    background-size: contain;
  }

  .icon-dashboard {
    background: url('/dashboard.svg');
    background-size: contain;
  }

  .icon-setting {
    background: url('/setting.svg');
    background-size: contain;
  }

  .icon-extensions {
    background: url('/appstore-add.svg');
    background-size: contain;
  }

  .icon-task {
    background: url('/code.svg');
    background-size: contain;
  }

  .icon-about {
    background: url('/info-circle.svg');
    background-size: contain;
  }

  .icon-help {
    background: url('/question-circle.svg');
    background-size: contain;
  }
</style>