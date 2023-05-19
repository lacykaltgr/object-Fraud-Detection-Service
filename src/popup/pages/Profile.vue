<template>
  <div class="container">
    <div class="card">
      <div class="line"></div> <!-- New line div -->
      <img :src="user.picture" alt="User Picture" />
      <h2>{{ user.name }}</h2>
      <p>Account created: {{ formatDate(user.created) }}</p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f6f8;
}

.card {
  position: relative; /* Add position relative for proper alignment */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 2px;
  height: 80px;
  background-color: #ddd;
}

img {
  width: 200px;
  height: auto;
  margin-bottom: 16px;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 8px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 16px;
  color: #777;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
