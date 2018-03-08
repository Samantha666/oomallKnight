<template>
    <div class="addbankCard">
      <header1 title="添加银行卡"></header1>
      <div class="name">
        <span class="left">持卡人 :</span>
        <span>秦宇</span>
      </div>
      <div class="content">
        <span class="left">银行卡 :</span>
        <div class="chooseBank"  @click="chooseBank">
          <input type="text" v-model="checkBank" readonly placeholder="请选择银行"/>
          <img src="./down.png"/>
        </div>
      </div>
      <div class="content">
        <span class="left">开户城市 :</span>
        <div class="chooseBank" @click="choosePc">
          <input v-model="address" type="text" readonly placeholder="请选择开户城市"/>
          <img src="./down.png"/>
        </div>
      </div>
      <div class="content subbranch">
        <span class="left">开户支行 :</span>
        <div class="chooseBank">
          <input type="text" placeholder="请输入开户支行"/>
        </div>
      </div>
      <router-link class="link" tag="div" to="/">开户支行查询办法？</router-link>
      <div class="content last_content">
        <span class="left">卡号 :</span>
        <div class="chooseBank">
          <input type="text" placeholder="请输入储蓄卡号"/>
        </div>
      </div>
      <div class="totalBank" v-show="totalBank">
        <div class="header">
          <div @click="cancelone">取消</div>
          <div>选择银行</div>
          <div @click="completeone">完成</div>
        </div>
        <div class="scrollWrapper">
          <div class="bankone"></div>
          <scroll @scroll="scroll"
                  :listen-scroll="listenScroll"
                  :probe-type="probeType"
                  class="bankWrapper" ref="scroll" :data="bankItems">
            <ul class="bankList">
              <li :class="chooseColor==index?'chooseColor':''" v-for="(item, index) in bankItems" :key="index">{{item}}</li>
            </ul>
          </scroll>
        </div>
      </div>
      <div class="totalBank totalCity" v-show="totalPc">
        <div class="header">
          <div @click="cancelone">取消</div>
          <div>选择开户城市</div>
          <div @click="completetwo">完成</div>
        </div>
        <div class="scrollWrapper">
          <div class="bankone"></div>
          <scroll @scroll="scrollProvice"
                  :listen-scroll="listenScroll"
                  :probe-type="probeType"
                  class="bankWrapper provinceWrapper" ref="scrollProvice" :data="provinceCity">
            <ul class="bankList">
              <li v-for="(item, index) in provinceCity" :key="index" :class="chooseColor==index?'chooseColor':''">{{item.province}}</li>
            </ul>
          </scroll>
          <scroll @scroll="scrollCity"
                  :listen-scroll="listenScroll"
                  :probe-type="probeType"
                  class="bankWrapper cityWrapper" ref="scrollCity" :data="provinceCity[provinceIndex].city">
            <ul class="bankList">
              <li :class="chooseColor_t==j?'chooseColor':''" v-for="(i, j) in provinceCity[provinceIndex].city" :key="j">{{i}}</li>
            </ul>
          </scroll>
        </div>
      </div>
      <div v-show="maskLayer" class="maskLayer"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Header1 from '../../base/header1/header1'
