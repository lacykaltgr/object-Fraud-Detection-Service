
<template>
  <button class="typing-effect" @click="handleClick" :style="{ height: textBoxHeight + 'px' }" :class="{ 'active': isActive } ">
    {{ typedText }}
  </button>
</template>

<script>
import {useRoute} from "vue-router";

export default {

  data() {
    return {
      typedText: 'Ask AI',
      isActive: true,
    };
  },
  methods: {
    growButton() {
      this.isActive = false;
    },
    handleClick() {
      this.growButton();
      this.fetchData();
    },
    fetchData() {
      this.typedText = '';
      // Simulating API call delay with setTimeout
      setTimeout(() => {
        const responses = ["After thorough analysis of the website and seller in question, I cannot recommend this specific product or seller due to multiple red flags and suspicious indicators found during the assessment.",
          "Based on my analysis, I cannot recommend this particular product or seller due to significant concerns regarding their credibility and potential fraudulent activities.", "Based on my thorough assessment, I confidently recommend this seller for online purchases. They have consistently exhibited trustworthy practices, indicating a reliable track record."]
        // Mock API response
        const response = responses[Math.floor(Math.random() * responses.length)];
        this.typeText(response);
      }, 100);
    },
    typeText(text) {
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        this.typedText += text[currentIndex];
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(typingInterval);
        }

        this.$nextTick(() => {
          const container = document.querySelector('.typing-effect');
          if (container.scrollHeight > container.clientHeight) {
            this.textBoxHeight += 20; // Increase the height by 20 pixels (adjust as needed)
          }
        });
      }, 10); // Typing speed: 100 milliseconds per character
    },
  },
};
</script>

<style>
button {
  width: 300px;
  height: 200px;
  transition: width 0.8s, height 0.8s;
  color: black;
  background-color: white;
}

button.active {
  width: 250px;
  height: 40px;
  background-coLor: steelblue;
  color: white;
  font-family: Helvetica, serif;
  font-weight: bold;
}


.typing-effect {
  font-family: monospace;
  font-size: 14px;
  border: 2px solid steelblue;
  padding: 10px;
  width: 300px; /* Set the desired width of the textbox */
  overflow-wrap: break-word; /* Break the line when the text reaches the width */
  transition: height 0.2s; /* Add transition for smooth height change */
}
</style>