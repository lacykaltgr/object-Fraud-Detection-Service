<template>
  <div class="container">
    <img :src="user.picture" alt="User Picture" />
    <h2>{{ user.name }}</h2>
    <p>Account created: {{ formatDate(user.created) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        picture: "/src/assets/kep.jpg",
        created: "2023-01-01T12:00:00Z" // Replace with actual account creation date
      }
    };
  },
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}

img {
  width: 200px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 16px; /* Add spacing between the image and the text */
}

h2 {
  font-size: 24px; /* Adjust the font size as needed */
  margin-bottom: 8px; /* Add spacing between the title and the paragraph */
}

p {
  font-size: 16px; /* Adjust the font size as needed */
}
</style>
