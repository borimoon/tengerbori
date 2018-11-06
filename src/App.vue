<template>
  <div id="container" class="container">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }
</style>
