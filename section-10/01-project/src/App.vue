<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :value="res.title"
      :description="res.description"
      :link="res.link"></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue'
export default {
  components: {
    LearningResource
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://google.com'
        }
      ]
    }
  }
}
</script>
