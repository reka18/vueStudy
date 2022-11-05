// noinspection JSUnresolvedVariable
// noinspection JSUnusedGlobalSymbols

Vue.createApp({
  data() {
    return {
      counter: 7,
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
    }
  },
  computed: {
    // Use for data binding, only executes if dependent data
    // field changes. Use for data that depends on other data.
    computedFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    // Not referenced from html template. Use for running
    // side effects.
    counter(newVal, oldVal) {
      if (newVal > oldVal) {
        console.log(`Counter incremented to ${newVal}`)
      } else {
        console.log(`Counter decremented to ${newVal}`)
      }
      if (newVal > 50) {
        const thisPtr = this;  // JS constraint
        setTimeout(() => {
          console.log(`Timer reset ${thisPtr.counter} to 7`)
          thisPtr.counter = 7;
        }, 2000);
      }
    },
    // accesses new and old value automatically
    // firstName(newValue, oldValue) {
    //   this.fullName = `${newValue} ${this.lastName}`
    // }
  },
  methods: {
    // Use for event or data binding, but note that they are
    // unaware of dependent data field changes and recompute
    // all methods in html if any one data field changes. Use
    // for events or data that really need constant re-eval.
    add(n) {
      this.counter = this.counter + n;
    },
    sub(n) {
      this.counter >= n
        ? this.counter = this.counter - n
        : this.counter = 0;
    },
    submitSignUp(event) {
      this.email = event;
      alert(`Check your email to confirm!`)
    },
    resetInput() {
      this.firstName = '';
      this.lastName = '';
      this.fullName = '';
    },
    updateName() {
      this.fullName = this.firstName !== '' && this.lastName !== ''
        ? `${this.firstName} ${this.lastName}`
        : '';
    },
    setFirstName(name) {
      this.firstName = name;
    }
  }
}).mount("#events")