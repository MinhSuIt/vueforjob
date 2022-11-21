<template>
  <div>
    <input type="text" v-model="formData.name" placeholder="Name" />
    <input type="text" v-model="formData.email" placeholder="Email" />
    <input type="text" v-model="formData.password" placeholder="Password" />
    <input
      type="file"
      multiple
      ref="file"
      id="customFile"
      @change="(e) => handleFileChange(e)"
    />
    <label
      v-if="formData.avatarName"
      class="custom-file-label text-left"
      for="customFile"
      >{{ formData.avatarName }}</label
    >
    <button @click="createWithUpload">create with upload</button>
  </div>
</template>

<script>
import { each, random } from "lodash";
import axios from "./../utils/axios";
import { useAlertStore, defaultAlertState } from "./../stores/alert";
import { useLoadingStore, defaultLoadingState } from "./../stores/loading";
import { mapActions } from "pinia";

export default {
  data() {
    const tmp = random(1, 888888888888) + "asdkjbsakdbsabkjd";
    const rand = random(1, 888888888888);
    return {
      formData: {
        // name: tmp,
        email: `${rand}${tmp}${rand}@gmail.com`,
        password: tmp,
        avatar: null,
        avatarName: "",
      },
      defaultFormData: {
        name: "",
        email: "",
        password: "",
        avatar: null,
        avatarName: "",
      },
    };
  },
  methods: {
    ...mapActions(useLoadingStore, ["handleLoading"]),
    async createWithUpload() {
      this.handleLoading({
        ...defaultLoadingState,
        isLoading: true,
      });
      this.errors = null;

      let formData = new FormData();
      //   formData.append("avatar", this.formData.avatar);

      each(this.formData, (value, key) => {
        formData.append(key, value);
      });
      formData.append("key", 123);
      console.log(this.formData);
      console.log(formData);
      const res = await axios.post("auth/register", formData, {
        // .post("auth/register", this.formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      this.formData = {
        ...this.defaultFormData,
      };

      this.handleLoading({
        ...defaultLoadingState,
        isLoading: false,
      });
    },
    handleFileChange(e) {
      this.formData.avatar = e.target.files[0];
      this.formData.avatarName = this.formData.avatar.name;
    },
  },
  unmounted() {
    // const alert = useAlertStore();
    // alert.handleAlert(defaultState);
  },
};
</script>

<style lang="scss" scoped>
</style>