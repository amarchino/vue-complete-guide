Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return {active: this.boxASelected};
    },
    boxBClasses() {
      return {active: this.boxBSelected};
    },
    boxCClasses() {
      return {active: this.boxCSelected};
    }
  },
  methods: {
    boxSelected(box) {
      const selection = `box${box}Selected`
      this[selection] = !this[selection];
    }
  }
}).mount('#styling');
