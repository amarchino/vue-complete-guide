<template>
  <li>
    <header>
      <h1>{{ friend.name }}</h1>
    </header>
    <button @click="toggleDetails">{{ detailsAraVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAraVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAraVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com"
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAraVisible = !this.detailsAraVisible;
    }
  }
};
</script>
