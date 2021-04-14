const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  computed: {
    fullname() {
      if(this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    counter(value) {
      if(value > 50) {
        setTimeout(() => this.counter = 0, 2000);
      }
    }
    // name(value, oldValue) {
    //   if(value === '') {
    //     this.fullname = '';
    //   }
    //   this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   if(value === '') {
    //     this.fullname = '';
    //   }
    //   this.fullname = this.name + ' ' + value;
    // }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
