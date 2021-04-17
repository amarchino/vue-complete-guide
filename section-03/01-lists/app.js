const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    }
  }
});

app.mount('#user-goals');
