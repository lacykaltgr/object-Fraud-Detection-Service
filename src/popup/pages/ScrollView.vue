<template>
  <div class="swipeable-module">
    <div class="page" v-for="(page, index) in pages" :key="index">
      <timeline></timeline>
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import Timeline from "~/popup/pages/Timeline.vue";
import Recommend from "~/popup/pages/Recommend.vue";
export default {
  components: {Timeline, Recommend},
  data() {
    return {
      pages: [Timeline, Recommend],
      currentPage: 0,
    };
  },
  methods: {
    handleSwipe(event) {
      const threshold = 50; // Adjust this value to control the swipe sensitivity
      const touch = event.changedTouches[0];

      if (event.type === 'touchstart') {
        this.startX = touch.clientX;
      } else if (event.type === 'touchend') {
        const deltaX = touch.clientX - this.startX;

        if (deltaX > threshold && this.currentPage > 0) {
          this.currentPage--;
        } else if (deltaX < -threshold && this.currentPage < this.pages.length - 1) {
          this.currentPage++;
        }
      }
    }
  },
};
</script>

<style scoped>
.swipeable-module {
  /* Add your styles for the module container */
}

.page {
  /* Add your styles for the individual pages */
}
</style>