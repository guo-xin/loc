<template>
  <div>
    <mt-button @click="goHello" type="primary">{{ value }}</mt-button>
    <children1
      v-if="showChildren"
      va="guoxin"
      :email="value"
      @changeValue="changeValue"
      class="a"
      id="ddddd"
    ></children1>
    <children2></children2>

    <mt-button type="primary" @click="focusInput">input</mt-button>
  </div>
</template>

<script>
import children1 from "./children1";
import children2 from "./children2";

export default {
  data() {
    return {
      showChildren: false,
      value: "Hello",
      name: "parent"
    };
  },

  components: {
    children1,
    children2
  },

  beforeCreate() {
    console.log(`--${this.name || "parent"}--beforeCreate`);
  },
  created() {
    this.changeValue("111");
    console.log(`--${this.name}--created`);
  },
  beforeMount() {
    this.changeValue("2222");
    console.log(`--${this.name}--beforeMount`);
  },
  mounted() {
    this.$el.addEventListener("click", () => {
      console.log("click" + 66666);
    });
    this.changeValue("333333");
    // this.value = 'ggggg';
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
    goHello() {
      this.$router.push({ name: "HelloWorld" });
    },
    changeValue(val) {
      // console.log(val, 88888)
      this.value = val;
	},
	
	focusInput() {
		this.showChildren = true;
	}
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
