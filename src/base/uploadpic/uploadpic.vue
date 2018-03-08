<template>
  <div class="uploadpic">
    <div class="imgorder">
    <img :src="imgurl" alt="" :class="is_class">
    </div>
    <a href="javascript:;" class="file">{{title}}
      <input type="file"  accept="image/png,image/gif,image/jpeg" @change="change"  name="file" id="">
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imgurl: '',
      istrue: false
    }
  },
  computed: {
    is_class () {
      return this.istrue ? 'rotat' : ''
    }
  },
  methods: {
    imgSel () {
      let img = new Image()/* 构造JS的Image对象 */
      img.src = document.imageForm.file.value/* 将本地图片赋给image对象 */
      img.onreadystatechange = function () {
        if (img.readyState === 'complete') {
          console.log('11:' + img.width)
          console.log('22:' + img.height)
        }
      }
    },
    change (e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      let that = this
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        that.imgurl = this.result
        that.$emit('get', file)
      }
      let url = window.URL || window.webkitURL
      console.log(url.createObjectURL(file))
      let img = new Image()
      img.src = url.createObjectURL(file)
      img.onload = function () {
        console.log('height:' + this.height + '----width:' + this.width)
        if (this.height > this.width) {
          that.istrue = true
        } else {
          that.istrue = false
        }
      }
    }
  }
}
</script>

<style lang="less">
  .uploadpic {
    padding: 10px 0 10px 0;
    .imgorder{
      padding: 0 4% 0 4%;
      margin: 0 auto;
      width: 80%;
      height: 200px;
      border: 1px solid #CDB5CD;
      overflow: hidden;
      .rotat{
        transform: rotate(90deg);
        max-width: 70% !important;
        margin-top: -15%;
        margin-left: 10%;
      }
      img{
        margin-top: 1%;
        width: 100%;
      }
    }
    .file {
      margin-top: 20px;
      position: relative;
      left: 30%;
      display: inline-block;
      background: #D0EEFF;
      border: 1px solid #99D3F5;
      border-radius: 4px;
      padding: 4px 12px;
      overflow: hidden;
      color: #1E88C7;
      text-decoration: none;
      text-indent: 0;
      line-height: 20px;
    }
    .file input {
      position: absolute;
      font-size: 100px;
      right: 0;
      top: 0;
      opacity: 0;
    }
    .file:hover {
      background: #AADFFD;
      border-color: #78C3F3;
      width: 45%;
      margin: 10px auto;
      color: #004974;
      text-decoration: none;
      text-align: center;
    }
  }
</style>
