<template>
  <Transition name="fade">
    <p v-if="toggleTransition === true">Transition</p>
  </Transition>
  <button @click="handleToggleTransition">Open transition</button>
</template>

<script>
import { Transition } from "vue";
export default {
  data() {
    return {
      toggleTransition: false,
    };
  },
  methods: {
    handleToggleTransition() {
      this.toggleTransition = !this.toggleTransition;
    },
  },
};
</script>

<style scoped>
/* {transition name}+ {default of vue} */
/*  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>