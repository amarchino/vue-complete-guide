<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const age = inject('userAge');
    const uName = computed(() => `${props.firstName} ${props.lastName}`);
    console.log(context);

    onBeforeMount(() => console.log('onBeforeMount'));
    onMounted(() => console.log('onMounted'));
    onBeforeUpdate(() => console.log('onBeforeUpdate'));
    onUpdated(() => console.log('onUpdated'));
    onBeforeUnmount(() => console.log('onBeforeUnmount'));
    onUnmounted(() => console.log('onUnmounted'));

    return {
      userName: uName,
      age
    }
  }
}
</script>
