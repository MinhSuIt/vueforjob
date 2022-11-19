<template>
  <div>product page</div>
  <div>product_id: {{ $route.params.id }}</div>
  <RouterLink
    :to="{ name: 'product-infomation', params: { id: $route.params.id } }"
    >Infomation</RouterLink
  >
  <RouterLink
    :to="{ name: 'product-review', params: { id: $route.params.id } }"
    >Review</RouterLink
  >
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>

<style lang="scss" scoped>
</style>
