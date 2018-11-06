<template>
  <section class="home">
    <div class="image corner">
      <img src="src/assets/corner.svg" alt="corner illustration of the home-page">
    </div>
    
    <svg class="logo" viewBox="0 0 258 121" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
      <g fill="#5ea">
        <path d="M80.084 84.265h43.805v36.704H0V84.286h43.682V0h36.402v84.265z"/>
        <path d="M257.675 0v120.969H132.233V36.683h-.041v-.01H88.494V0h46.259l-.28.28 16.242 13.023L166.676.28l-.28-.28h91.279zm-36.683 36.683h-52.076v47.603h52.076V36.683z"/>
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
