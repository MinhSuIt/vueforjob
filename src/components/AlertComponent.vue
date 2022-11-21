<template>
  <div v-if="isOpen">{{message}}</div>
</template>

<script>
import { useAlertStore, defaultAlertState } from "./../stores/alert";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useAlertStore, ["message", "isOpen"]),
  },
  methods: {
    ...mapActions(useAlertStore,["handleAlert"])
  },
};
</script>

<style lang="scss" scoped>
</style>