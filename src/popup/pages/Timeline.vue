<template >
  <div class="list-container" style="max-height: 750px; overflow-y: auto;">
    <div class="dotted-line" :style="lineStyle"></div>
    <div class="owner-item">
      <Icon progress="0" />
      <span class="owner-name">{{ transactions[0].from.name }}</span>
    </div>
    <div v-for="transaction in transactions" :key="transaction.uid" class="list-container">
      <span class="transaction-item">{{ transaction.date.split("-")[0] }}</span>
      <span class="transaction-item">{{ transaction.date.split("-").slice(1, 3).join("-")}}  transaction id: {{ transaction.uid}}</span>
      <span class="transaction-item"></span>
      <div class="owner-item">
        <Icon progress="0" />
        <span class="owner-name">{{ transaction.to.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/popup/pages/Icon.vue";
export default {
  components: {Icon},
  methods: {
    changePage() {
      this.$router.push({ path: 'popup/recommend' })
    }
  },
  data() {
    return {

      lineStyle: {
        position: 'absolute',
        top: '50px',
        left: '18%',
        width: '2px',
        height: '70%',
        borderLeft: '1px dotted black',
        zIndex: '-1'
      },
      transactions: [
        {
          from: {
            icon: "https://example.com/owner1.png",
            name: "Alice",
            uid: "123",
          },
          to: {
            icon: "https://example.com/owner2.png",
            name: "Bob",
            uid: "234",
          },
          uid: "456",
          date: "2023-05-17",

        },
        {
          from: {
            icon: "https://example.com/owner2.png",
            name: "Bob",
            uid: "234",
          },
          to: {
            icon: "https://example.com/owner1.png",
            name: "Ceccille",
            uid: "456",
          },
          uid: "789",
          date: "2023-05-18",
        },
      ]
    };

  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
}

.owner-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 20px;
}


.owner-name {
  font-weight: bold;
  margin-left: 5px;
}

.transaction-item {
  display: flex;
  font-size: 10px;
  align-content: center;
}

.dotted-line {
  position: relative;
}
</style>