<template>
  <div>
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
    <p></p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        TabLists: [
          {
            name: 'guoxin',
            value: '2222'
          }
        ]
      }
    },

    created () {
      let students = [
        {name: 'Lucy', age: 20, sex: 'female'},
        {name: 'LiLei', age: 21, sex: 'male'},
        {name: 'Jim', age: 18, sex: 'male'}
      ]
      // 普通函数this指向
      let m = students.map(function (item, index, array) {
        console.log(item, 333, this, 444) // students
        return item
      }, students)

      // 箭头函数指向定义的上下文
      let f = students.find((item, index, array) => {
        console.log(item, 555, this, 666) // Vue
        return item['age'] > 20
      }, students)

      students.forEach(function (item, index, array) {
        console.log(array, this, 222)
      }, students)

      let r = students.reduceRight((pre, cur, index, array) => {
        console.log(this, pre, 777, cur)
        return pre + cur['age']
      }, 10)

      let l = students.reduce((pre, cur, index, array) => {
        console.log(pre, 888, cur, index)
        return (pre['age'] ? pre['age'] : pre) + cur['age']
      })
      console.log(m, 11, f, 22, r, 33, l, 88)
    },

    mounted () {
      this.obDelete()

      // 数组合并
      let arr = Array.prototype.concat.apply([], [1, [2, 3], [4]])
      console.log(arr, 6666)
      // console.log(this);
    },

    methods: {
      // 对象的删除操作
      obDelete () {
        let a = {
          name: 'guoxin',
          value: 666
        }
        let b = delete a['value']
        console.log(a, 11, b)
        // {name: 'guoxin'} 11 true
      },

      testTab () {

        console.log(22222)
        let a = {
          name: 'guoxin',
          value: 666
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
