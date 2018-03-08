<template>
  <div class="menuMouth">
    <header1 title="月账单明细"></header1>
    <p class="during">记账周期 04/01-04/30</p>
    <div class="total">
      <span class="left">账单总金额</span>
      <span class="right">￥8000.25</span>
    </div>
    <ul class="details">
      <li v-for="(data,i) in datas" :key="i">
        <router-link to="/detail" class="bg">
          <span>{{data.day}}</span>
          <span class="right">￥{{data.money}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'
import DetailList from '../../base/detail-list-2/detail-list'

export default {
  data () {
    return {
      datas: [
        {day: '04-30', money: 80.25},
        {day: '04-29', money: 120.58},
        {day: '04-28', money: 500.00},
        {day: '04-27', money: 325.50},
        {day: '04-26', money: 525.20},
        {day: '04-25', money: 180.25},
        {day: '04-24', money: 600.25},
        {day: '04-23', money: 358.25},
        {day: '04-22', money: 696.00},
        {day: '04-21', money: 985.25},
        {day: '04-20', money: 80.60},
        {day: '04-19', money: 125.00}
      ]
    }
  },
  components: {
    Header1,
    DetailList
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';
.menuMouth{
  .during{
    padding: 8px 10px;
  }
  .total{
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    background-color: @color-background-1;
    border-bottom: 1px solid @color-border-1;
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
  .details>li{
    padding: 10px 10px;
    border-bottom: 1px solid @color-border-1;
  }
  .bg{
    display: block;
    box-sizing: border-box;
    padding-right: 25px;
    width: 100%;
    line-height: 28px;
    background: url("./to_right.png") no-repeat;
    background-size: 15px 15px;
    background-position: center right;
    clear: both;
    .right{
      float: right;
    }
  }
}
</style>
