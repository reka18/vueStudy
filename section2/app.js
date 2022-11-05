// noinspection JSUnresolvedVariable
// noinspection JSUnusedGlobalSymbols

Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false
    }
  },
  watch: {},
  computed: {
    boxAClasses() {
      return {active: this.boxA};
    },
    boxBClasses() {
      return {active: this.boxB};
    },
    boxCClasses() {
      return {active: this.boxC};
    },
  },
  methods: {
    boxSelected(box) {
      switch (box) {
        case 'A':
          this.boxA = !this.boxA;
          break;
        case 'B':
          this.boxB = !this.boxB;
          break;
        case 'C':
          this.boxC = !this.boxC;
          break;
      }
    },
    deselect(box) {
      switch (box) {
        case 'A':
          this.boxA = false;
          break;
        case 'B':
          this.boxB = false;
          break;
        case 'C':
          this.boxC = false;
          break;
      }
    }
  }
}).mount('#styling');