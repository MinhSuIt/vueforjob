<template>
  <div class="red">
    <div>Async component</div>
  <div>Sửa cách khai báo component + check browser + mounted</div>
  <div>trường hợp dùng: ví dụ có nút bấm create sẽ hiển thị lên 1 modal điền giá trị, model này cần là async component </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
    mounted() {
        alert("async component");
    },
};
</script>

<style scoped>
.red{
    border:1px solid red;
}
</style>