<script setup lang="ts">
import Timeline from "~/popup/pages/Timeline.vue";
import Recommend from "~/popup/pages/Recommend.vue";
import Icon from "~/popup/pages/Icon.vue";
</script>

<template>
  <h1 class="text-3xl font-bold helvetica">Object</h1>
  <h4 class="font-bold">Your metaverse</h4>
  <div>
    <timeline></timeline>
    <recommend></recommend>
  </div>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
