<template>
  <section class="work">
    <h1 class="main-heading">{{ title }}</h1>

    <ul class="work-list">
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
              <p class="read-more"><small class="smaller">Read case study</small></p>
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
