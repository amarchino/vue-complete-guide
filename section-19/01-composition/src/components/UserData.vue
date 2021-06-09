<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    const uName = computed(() => `${props.firstName} ${props.lastName}`);
    return {
      userName: uName
    }
  }
}
</script>
