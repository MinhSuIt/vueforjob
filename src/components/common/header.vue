<template>
  <div class="abc">
    <p class="a">Header</p>
    <a-button type="primary" danger>Integrate antd for vue with vite</a-button>

    <router-link to="/">
      <a-button type="primary" danger>Trang chủ</a-button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.abc {
  border: 1px solid red;
  .a {
    color: blue;
  }
}
</style>