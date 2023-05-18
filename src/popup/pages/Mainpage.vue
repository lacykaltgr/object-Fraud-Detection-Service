
<template>
  <timeline></timeline>
  <recommend class="recommend-button"></recommend>
</template>

<script>
import Timeline from "~/popup/pages/Timeline.vue";
import Recommend from "~/popup/pages/Recommend.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Timeline, Recommend}
})
</script>



<style scoped>
.recommend-button {
  margin-bottom: 20px;
}

</style>