Vue.createApp({
  data() {
    return {
      cssClass: '',
      visible: true,
      background: ''
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    }
  }
}).mount('#assignment');
