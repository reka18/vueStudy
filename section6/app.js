// noinspection JSUnresolvedVariable

const app = Vue.createApp({
  template: `
    <ul>
    <friend-contact></friend-contact>
    </ul>
  `,
  data() {
    return {
      friends: [],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
      <li><strong>Type: </strong>{{ friend.type }}</li>
    </ul>
    </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: 1,
        name: "Elizabeth K",
        phone: "970-799-5678",
        email: "diyoubolical@icloud.com",
        type: "person",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");