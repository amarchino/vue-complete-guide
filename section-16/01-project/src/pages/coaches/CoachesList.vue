<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
          ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </base-card>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']
        .filter(coach => Object.keys(this.activeFilters)
          .some(filter => this.activeFilters[filter] && coach.areas.includes(filter)));
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  },
  methods: {
    setFilters(emittedFilters) {
      this.activeFilters = emittedFilters;
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
