<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { computed, ref, watch } from 'vue';
export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(31);
    const userName = computed(() => `${firstName.value} ${lastName.value}`);

    watch([uAge, userName], ([newAge, newUserName], [oldAge, oldUserName]) => {
      console.log(`Old age: ${oldAge}`);
      console.log(`New age: ${newAge}`);

      console.log(`Old username: ${oldUserName}`);
      console.log(`New username: ${newUserName}`);
    });

    function setNewAge() {
      uAge.value = 32;
    }
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName,
      firstName,
      lastNameInput,
      age: uAge,
      setAge: setNewAge,
      setLastName
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
