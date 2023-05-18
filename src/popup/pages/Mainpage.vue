
<template>
  <timeline></timeline>
  <recommend></recommend>
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

</style>