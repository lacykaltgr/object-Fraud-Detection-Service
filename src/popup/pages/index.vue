<template>
  <span>
    <img class="logo" src="/src/assets/logo.png" alt="Logo">
  </span>
  <div class="page-buttons">
    <button class="page-button" :class="{ 'active-page': currentPage === 'mainpage' }" @click="changePage('mainpage')">Recommend</button>
    <button class="page-button" :class="{ 'active-page': currentPage === 'objects' }" @click="changePage('objects')">Your metaverse</button>
  </div>
  <div class="page">
    <component :is="currentPage"></component>
  </div>
</template>
<script>
import Timeline from "~/popup/pages/Timeline.vue";
import Recommend from "~/popup/pages/Recommend.vue";
import Mainpage from "~/popup/pages/Mainpage.vue";
import Objects from "~/popup/pages/Objects.vue";

export default {
  components: { Timeline, Recommend, Objects, Mainpage},
  data() {
    return {
      currentPage: "mainpage"
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    }
  }
};
</script>
<style scoped>
.logo {
  width: 30px; /* Adjust the width as needed */
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 10px; /* Adjust the left position as needed */
}

.page-button {
  width: 120px;
  height: 35px;
  transition: width 0.5s, height 0.5s;
  padding: 6px;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 50px;
}

.active-page {
  border: 2px solid mediumblue; /* Adjust the border properties as needed */
}

.page-buttons {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 250px; /* adjust as needed */
}

.page {
  position: relative;
  top: 50px;
  left: 0;
}
</style>
