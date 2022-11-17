<template>
  <div>
    <button @click="callCustomEvent('param')">
      Custom event - gọi method của parent view từ child view
    </button>
    <p>Thường ko nên dùng vì mỗi view sẽ có trách nhiệm khác nhau</p>
  </div>
</template>

<script>
export default {
  methods: {
    callCustomEvent(param) {
      this.$emit("customEvent",param);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>