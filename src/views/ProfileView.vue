<template>
  <div>
    <p>Tên:{{user.name}}</p>
  </div>
</template>

<script>
import { useAuthStore } from "./../stores/auth";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(useAuthStore, ["user"]),
  },
};
</script>

<style lang="scss" scoped>
</style>