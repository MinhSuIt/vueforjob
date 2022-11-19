<template>
  <div>
    <div>is loading: {{ isLoading }}</div>
    <div v-if="isOpen">
      alert is open:{{ isOpen }} Alert cục bộ khi login ko thành công với
      message: {{ message }}
    </div>
    <div>Layout chứa alert toàn cục + teleport để làm alert toàn cục</div>
    <input type="text" v-model="email" name="email" placeholder="Email" />
    <input
      type="text"
      v-model="password"
      name="password"
      placeholder="Password"
    />
    <button @click="loginAction({ email, password })">Login</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "./../stores/auth";
import { useLoadingStore } from "./../stores/loading";
import { useAlertStore } from "./../stores/alert";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useLoadingStore, ["isLoading"]),
    ...mapState(useAlertStore, ["message", "isOpen"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["loginAction"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
