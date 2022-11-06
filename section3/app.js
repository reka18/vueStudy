// noinspection JSUnresolvedVariable
// noinspection JSUnusedGlobalSymbols

Vue.createApp({
  data() {
    return {
      goals: [],
      newGoal: '',
      d: {initials: "RK", age: 38}
    };
  },
  methods : {
    noGoals() {
      return this.goals.length === 0;
    },
    addGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  }
}).mount('#user-goals');
