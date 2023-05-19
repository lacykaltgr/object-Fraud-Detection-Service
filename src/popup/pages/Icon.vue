<template>
  <div class="loader-container">
    <div class="loader-circle" :style="loaderCircleStyle"></div>
    <div class="icon-container">
      <div class="icon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  computed: {
    loaderCircleStyle() {
      const borderColor = this.calculateBorderColor();

      return {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: '#ccc',
        overflow: 'hidden',
        border: `${borderColor} 4px solid`
      };
    }
  },
  methods: {
    calculateBorderColor() {
      // Calculate the darkness of the border color based on the progress value
      const r = Math.round((100-this.progress)+5 * 2);
      const g = Math.round((100-this.progress)+5 * 2);
      const b = Math.round((100-this.progress)+5 * 2);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
};
</script>

<style scoped>
.loader-container {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
}

.loader-circle {
  position: absolute;
  width: 100%;
  height: 100%;
}

.icon-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon {
  font-size: 24px;
  /* Add your icon class or use an external icon library */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
