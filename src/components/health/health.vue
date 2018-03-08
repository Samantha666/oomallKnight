<template>
    <div class="health">
      <header1 title="健康证上传"></header1>
      <uploadpic @get="get" title="点击上传健康证"></uploadpic>
      <ul>
        <li><span>请提供清晰的照片，拍照时防止反光</span></li>
        <li><span>您上传的信息我们将严格保密</span></li>
      </ul>
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
    }
  },
  components: {
    Header1,
    Uploadpic
  }
}
</script>

<style lang="less">
.health{
  ul{
    margin-top: 20px;
    li{
      margin: 3px 0 2px 20px;
      color: #FF8247;
    }
  }
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
