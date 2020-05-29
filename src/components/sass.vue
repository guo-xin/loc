<template>
  <div class="sass">
    <div class="scoped">
      <mt-field label="邮箱" state="success" v-model="email"></mt-field>
    </div>
    <div :class="$style.module">
      <mt-field label="账号" state="success" v-model="email"></mt-field>
    </div>
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

  created() {
  },

  mounted() {
  },

  methods: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .scoped {
    color: red;
    /deep/ .mint-field-core {
      font-size:  40px;
    }
  }
</style>

<style module lang="scss">
  .module {
    color: blue;
  }
</style>
