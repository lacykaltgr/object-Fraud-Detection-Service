<template>
  <div>
    <div v-for="transaction in transactions" :key="transaction.uid" class="timeline-item">
      <div class="timeline-date">{{ transaction.date }}</div>
      <div class="timeline-content">
        <div class="profile-picture">
          <img :src="transaction.profilePicture" alt="Profile Picture">
        </div>
        <div class="transaction-details">
          <div class="uid">{{ transaction.uid }}</div>
          <!-- Additional transaction details here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          uid: 'user1',
          date: '2023-05-01',
          profilePicture: 'user1-profile-picture.jpg',
        },
        {
          uid: 'user2',
          date: '2023-05-02',
          profilePicture: 'user2-profile-picture.jpg',
        },
      ]
    };
  }
};
</script>

<style>
.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.timeline-date {
  font-weight: bold;
  margin-right: 10px;
}

.timeline-content {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.transaction-details {
  /* Additional styles for transaction details */
}

.uid {
  font-weight: bold;
  /* Additional styles for UID */
}
</style>