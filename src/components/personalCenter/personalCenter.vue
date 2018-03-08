<template>
    <div class="personalCenter">
      <div class="head">
        <div class="header1">
          <div @click="back" class="icon-back"></div>
          <h3 class="text">个人中心</h3>
        </div>
        <div class="uploadpic">
          <img :src="imgurl" alt="" class="pic">
          <input class="choose" type="file"  accept="image/png,image/gif,image/jpeg" @change="change"  name="file" id="">
        </div>
        <div class="name">秦宇</div>
      </div>
      <div v-if="slides.length" class="sliders-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="(item,index) in slides" v-bind:key="index">
            <h2>{{item.title}}</h2>
            <div class="content">
              <ul>
                <li>{{item.ordersNum}}</li>
                <li>{{item.orders}}</li>
              </ul>
              <ul>
                <li>{{item.moneyCount}}</li>
                <li>{{item.money}}</li>
              </ul>
              <ul>
                <li>{{item.distanceNum}}</li>
                <li>{{item.distance}}</li>
              </ul>
            </div>
          </div>
        </slider>
      </div>
      <div class="bottom">
        <div class="content">
          <span>实名认证</span>
          <i v-if="isIdenti">已认证</i>
          <i v-else @click="realname">未认证<img src="./more.png"/></i>
        </div>
        <div class="content">
          <span>健康证</span>
          <i v-if="isHealth">已上传</i>
          <i v-else @click="healthy">未上传<img src="./more.png"/></i>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
export default {
  data () {
    return {
      imgurl: require('./person_03.png'),
      isIdenti: false,
      isHealth: false,
      nowIndex: 0,
      isShow: true,
      slides: [
        {
          title: '今日业绩',
          orders: '接单量（单）',
          ordersNum: 34,
          money: '实收金额',
          moneyCount: 983.60,
          distance: '配送距离（公里）',
          distanceNum: 117.5
        },
        {
          title: '本月业绩',
          orders: '接单量（单）',
          ordersNum: 200,
          money: '实收金额',
          moneyCount: 3983.00,
          distance: '配送距离（公里）',
          distanceNum: 916.5
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    realname () {
      this.$router.push('/authentication')
    },
    healthy () {
      this.$router.push('/health')
    },
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
  },
  components: {
    Slider,
    Scroll
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';
.personalCenter{
  .head{
    width: 100%;
    background: cornflowerblue;
    color: #fff;
    .header1{
      position: relative;
      width:100%;
      height: 44px;
      text-align: center;
      background-color: cornflowerblue;
      .icon-back{
        position: absolute;
        top: 11px;
        left: 5px;
        width: 21px;
        height: 23px;
        background: url("./back.png") no-repeat center;
        background-size: contain;
        text-align: left;
      }
      .text{
        display: inline-block;
        vertical-align: top;
        line-height: 44px;
        font-size: @font-size-medium-x
      }
    }
    .uploadpic{
      position: relative;
      margin: 20px auto 10px auto;
      width: 90px;
      height: 90px;
      .pic{
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .choose{
        position: absolute;
        top: 0;
        left: 0;
        width: 90px;
        height: 90px;
        opacity: 0;
      }
    }
    .name{
      padding-bottom: 20px;
      text-align: center;
      font-size: 16px;
    }
  }
  .sliders-wrapper{
    position: relative;
    padding: 20px 0 10px 0;
    width: 100%;
    overflow: hidden;
    .slider{
      margin-bottom: 25px;
      font-size: 14px;
      h2{
        font-size: 16px;
        margin-bottom: 20px;
      }
      .dots{
        .dot{
          background: rgba(0,0,0,.2);
          &.active{
            background: rgba(0,0,0,.6);
          }
        }
      }
    }
    .content{
      display: flex;
      justify-content: space-around;
      ul{
        li{
          margin-bottom: 10px;
        }
      }
    }
  }
  .bottom{
    .content{
      display: block;
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      &:last-child{
        border-top: none;
      }
      span{
        display: inline-block;
        width: 80%;
      }
      i{
        display: inline-block;
        font-style: normal;
        color: #999;
        img{
          display: inline-block;
          vertical-align: middle;
          width: 14px;
          height: 14px;
          margin: -2px 0 0 2px;
        }
      }
    }
  }
}
</style>
