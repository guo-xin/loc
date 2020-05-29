<template>
  <div>
    <div class="hello">
      <div class="first" @click="open">1111</div>
      <div class="second">2222</div>
      <div class="third">3333</div>
    </div>
    <mt-datetime-picker
      v-model="pickerVisible"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerVisible: new Date(),
      name: 'children2'
    }
  },

  beforeCreate() {
    console.log(`--${this.name || 'children2'}--beforeCreate`);
  },
  created() {
    console.log(`--${this.name}--created`)
  },
  beforeMount() {
    console.log(`--${this.name}--beforeMount`)
  },
  mounted() {
    // console.log(this, 8888383838)
    console.log(`--${this.name}--mounted`)
  },
  beforeUpdate() {
    console.log(`--${this.name}--beforeUpdate`)
  },
  updated() {
    console.log(`--${this.name}--updated`)
  },
  beforeDestroy() {
    console.log(`--${this.name}--beforeDestroy`)
  },
  destroyed() {
    console.log(`--${this.name}--destroyed`)
  },
  methods: {
    /**
     * @desc: 通过ref调用子组件里面的方法
     */
    open () {
      this.$refs['picker'].open()
    },
    handleConfirm (val) {
      console.log(2222)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  div {
    flex: 1;
  }
}
</style>
