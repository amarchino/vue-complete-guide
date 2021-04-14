Vue.createApp({
  data() {
    return {
      value: 0,
      resetTimeout: undefined
    }
  },
  computed: {
    result() {
      if(this.value < 37) {
        return 'Not there yet';
      }
      if(this.value > 37) {
        return 'Too much!';
      }
      return this.value;
    }
  },
  watch: {
    result() {
      if(this.resetTimeout) {
        clearTimeout(this.resetTimeout);
      }
      setTimeout(() => this.value = 0, 5000);
    }
  },
  methods: {
    add(num) {
      this.value += num;
    }
  }
}).mount('#assignment')
