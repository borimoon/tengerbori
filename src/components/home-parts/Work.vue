<template>
  <section class="work row">
    <h1 class="main-heading col-xs-12 col-sm-4 col-sm-offset-4 col-md-2 col-md-offset-5">{{ title }}</h1>

    <ul class="col-xs-12 col-sm-4">
      <router-link
        :key="myWork.name"
        tag="li"
        :to="myWork.url"
        style="cursor: pointer"
        v-for="myWork in myWorks">
          <a class="link-content">
            <p class="link link-text">{{ myWork.name }}</p>
            <p class="side-text">{{ myWork.desc }}</p>

            <div class="hide-text">
              <p class="read-more side-text"><small>Read case study</small></p>
            </div>
          </a>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Work:',
      myWorks: [
        {
          name: 'The New Harmony',
          url: '/the-new-harmony',
          desc: 'Website design for Harmonie Tánc Dance Studio'
        },

        {
          name: 'Mindful Minimalism',
          url: '/mindful-minimalism',
          desc: 'Website design for Mi Műhely Architect Studio'
        }
      ]
    };
  }
}
</script>
