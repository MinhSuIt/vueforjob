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
import { mapActions, mapState } from "pinia";
import { notification } from "ant-design-vue";

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
  computed:{
    ...mapState(useAlertStore, ["isOpen", "message"]),
  },
  methods: {
    ...mapActions(useLoadingStore, ["handleLoading"]),
    ...mapActions(useAlertStore, ["handleAlert"]),
    async createWithUpload() {
      this.handleLoading({
        ...defaultLoadingState,
        isLoading: true,
      });
      this.errors = null;

      let formData = new FormData();

      each(this.formData, (value, key) => {
        formData.append(key, value);
      });
      formData.append("key", 123);
      console.log(this.formData);
      console.log(formData);
      const res = await axios.post("auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.id) {
        //base logic cho cả vue và react nên đoạn this.handleAlert không hề dư
        this.handleAlert({
          ...defaultAlertState,
          isOpen: true,
          message: "success",
        });
        if(this.isOpen){
          notification.open({
            message: "Create thành công",
            description: this.message,
            onClick: () => {
              console.log("Notification Clicked!");
            },
          });
        }
        this.formData = {
          ...this.defaultFormData,
        };
      }

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
};
</script>

<style lang="scss" scoped>
</style>