<template>
  <div class="header2">
    <div class="menu">
      <i @click="menu" class="icon-text">☰</i>
    </div>
    <h3 class="text">{{title}}</h3>
    <div class="right">
      <i class="icon-text">☎</i>
      <router-link class="bell" :to="bell.link">
        <i class="icon-img icon-bell"></i>
        <span v-show="bell_num != 0" class="bell-num">{{bell_num}}</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bellLink: {
      type: String,
      default: '/'
    },
    bellNum: {
      type: Number,
      default: 5
    },
    bell: {
      type: Object,
      default: () => {
        return {
          link: '/',
          num: 5
        }
      }
    }
  },
  computed: {
    bell_num () {
      return parseInt(this.bell.num) === 0 ? '' : this.bell.num
    }
  },
  methods: {
    menu () {
      this.$emit('menu')
    }
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.header2{
  display: flex;
  height: 44px;
  padding: 0 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .menu {
    flex: 0 46px;
    text-align: left;
  }
  .text{
    flex: 1;
    vertical-align: top;
    line-height: 44px;
    font-size: @font-size-medium-x
  }
  .right {
    flex: 0 46px;
    .bell {
      position: relative;
      .bell-num {
        position: absolute;
        top: -7px;
        right: -4px;
        display: inline-block;
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        background-color: red;
        color: #fff;
        font-size: @font-size-small-s;
        text-align: center;
      }
    }
  }
  .icon-text{
    line-height: 44px;
    vertical-align: middle;
    font-size: 20px;
    font-style: normal;
  }
  .icon-img{
    display: inline-block;
    width: 22px;
    height:22px;
    vertical-align: middle;
  }
  .icon-bell{
    background: url("./bell.png") no-repeat center;
    background-size: contain;
  }
}
</style>
