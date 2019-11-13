<template>
  <div>
    <mt-field label="邮箱" state="success" v-model="sub.email"></mt-field>
    <span>{{sub.a}}</span>
    <div @click="change">{{sub.b.name}}</div>
    <p v-for="item in list" :key="item">{{item}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'hook',
      sub: {
        a: 222,
        b: {
          name: 'guoxin'
        }
      },
      list: [
        'first'
      ]
    }
  },

  created() {

  },

  mounted() {
    // 对象这样多个赋值
//    this.sub = Object.assign({}, {
//      email: '333',
//      name: 'guoxin',
//      b: {
//        name: 'hello'
//      }
//    })
    // 在data实例化之前注册的属性，层次深也可以监测到
    // this.sub.b.name = 'hello'
    // delete 竟然可以监测到变化
    // delete this.sub.a;
    console.log(this.sub, 888)

    // 对象的未注册属性的赋值
    this.$set(this.sub, 'email', 6666);

    // 数组，官方说监测不到，实际是可以监测到的
    // this.list.length = 3;
    console.log(this.list, 777);

    // 数组，修改值
    this.$set(this.list, 2, 'second')
  },

  methods: {
    change() {
      this.sub.b.name = 'hello';
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
