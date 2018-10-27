<template>
  <div class="main-shape">
    <svg class="patterns">
      <defs>
        <pattern class="pattern" id="image1" width="1" height="1" viewBox="0 1 100 100">
          <image xlink:href='src/assets/harmoniecs/har.svg' width="100" preserveAspectRatio="none" class="pattern-image"></image>
        </pattern>

        <pattern class="pattern" id="image2" width="1" height="1" viewBox="0 1 100 100">
          <image xlink:href='src/assets/mics/mi.svg' width="150" preserveAspectRatio="none" class="pattern-image"></image>
        </pattern>

        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#5ee"/>
          <stop offset="100%" stop-color="#5ea"/>
        </linearGradient>
      </defs>
    </svg>

    <svg class="triangle" viewBox="0 0 646 662" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path d="M0-2v664L647.953-2z" fill-rule="evenodd" />
    </svg>
  </div>
</template>

<style scoped>
  .patterns,
  .pattern {
    height: 0;
    width: 0;
  }
</style>
