<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save data</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList beforeRouteEnter', to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList beforeRouteLeave', to, from);
    if(this.changesSaved){
      return next();
    }
    const userWantsToLeave = confirm('Ar you sure? You got unsaved changes');
    next(userWantsToLeave);
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
