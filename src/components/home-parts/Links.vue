<template>
  <section class="links">
    <ul class="social-links">
      <li :class="socialLink.class" class="image" v-for="socialLink in socialLinks">
        <a :href="socialLink.url" target="blank">
          <img :src="socialLink.src" :alt="socialLink.alt" width="50" height="50">
        </a>
      </li>
      <li class="divider">
        <span></span>
      </li>
    </ul>

    <p class="cv">
      <a class="link link-cv" href="src/assets/cv.pdf" target="blank">download cv</a>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          src: 'src/assets/icons/be.svg',
          alt: 'behance',
          url: 'https://www.behance.net/borimoon',
          class: 'behance'
        },

        {
          src: 'src/assets/icons/in.svg',
          alt: 'linkedin',
          url: 'https://www.linkedin.com/in/boritenger/',
          class: 'linkedin'
        }
      ]
    };
  }
}
</script>
