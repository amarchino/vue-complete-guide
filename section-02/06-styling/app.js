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
      this['box' + box + 'Selected'] = true;
    }
  }
}).mount('#styling');
