<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const x = ref(0);
const y = ref(0);

function update(event) {
  x.value = event.pageX;
  y.value = event.pageY;
}

onMounted(() => {
    console.log("only render 1 time")
    window.addEventListener("mousemove", update)
});
onUnmounted(() => window.removeEventListener("mousemove", update));
</script>

<template>
  <div>
    <p>Dùng ref để tránh render lại</p>
    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>