
<template>
  <img class="logo" src="/src/assets/logo.png" alt="Logo">
  <span>
      <button class="page-button" @click="changePage">your metaverse</button>
      <button class="page-button" @click="changePage">your metaverse</button>
  </span>
  <timeline></timeline>
  <recommend></recommend>
</template>

<script>
import Timeline from "~/popup/pages/Timeline.vue";
import Recommend from "~/popup/pages/Recommend.vue";

export default {
  components: {Timeline, Recommend},
}
</script>



<style scoped>
.logo {
  width: 50px; /* Adjust the width as needed */
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 10px; /* Adjust the left position as needed */
}

.page-button {
  width: 100px;
  height: 30px;
  transition: width 0.5s, height 0.5s;
  padding: 2px;
}

</style>
