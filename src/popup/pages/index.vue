
<template>
  <img class="logo" src="/src/assets/logo.png" alt="Logo">
  <span>
      <button @click="changePage">your metaverse</button>
      <button @click="changePage">your metaverse</button>
  </span>
  <ScrollView></ScrollView>
</template>

<script>
import ScrollView from "~/popup/pages/ScrollView.vue";

export default {
  components: {ScrollView},
}
</script>



<style scoped>
.logo {
  width: 50px; /* Adjust the width as needed */
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 10px; /* Adjust the left position as needed */
}
</style>
