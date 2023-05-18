<template>
  <div class="my-object">
    <div class="object-list">
      <ul>
        <li v-for="object in objects" :key="object.id">
          <img :src="object.image" alt="Object Image" />
          <div class="object-details">
            <h3>{{ object.name }}</h3>
            <p>Purchase Date: {{ formatDate(object.purchaseDate) }}</p>
            <p>Object ID: {{ object.id }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: [
        {
          id: 1,
          name: "Object 1",
          image: "/src/assets/kep.jpg",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },
        {
          id: 1,
          name: "Object 1",
          image: "/src/assets/kep.jpg",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },
        {
          id: 1,
          name: "Object 1",
          image: "/src/assets/kep.jpg",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },
        {
          id: 1,
          name: "Object 1",
          image: "/src/assets/kep.jpg",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },{
          id: 1,
          name: "Object 1",
          image: "/src/assets/kep.jpg",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },



        // Add more objects as needed
      ]
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
.my-object {
  text-align: center;
  margin-top: 10px;
  text-decoration-style: double;
}

.object-list {
  max-height: 300px; /* Set a fixed height for the scrollable list */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

.my-object ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.my-object li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.my-object img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
}

.my-object .object-details h3 {
  margin: 0;
}

.my-object .object-details p {
  margin: 5px 0;
  color: gray;
}

@media (min-width: 768px) {
  /* Apply styles when the window width is 768px or larger */
  .object-list {
    width: 100vw; /* Set the width to full viewport width */
    margin-left: calc(50% - 50vw); /* Center the list horizontally */
    overflow-x: hidden; /* Enable horizontal scrolling if necessary */
  }
}
.object-list::-webkit-scrollbar {
  width: 0.5em;
}
</style>
