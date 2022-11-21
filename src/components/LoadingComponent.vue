<template>
  <div class="loading" v-if="isLoading.isLoading">
    <div class="loading-content">Loading with message: {{ isLoading.message }}</div>
  </div>
</template>

<script>
import { useLoadingStore } from "./../stores/loading";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useLoadingStore, ["isLoading"]),
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>