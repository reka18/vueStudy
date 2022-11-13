<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <new-friend @add-contact="addContact"></new-friend>
  <ul>
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone="friend.phone"
      :email="friend.email"
      :favorite="friend.favorite"
      @toggle-favorite="toggleFavorite"
      @remove="removeContact"
    ></friend-contact>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "John Doe",
          phone: "123-456-7890",
          email: "john.doe@gmail.com",
          favorite: true,
        },
        {
          id: "2",
          name: "Jane Doe",
          phone: "098-765-4321",
          email: "jane.doe@gmail.com",
          favorite: false,
        },
        {
          id: "3",
          name: "Billy Doe",
          phone: "098-765-4322",
          email: "billy.doe@gmail.com",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      const friend = this.friends.find(
        (friend) => friend.id === id,
      );
      friend.favorite = !friend.favorite;
    },
    addContact(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriend);
    },
    removeContact(friendId) {
      this.friends = this.friends.filter(
        (friend) => friend.id !== friendId,
      );
    },
  },
};
</script>

<style>

</style>