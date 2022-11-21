<template>
  <div class="loading" v-if="isLoading.isLoading">
    Loading with message: {{isLoading.message}}
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
  text-align: center;
  background: #000;
  position:fixed;
  top: 0;
  left: 0;
  color:white;
  z-index: 99999;
}
</style>