<template>
  <div class="list-container" style="max-height: 750px; overflow-y: auto;">
    <div class="dotted-line" :style="lineStyle"></div>
    <div class="owner-item">
      <Icon progress="0" />
      <span class="owner-name">{{ transactions[0].from.name }}</span>
    </div>
    <div v-for="transaction in transactions" :key="transaction.uid" class="list-container">
      <span class="transaction-item">{{ transaction.date }} id:{{ transaction.uid }}</span>
      <div class="owner-item">
        <Icon progress="0" />
        <span class="owner-name">{{ transaction.from.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/popup/pages/Icon.vue";
export default {
  components: {Icon},
  data() {
    return {
      lineStyle: {
        position: 'absolute',
        top: '100px',
        left: '15%',
        width: '1px',
        height: '60%',
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
  margin-bottom: 10px;
}

.owner-icon {
  width: 30px;
  height: 30px;
}

.owner-name {
  font-weight: bold;
  margin-left: 5px;
}

.owner-uid {
  margin-left: auto;
}

.transaction-item {
  display: flex;
  font-size: 10px;
  align-content: center;
}

.transaction-date {
  display: flex;
}

.dotted-line {
  position: relative;
}
</style>