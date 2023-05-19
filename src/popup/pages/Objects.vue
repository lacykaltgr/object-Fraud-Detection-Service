<template>
  <div class="my-object">
    <div class="object-list">
      <ul>
        <li v-for="object in objects" :key="object.id">
          <div class="object-details">
            <img :src="object.image" alt="Object Image" />
            <div class="object-id">
              <h3>{{ object.name }}</h3>
              <p>Purchase Date: {{ formatDate(object.purchaseDate) }}</p>
              <p>Object ID: {{ object.id }}</p>
              <p>Serial Num: {{ object.serial }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.my-object {
  text-align: right;
  margin-top: 10px;
  text-decoration-style: double;
}

.object-list {
  max-height: 300px; /* Set a fixed height for the scrollable list */
  overflow-y: scroll; /* Enable vertical scrolling */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

.object-list::-webkit-scrollbar {
  width: 0; /* Hide the default scrollbar for WebKit browsers (Chrome, Safari, etc.) */
}

.my-object {
  list-style: none;
  padding: 0;
  margin: 0px;
}

.object-id h3 {
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}

.object-id p {
  text-align: right;
  font-size: 8px;
}
.object-details img {
  width: 50px;
  height: 50px;
  margin-right: 30px;
}

.my-object .object-details {
  margin: 20px;
  color: gray;
  display: flex;
  align-items: center;
}
</style>


<script>
export default {
  data() {
    return {
      objects: [
        {
          id: 1,
          serial: 12123424,
          name: "Object 1",
          image: "/src/assets/logo.png",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },
        {
          id: 1,
          serial: 12123424,
          name: "Object 1",
          image: "/src/assets/logo.png",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },
        {
          id: 1,
          serial: 12123424,
          name: "Object 1",
          image: "/src/assets/logo.png",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },
        {
          id: 1,
          serial: 12123424,
          name: "Object 1",
          image: "/src/assets/logo.png",
          purchaseDate: "2023-01-01T12:00:00Z" // Replace with actual purchase date
        },{
          id: 1,
          serial: 12123424,
          name: "Object 1",
          image: "/src/assets/logo.png",
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