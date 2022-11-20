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
export default {
  data() {
    const tmp = random(1, 888888888888) + "asdkjbsakdbsabkjd";
    const rand = random(1, 888888888888);
    return {
      formData: {
        name: tmp,
        email: `${rand}${tmp}${rand}@gmail.com`,
        password: tmp,
        avatar: null,
        avatarName: "",
      },
    };
  },
  methods: {
    createWithUpload() {
      this.errors = null;

      let formData = new FormData();
    //   formData.append("avatar", this.formData.avatar);

      each(this.formData, (value, key) => {
        formData.append(key, value);
      });
      formData.append('key', 123);
      console.log(this.formData);
      console.log(formData);
      axios
        .post("auth/register", formData, {
        // .post("auth/register", this.formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          //   this.showForm = false
          //   this.user = response.data.data
        })
        .catch((err) => {
          //   if (err.response.status === 422) {
          //     this.errors = []
          //     .each(err.response.data.errors, error => {
          //       .each(error, e => {
          //         this.errors.push(e)
          //       })
          //     })
          //   }
          console.log(err);
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