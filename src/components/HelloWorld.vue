<template>
  <div>
    <div class="hello">
      <div class="first" @click="open">1111</div>
      <div class="second">2222</div>
      <div :class="`third${name}`">{{`text${name}`}}</div>
    </div>
    <mt-datetime-picker
      v-model="form.pickerVisible"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>

    <mt-field label="邮箱" state="success" v-model="form.email"></mt-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: '测试hook',
      
      name: 'guoxin',
      form: {
        pickerVisible: new Date(),
        email: '333333'
      }
    }
  },
  watch: {
    name: (val, old) => {
      console.log(val, old, 111)
    },
    'form.email': (val, old) => {
      console.log(val, old, 6666)
    },
    form: {
      handler (val, old) {
        console.log(val, old, 888)
      },
      immediate: true, // 初始化时就执行
      deep: true // 深度监听，对象和数组内容
    }
  },

  mounted () {
    const a = {'name': 'guoxin'};
    a.name = 'hanmegnqi';
    a.value = '6666';
    console.log(a, 555);
  },
  methods: {
    open () {
      this.form = Object.assign({}, this.form, {
        email: 'guoxin'
      })
      this.$refs['picker'].open()
    },
    handleConfirm (val) {
      this.form.email = val
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  font-size: 40px;
  div {
    flex: 1;
  }
  .second {
    border-bottom: 2px solid red;
  }
}
</style>
