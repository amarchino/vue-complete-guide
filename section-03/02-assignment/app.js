Vue.createApp({
  data() {
    return {
      doShow: true,
      enteredTask: '',
      tasks: []
    };
  },
  computed: {
    hideShowText() {
      return this.doShow ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    toggleTasks() {
      this.doShow = !this.doShow;
    }
  }
}).mount('#assignment');