export default {
  data () {
    return {
      bankItems: ['中国工商银行', '中国农业银行', '中国建设银行', '招商银行', '邮政银行', '交通银行', '北京银行'],
      checkBank: '',
      bank: '',
      chooseColor: 0,
      chooseColor_t: 0,
      totalBank: false,
      totalPc: false,
      maskLayer: false,
      address: '',
      province: '',
      city: '',
      provinceIndex: 0,
      provinceCity: [
        {
          province: '北京市',
          city: ['北京市']
        },
        {
          province: '河北省',
          city: ['石家庄市', '唐山市', '秦皇岛市', '邢台市']
        },
        {
          province: '天津市',
          city: ['天津市']
        },
        {
          province: '山西省',
          city: ['太原市', '大同市', '阳泉市', '晋城市']
        },
        {
          province: '辽宁省',
          city: ['沈阳市', '大连市', '鞍山市', '抚顺市']
        }
      ]
    }
  },
  created () {
    this.probeType = 3
    this.listenScroll = true
    this.touch = {}
  },
  methods: {
    chooseBank () {
      this.totalBank = true
      this.maskLayer = true
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 20)
    },
    cancelone () {
      this.totalBank = false
      this.maskLayer = false
      this.totalPc = false
    },
    completeone () {
      this.checkBank = this.bank
      this.totalBank = false
      this.maskLayer = false
    },
    scroll (pos) {
      this.scrollY = pos.y
      let self = this
      for (let index = 0; index < this.bankItems.length; index++) {
        if (self.scrollY > -40 * (index + 0.5) && self.scrollY < -40 * (index - 0.5)) {
          self.chooseColor = index
          self.bank = self.bankItems[index]
          break
        }
      }
    },
    scrollProvice (pos, item) {
      this.scrollY = pos.y
      let self = this
      for (let index = 0; index < this.provinceCity.length; index++) {
        if (self.scrollY > -40 * (index + 0.5) && self.scrollY < -40 * (index - 0.5)) {
          self.chooseColor = index
          self.province = self.provinceCity[index].province
          this.provinceIndex = index
          break
        }
      }
    },
    scrollCity (pos) {
      this.scrolly = pos.y
      let self = this
      for (let index = 0; index < this.provinceCity[self.provinceIndex].city.length; index++) {
        if (self.scrolly > -40 * (index + 0.5) && self.scrolly < -40 * (index - 0.5)) {
          self.chooseColor_t = index
          self.city = self.provinceCity[self.provinceIndex].city[index]
          break
        }
      }
    },
    choosePc () {
      this.totalPc = true
      this.maskLayer = true
      setTimeout(() => {
        this.$refs.scrollProvice.refresh()
      }, 20)
      setTimeout(() => {
        this.$refs.scrollCity.refresh()
      }, 20)
    },
    completetwo () {
      this.address = this.province + this.city
      this.totalPc = false
      this.maskLayer = false
    }
  },
  components: {
    Header1,
    Scroll
  }
}
</script>

<style scoped lang="less">
.addbankCard {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 14px;
  .name {
    margin: 15px 0 10px 0;
    padding: 10px 15px 10px 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .left {
      display: inline-block;
      width: 80px;
    }
  }
  .content {
    height: 30px;
    line-height: 30px;
    padding: 10px 15px 10px 20px;
    border-top: 1px solid #ccc;
    &.last_content {
      border-bottom: 1px solid #ccc;
    }
    .left {
      display: inline-block;
      vertical-align: top;
      width: 80px;
    }
    .chooseBank {
      position: relative;
      width: 75%;
      display: inline-block;
      vertical-align: top;
      input {
        width: 100%;
      }
      img {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        float: right;
      }
    }
    &.subbranch {
      border-bottom: 1px solid #ccc;
    }
  }
  .link{
    margin: 25px 0 25px 20px;
    color: blue;
  }
  .maskLayer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
  }
  .totalBank {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 11;
    width: 100%;
    height: 300px;
    overflow: hidden;
    background: #fff;
    .header{
      display: flex;
      justify-content: space-between;
      padding: 15px 10px;
      border-top: 1px solid #ccc;
      background: rgba(0,0,0,.03);
      div {
        &:first-child, &:last-child {
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .bankone {
      margin-top: 50px;
      height: 40px;
      line-height: 40px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      color: #333;
    }
    .bankWrapper {
      position: absolute;
      width: 100%;
      top: 50px;
      bottom: 0;
      overflow: hidden;
      .bankList {
        margin-top: 50px;
        padding-bottom: 210px;
        li{
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          color: rgba(0,0,0,.3);
        }
        .chooseColor{
          color: #333;
        }
      }
    }
  }
  .totalCity {
    width: 100%;
    .provinceWrapper {
      position: absolute;
      width: 50%;
      top: 50px;
      bottom: 0;
      overflow: hidden;
    }
    .cityWrapper {
      position: absolute;
      width: 50%;
      top: 50px;
      left: 50%;
      bottom: 0;
      overflow: hidden;
    }
  }
}
</style>
