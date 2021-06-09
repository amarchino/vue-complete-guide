<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from '@vue/runtime-core';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const age = inject('userAge');
    const uName = computed(() => `${props.firstName} ${props.lastName}`);
    console.log(context);
    return {
      userName: uName,
      age
    }
  }
}
</script>
