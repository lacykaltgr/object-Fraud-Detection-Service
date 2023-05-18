<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div class="typing-effect">{{ typedText }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typedText: '',
    };
  },
  methods: {
    fetchData() {
      // Simulating API call delay with setTimeout
      setTimeout(() => {
        // Mock API response
        const response = 'This is the response from the API.';
        this.typeText(response);
      }, 1000);
    },
    typeText(text) {
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        this.typedText += text[currentIndex];
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(typingInterval);
        }
      }, 100); // Typing speed: 100 milliseconds per character
    },
  },
};
</script>

<style>
.typing-effect {
  font-family: monospace;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>