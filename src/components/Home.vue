<template>
  <section class="home">
    <div class="image corner">
      <img src="src/assets/corner.svg" alt="corner illustration of the home-page">
    </div>

    <svg class="logo" viewBox="0 0 310 310" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
      <path fill="none" d="M0 0h310v310H0z"/>
      <clipPath id="a">
        <path d="M0 0h310v310H0z"/>
      </clipPath>
      <g clip-path="url(#a)" fill="#5ee">
        <path d="M52.169 262.871H-4.079V310H155v-47.102H98.911V154.671H52.169v108.2zM155.089 217.235h155.328V56.163H202.191v-.053h-.013V0h-47.089v217.235zm47.102-47.102v-66.868h61.124v66.868h-61.124z"/>
        <animate attributeName="fill" values="#5ea;#5ee;#5ea;" dur="5s" repeatCount="indefinite" />
      </g>
    </svg>

    <div class="corner-bottom">
      <svg viewBox="0 0 236 241" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <g fill="#5EE">
          <path d="M235.102 240.924V0L0 240.924z" fill-rule="evenodd" fill-opacity=".22"/>
          <animate attributeName="fill" values="#5ee;#5ea;#5ee;" dur="5s" repeatCount="indefinite" />
        </g>
      </svg>
    </div>

    <div class="home-content">
      <div class="content-parts">
        <transition name="slide" mode="out-in" appear>
          <my-about></my-about>
        </transition>

        <transition name="slide" mode="out-in" appear>
          <my-work></my-work>
        </transition>

        <transition name="slide" mode="out-in" appear>
          <my-links></my-links>
        </transition>
      </div>

      <my-footer></my-footer>
    </div>
  </section>
</template>

<script>
  import About from './home-parts/About.vue';
  import Links from './home-parts/Links.vue'
  import Work from './home-parts/Work.vue';
  import Footer from './Footer.vue';

  export default {

    components: {
      myAbout: About,
      myLinks: Links,
      myWork: Work,
      myFooter: Footer
    }
  }
</script>

<style>
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
