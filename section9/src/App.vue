<template>
  <div>
    <!--<TheHeader/>-->
    <!--<BadgeList/>-->
    <!--<UserInfo-->
    <!--  :full-name="activeUser.name"-->
    <!--  :info-text="activeUser.description"-->
    <!--  :role="activeUser.role"-->
    <!--&gt;</UserInfo>-->
    <!--<CourseGoals>-->
    <!--  <template #default="props">-->
    <!--    <h2>{{ props.item }}</h2>-->
    <!--  </template>-->
    <!--</CourseGoals>-->
    <!--<CourseGoals #default="props">-->
    <!--  <h2>{{ props.item }}</h2>-->
    <!--</CourseGoals>-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('managed-goals')">Managed Goals</button>
    <!--<ActiveGoals v-if="selectedComponent === 'active-goals'"/>-->
    <!--<ManagedGoals v-if="selectedComponent === 'managed-goals'"/>-->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
// import TheHeader from "@/components/TheHeader";
// import BadgeList from "@/components/BadgeList";
// import UserInfo from "@/components/UserInfo";
// import CourseGoals from "@/components/CourseGoals";
import ManagedGoals from "@/components/ManagedGoals";
import ActiveGoals from "@/components/ActiveGoals";

export default {
  components: {
    ManagedGoals,
    ActiveGoals,
    // CourseGoals,
    // TheHeader,  // special syntax
    // BadgeList,
    // UserInfo,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>