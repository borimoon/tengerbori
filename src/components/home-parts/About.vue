<template>
  <section class="about">
    <h1 class="main-heading main-heading-home">{{ sayHello }}</h1>

    <main class="main">
      {{ intro }}
    </main>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        sayHello: "Hello,",

        intro: "I'm Bori. I'm a designer who excels in all aspects of UI design. I create visuals, natively speak HTML, CSS, and also gained some valuable knowledge of JavaScript. My skills and learnings allow me to bring ideas from concept to prototypes and to production. "
      };
    }
  }
</script>
