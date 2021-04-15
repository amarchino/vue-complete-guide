Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      const selection = `box${box}Selected`
      this[selection] = !this[selection];
    }
  }
}).mount('#styling');
