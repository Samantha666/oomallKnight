<template>
    <div class="myWallet">
      <header1 title="我的钱包"></header1>
      <div class="money">我的余额</div>
      <div class="moneyNum"><i>￥</i>{{balance}}</div>
      <div class="balanceBtn">
        <span :class="isCash" class="btn" @click="apply">申请提现</span><router-link class="btn balanceBtn_two" to="/">查看明细</router-link>
      </div>
      <div v-if="cardInfor.length" class="card-wrapper">
        <h5>我的卡包</h5>
        <slider :autoPlay="false">
            <bankcard v-for="(card,index) in cardInfor" :key="index" :card="card"></bankcard>
        </slider>
      </div>
      <div class="balanceBtn">
        <router-link class="btn" to="/">管理卡包</router-link><span class="btn balanceBtn_two" @click="showTan">添加提现账号</span>
      </div>
      <tan1 @hideTan="hideTan" v-show="show_tan"></tan1>
    </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'
import Bankcard from '../../base/bankcard/bankcard'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Tan1 from 'base/tan1/tan1'
export default {
  data () {
    return {
      balance: '0.00',
      balanceBtn_one: true,
      show_tan: false,
      cardInfor: [
        {
          name: '中国工商银行北京市分行',
          classify: '储蓄卡',
          cardNum: '**** **** **** 2038',
          acquiesce: '默认'
        },
        {
          name: '中国建设银行北京市分行',
          classify: '储蓄卡',
          cardNum: '**** **** **** 1038',
          acquiesce: ''
        },
        {
          name: '中国农业银行北京市分行',
          classify: '储蓄卡',
          cardNum: '**** **** **** 3038',
          acquiesce: ''
        }
      ]
    }
  },
  computed: {
    isCash () {
      return parseInt(this.balance) < 100 ? 'balanceBtn_one' : ''
    }
  },
  methods: {
    apply () {
      if (parseInt(this.balance) < 100) {
        this.balanceBtn_one = true
      } else {
        this.$router.push('/')
        this.balanceBtn_one = false
      }
    },
    showTan () {
      this.show_tan = true
    },
    hideTan () {
      this.show_tan = false
    }
  },
  components: {
    Header1,
    Bankcard,
    Slider,
    Scroll,
    Tan1
  }
}
</script>

<style lang="less">
.myWallet{
  .money{
    margin: 20px 0 20px 0;
    text-align: center;
    font-size: 14px;
  }
  .moneyNum{
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    i{
      font-style: normal;
      margin-right: 5px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .balanceBtn{
    margin-top: 20px;
    width: 100%;
    .btn{
      display: inline-block;
      width: 49.6%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #6f9cd6;
      color: #fff;
      &.balanceBtn_one{
        background: rgba(0,0,0,.2);
      }
      &.balanceBtn_two{
        margin-left: 0.4%;
      }
    }
  }
  .card-wrapper{
    position: relative;
    margin-top: 10px;
    height: 180px;
    padding-top: 25px;
    border-top: 1px solid #ccc;
    h5{
      text-align: center;
      font-size: 14px;
    }
    .slider{
      display: block;
      margin: 10px 0 20px 0;
      .dots{
        .dot{
          background: rgba(0,0,0,.2);
          &.active{
            background: rgba(0,0,0,.6);
          }
        }
      }
    }
  }
}
</style>
