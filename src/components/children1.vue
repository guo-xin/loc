<template>
  <div>
    <mt-button @click="changeValue($event)" type="primary">children1</mt-button>
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="username"
    ></mt-field>
    <grand-son v-bind="$props"></grand-son>
  </div>
</template>

<script>
import grandSon from "./grandSon";
export default {
  data() {
    return {
      name: "children1"
    };
  },

  props: {
    va: {
      type: String,
      // 必传
      required: true
    },
    email: {
      // 自定义校验规则
      validator (value) {
        return /^\w+$/.test(value)
      },
      
    },
    id: {
      type: String,
      // 默认值
      default: ''
    }
  },

  components: {
    "grand-son": grandSon
  },

  watch: {
    username: function(val) {
      this.$emit("changeValue", val);
    }
  },
  computed: {
    username() {
      return this.email;
    }
  },
  beforeCreate() {
    console.log(`--${this.name || "children1"}--beforeCreate`);
  },
  created() {
    console.log(`--${this.name}--created`);
  },
  beforeMount() {
    console.log(`--${this.name}--beforeMount`);
  },
  mounted() {
    this.$refs.input.focus();
    // console.log(this, 99999999999999)
    console.log(`--${this.name}--mounted`);
  },
  beforeUpdate() {
    console.log(`--${this.name}--beforeUpdate`);
  },
  updated() {
    console.log(`--${this.name}--updated`);
  },
  beforeDestroy() {
    console.log(`--${this.name}--beforeDestroy`);
  },
  destroyed() {
    console.log(`--${this.name}--destroyed`);
  },
  methods: {
    changeValue(e) {
      // console.log(22222, e);
      // 改变父组件的值
      this.$emit("changeValue", "guoxin");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
