<template>
  <div>
    <transition name="fade" appear>
      <ul class="work-nav">
        <router-link to="/" tag="li"><a>Home</a></router-link>
        <router-link to="/the-new-harmony" tag="li" active-class="active"><a>Harmonie</a></router-link>
        <router-link to="/mindful-minimalism" tag="li" active-class="active"><a>Mi</a></router-link>
      </ul>
    </transition>

    <transition name="fade" appear>
      <router-view class="header-one" name="header-one"></router-view>
    </transition>

    <transition name="fade" appear>
      <router-view class="header-two" name="header-two"></router-view>
    </transition>

    <transition name="slide" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <router-view name="footer"></router-view>
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

  .slide-leave-active {
    animation: slide-out .5s ease-out forwards;
    transition: opacity .5s ease;
    opacity: 0;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in .5s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }
</style>
