<template>
  <div class="arrow-demo">
    <div class="explain" ref="explain">
      <p ref="text">{{ info }}</p>
    </div>
    <div class="fold" v-if="isOverFlow" @click="toggleText">
      {{ foldWord }}
      <span :class="{ arrow: !isFold }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "arrow",
  data() {
    return {
      info:
        "我们之前建议使用 mixins 用于解决横切关注点相关的问题。但我们已经意识到 mixins 会产生更多麻烦。阅读更多 以了解我们为什么要抛弃 mixins 以及如何转换现有组件我们之前建议使用 mixins 用于解决横切关注点相关的问题。但我们已经意识到 mixins 会产生更多麻烦。阅读更多 以了解我们为什么要抛弃 mixins 以及如何转换现有组件",
      isFold: true,
      isOverFlow: true,
      textHeight: 0,
      explainHeight: 0
    };
  },

  created() {},

  mounted() {
    this.needFull();
  },

  computed: {
    foldWord() {
      return this.isFold ? "展开" : "收起";
    }
  },

  /**
   * @desc: 数据更新时调用
   * @author guoxin
   * @date 2020/06/28
   */
  updated() {
    console.log("update", 222222);
  },

  methods: {
    /**
     * @desc: 是否需要处理
     * @author guoxin
     * @date 2020/06/28
     */
    needFull() {
      const textHeight = this.$refs.text.offsetHeight;
      const explainHeight = this.$refs.explain.offsetHeight;

      if (textHeight <= explainHeight) {
        this.isOverFlow = false;
      } else {
        this.textHeight = textHeight;
        this.explainHeight = explainHeight;
      }
    },
    /**
     * @desc: 展开收起
     * @author guoxin
     * @date 2020/06/28
     */
    toggleText() {
      if (this.isFold) {
        this.$refs.explain.style.height = this.textHeight + "px";
      } else {
        this.$refs.explain.style.height = this.explainHeight + "px";
      }
      this.isFold = !this.isFold;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.arrow-demo {
  .explain {
    font-size: 32px;
    text-align: left;
    color: #666666;
    letter-spacing: 0;
    line-height: 48px;
    height: 144px;
    overflow: hidden;
    transition: height 2s;
    p {
      margin: 0;
    }
  }
  .fold {
    font-weight: bold;
    font-size: 32px;
    color: #333333;
    letter-spacing: 0;
    line-height: 32px;
    text-align: center;
    margin-top: 10px;
    span {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url(../assets/images/down@2x.png) no-repeat center;
      background-size: 24px 24px;
      vertical-align: -2px;
      margin-left: 6px;

      &.arrow {
        background: url(../assets/images/up@2x.png) no-repeat center;
        background-size: 24px 24px;
      }
    }
  }
}
</style>
