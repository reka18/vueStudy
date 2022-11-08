// noinspection JSUnresolvedVariable
// noinspection JSUnusedGlobalSymbols

Vue.createApp({
  template: `
    <h2>How Vue Works</h2>
    <input type="text" ref="userText">
    <button @click="setText">Set Text</button>
    <p>{{ message }}</p>
  `,
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log("beforeUnmount()")
  },
  unmounted() {
    console.log("unmounted()")
  }
}).mount('#app');
