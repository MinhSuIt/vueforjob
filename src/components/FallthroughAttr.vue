<template>
  <!-- <div>{{ title }}</div> -->
  <div class="red">{{title}}-Fallthrough attributes: merge attribute cùng tên nếu chỉ có 1 tag bên trong, mở tag div bên trên sẽ mất hiệu ứng fallthrough</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "default",
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
.red{
  color:red
}
.border{
  border: 1px solid blue;
}
</style>