<template>
  <div>
    data : {{ data }}
    <h1 :alt="data">Bind attribute</h1>
    <button @click="eventWithoutParam">Event without param</button>
    <button @click.prevent="eventWithModifier">Event with modifier</button>
    <button @click="(event) => eventWithParam('eventWithParam', event)">
      Event with param
    </button>
    <input type="text" placeholder="2 way binding" v-model="twoway.name" />
    <div>{{ computedData }}</div>
    <button @click="setComputedData('abc')">setComputedData</button>
    <p>sử dụng ref để auto focus and pass value trong mounted</p>
    <input
      type="text"
      ref="refInput"
      value=""
      placeholder="sử dụng ref để auto focus and pass value trong mounted"
    />
    <item-for-emit-view  @customEvent="customedEvent" />
  </div>
</template>

<script>
import ItemForEmitView from './ItemForEmitView.vue';
export default {
  // import component con vào
  components:{
    ItemForEmitView,
  },
  data() {
    return {
      data: "fresh",
      twoway: {
        name: "",
      },
    };
  },
  methods: {
    eventWithoutParam() {
      this.data = "old";
    },
    eventWithModifier() {
      alert("eventWithModifier");
    },
    eventWithParam(param, e) {
      e.preventDefault();
      this.data = param;
    },
    setComputedData() {
      this.data = "abc";
    },
    customedEvent(param) {
      alert(param)
    },
  },
  computed: {
    computedData: {
      set(value) {
        return value + "setcomputedData";
      },
      get() {
        return this.data + "getComputedTemp";
      },
    },
  },
  watch: {
    data() {
      alert("watch data change");
    },
  },
  mounted() {
    this.$refs.refInput.focus();
    setTimeout(() => {
      this.$refs.refInput.value = "123213";
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
</style>
