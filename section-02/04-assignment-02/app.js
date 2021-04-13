const app = Vue.createApp({
  data() {
    return {
      text: '',
      text2: '',
      temp: ''
    };
  },
  methods: {
    onClick() {
      alert('Clicked')
    },
    onKeydown(e) {
      setTimeout(() => this.text = e.target.value, 1);
    },
    onKeydown2(e) {
      this.temp = e.target.value;
    },
    onKeydownEnter(e) {
      this.text2 = this.temp;
    }
  }
});
app.mount('#assignment');
