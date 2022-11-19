<template>
  <Header />
  <Nav></Nav>
  <RouterView />
</template>

<script>
import Nav from "../components/common/nav.vue";
import Header from "../components/common/header.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    Header,
    RouterLink,
    RouterView,
    Nav,
  },
};
</script>

<style lang="scss" scoped>
</style>