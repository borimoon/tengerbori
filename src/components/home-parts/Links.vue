<template>
  <section class="links row">
    <ul class="social-links col-xs-12 col-sm-4 col-sm-offset-4 col-md-2 col-md-offset-5">
      <li :class="socialLink.class" class="image" v-for="socialLink in socialLinks">
        <a :href="socialLink.url" target="blank">
          <img :src="socialLink.src" :alt="socialLink.alt" width="50" height="50">
        </a>
      </li>
      <span class="divider"></span>
    </ul>

    <p class="cv col-xs-12 col-sm-4">
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
