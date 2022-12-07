<template>
  <div>
    <!-- only render header if information is passed -->
    <header v-if="$slots.header">
      <slot name="header">
        <h2>Fallback Content</h2>
        <!--  only rendered when passed content is empty -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>