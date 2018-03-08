<template>
  <div class="detail">
    <header4 title="当日明细"></header4>
    <div class="total">
      <span class="left">4月20日</span>
      <span class="right">￥8.6</span>
    </div>
    <div class="details">
      <detail-list v-for="(item, index) in datas" :data="item" :key="index"></detail-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header4 from '../../base/header4/header4'
import DetailList from '../../base/detail-list-1/detail-list'

export default {
  data () {
    return {
      datas: [
        {
          name: '平台补贴',
          money: '+3.00',
          num: '订 单 号：42850082500000041798',
          time: '10:35'
        },
        {
          name: '订单收入',
          money: '+6.00',
          num: '订 单 号：42850082500000041798',
          time: '10:35'
        },
        {
          name: '提现申请',
          money: '-6.00',
          num: '提现审核中',
          time: '12:15'
        },
        {
          name: '提现失败',
          money: '+6.00',
          num: '审核未通过',
          time: '13:15'
        },
        {
          name: '订单收入',
          money: '+6.00',
          num: '订 单 号：42850082500000041725',
          time: '15:15'
        }
      ]
    }
  },
  components: {
    Header4,
    DetailList
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';
.detail{
  .total{
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    background-color: @color-background-1;
    color: #fff;
    clear: both;
    .left{
      float: left;
      font-size: 18px;
    }
    .right{
      float: right;
      font-size: 20px;
    }
  }
}
</style>
