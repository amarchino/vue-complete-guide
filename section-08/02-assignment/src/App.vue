<template>
  <active-user :username="user.name" :age="user.age"></active-user>
  <user-data @save-user="updateUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0
      }
    }
  },
  methods: {
    updateUser(name, age) {
      this.user = {
        name,
        age
      };
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
section,
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
