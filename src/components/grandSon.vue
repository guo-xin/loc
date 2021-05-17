<template>
  <div>
    <div class="hello">
      <div class="first" @click="open">1111</div>
      <div class="second">{{ email }}</div>
      <div class="third">grandSon</div>
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
      name: 'grandSon'
    }
  },

  props: ['va', 'email'],

  beforeCreate() {
    console.log(`--${this.name || 'grandSon'}--beforeCreate`);
  },
  created() {
    console.log(`--${this.name}--created`)
  },
  beforeMount() {
    console.log(`--${this.name}--beforeMount`)
  },
  mounted() {
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
