const app = Vue.createApp({
  data() {
    return {
      name: 'Alessandro',
      age: 32,
      random: Math.random(),
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    };
  }
});
app.mount('#assignment')
