<template>
  <form @submit.prevent="save">
    <div>
      <label>Username:</label>
      <input type="text" v-model="username"/>
    </div>
    <div>
      <label>Age:</label>
      <input type="text" v-model="age"/>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      age: ''
    };
  },
  emits: [
    'save-user'
  ],
  methods: {
    save() {
      this.$emit('save-user', this.username, this.age)
    }
  }
}
</script>
