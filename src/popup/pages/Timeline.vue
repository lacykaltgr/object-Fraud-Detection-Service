<template >
  <div class="list-container" style="max-height: 750px; overflow-y: auto;">
    <div class="dotted-line" :style="lineStyle"></div>
    <div class="owner-item">
      <Icon progress="0" />
      <span class="owner-name">{{ transactions[0].from.name }}</span>
      <span class="transaction-item">{{ transactions[0].from.uid }}</span>
    </div>
    <div v-for="transaction in transactions" :key="transaction.uid" class="list-container">
      <span class="transaction-item">
        <p>{{ transaction.date.split("-")[0] }}</p>
        <p class="tranaction-id">Verified transaction</p>

      </span>
      <span class="transaction-item">
        <p>{{ transaction.date.split("-").slice(1, 3).join("-")}}</p>
        <p class="tranaction-id">transaction hash: {{ transaction.uid}}</p>
      </span>

      <div class="owner-item">
        <Icon progress="0" />
        <span class="owner-name">{{ transaction.to.name }}</span>
        <span class="transaction-item">{{ transaction.from.uid }}</span>
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
        left: '16%',
        width: '2px',
        height: '70%',
        borderLeft: '1px dotted black',
        zIndex: '-1'
      },
      transactions: [
        {
          from: {
            icon: "https://example.com/owner1.png",
            name: "Alice Cooper",
            uid: "96f07db646bf6a5",
          },
          to: {
            icon: "https://example.com/owner2.png",
            name: "Bob Marley",
            uid: "6ef17c05d721",
          },
          uid: "d6543411553b7677196f07db646bf6a5",
          date: "2023-05-17",

        },
        {
          from: {
            icon: "https://example.com/owner2.png",
            name: "Bob Marley",
            uid: "6ef17c05d721",
          },
          to: {
            icon: "https://example.com/owner1.png",
            name: "Celena Gompez",
            uid: "aa56af53577c",
          },
          uid: "46c541a1f5fc82dfe6c08534e2dec0a0",
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
  margin-bottom: 8px;
  margin-top: 8px;
  margin-left: 15px;
}


.owner-name {
  font-weight: bold;
  margin-left: 5px;
  display: block;
}

.transaction-item {
  display: flex;
  font-size: 8px;
  align-content: center;
  opacity: 50%;
}

.dotted-line {
  position: relative;
}

.tranaction-id{
  margin-left: 30px;
}
</style>