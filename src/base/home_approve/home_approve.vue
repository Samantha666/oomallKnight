<template>
  <div class="home_approve">
    <!--<span class="num">{{approve===2? 2: 1}}/2</span>-->
    <div v-show="(approve===0||approve===1) && !is_finish?true:false" class="step1">
      <span class="num">1/2</span>
      <p>请完成实名认证</p>
      <p>你需要提交身份证照片等信息</p>
      <button @click="go_approve" :disabled="approve===1?true:false" class="go_approve" type="button">{{step1_button}}</button>
    </div>
    <div v-show="approve === 2 && !is_finish?true:false" class="step2">
      <span class="num">2/2</span>
      <p>已完成实名认证</p>
      <p>请查看骑手必读</p>
      <button @click="finish" class="go_approve" type="button">马上阅读</button>
    </div>
    <div v-show="is_finish" class="step3">
      <span @click="close" class="close">×</span>
      <p>恭喜你成为正是接单员</p>
      <p>现在，开始抢单赚钱吧！</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    approve: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      is_finish: false
    }
  },
  computed: {
    step1_button () {
      let txt
      if (this.approve === 0) {
        txt = '马上认证'
      }
      if (this.approve === 1) {
        txt = '认证审核中'
      }
      return txt
    }
  },
  methods: {
    go_approve () {
      if (this.approve === 0) {
        this.$router.push('/authentication')
      }
    },
    finish () {
      this.is_finish = true
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less">
@import "../../common/less/variable";

.home_approve{
  position: relative;
  line-height: 1.8;
  border-top: 1px solid @color-border-1;
  background-color: white;
  text-align: center;
  font-size: @font-size-medium;
  .step1, .step2, .step3{
    box-sizing: border-box;
    padding: 15px 5px 10px;
    height: 116px;
  }
  .step3{
    padding-top: 30px;
    font-size: @font-size-medium-x;
  }
  .num, .close{
    position: absolute;
    top:5px;
    right: 10px;
    color: @color-text-3;
  }
  .close {
    line-height: 1;
    font-size: 28px;
  }
  button{
    width: 75%;
    height: 30px;
    margin-top: 10px;
    background-color: @color-background-1;
    color: #fff;
    border-radius: 3px;
  }
  button[disabled]{
    background-color: @color-background-2;
  }
}
</style>
