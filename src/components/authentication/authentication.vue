<template>
    <div class="authentication">
      <header1 title="实名认证"></header1>
      <uploadpic @get="get" title="点击上传身份证正面照"></uploadpic>
      <uploadpic @get="get1" title="点击上传身份证反面照"></uploadpic>
      <input type="button" @click="sub" class="sub" value="提交认证审核">
    </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'
import Uploadpic from '../../base/Uploadpic/Uploadpic'

export default {
  methods: {
    get (file) {
      console.log(file)
    },
    get1 (file) {
      console.log(file)
    },
    sub () {
      console.log(1)
    }
  },
  components: {
    Header1,
    Uploadpic
  }
}
</script>

<style lang="less">
  .authentication {
    .sub{
      display: block;
      width: 45%;
      height: 25px;
      color: white;
      margin: 20px auto;
      border-radius: 3px;
      background-color:royalblue;
    }
  }
</style>
