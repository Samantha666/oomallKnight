<template>
  <div class="menuYear">
    <header1 title="年度账单明细"></header1>
    <ul class="details">
      <li v-for="(year,i) in datas" :key="i">
        <p class="year">
          <span>{{year.year}}年</span>
          <span class="right">￥{{year.money}}</span>
        </p>
        <detail-list v-for="(mouth, j) in year.mouthes" :data="mouth" :key="j"></detail-list>
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
        {
          year: 2017,
          money: 17646.25,
          mouthes: [
            {
              mouth: 4,
              time: '2017/04/01-2017/04/30',
              money: '8000.25'
            },
            {
              mouth: 3,
              time: '2017/03/01-2017/03/31',
              money: '5220.36'
            },
            {
              mouth: 2,
              time: '2017/02/01-2017/02/28',
              money: '3525.00'
            },
            {
              mouth: 1,
              time: '2017/01/01-2017/01/31',
              money: '900.65'
            }
          ]
        },
        {
          year: 2016,
          money: 18526.60,
          mouthes: [
            {
              mouth: 12,
              time: '2016/12/01-2016/12/30',
              money: '3252.52'
            },
            {
              mouth: 11,
              time: '2016/11/01-2016/11/31',
              money: '2563.68'
            },
            {
              mouth: 10,
              time: '2016/10/01-2016/10/31',
              money: '3000.50'
            },
            {
              mouth: 9,
              time: '2016/09/01-2016/09/31',
              money: '1500.25'
            },
            {
              mouth: 8,
              time: '2016/08/01-2016/08/30',
              money: '2000.0'
            },
            {
              mouth: 7,
              time: '2016/07/01-2016/07/31',
              money: '2500.10'
            },
            {
              mouth: 6,
              time: '2016/06/01-2016/06/31',
              money: '1908.75'
            },
            {
              mouth: 5,
              time: '2016/05/01-2016/05/31',
              money: '1800.90'
            }
          ]
        }
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
.menuYear{
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
  .year{
    padding: 0 10px;
    line-height: 28px;
    background-color: @color-background-1;
    border-bottom: 1px solid @color-border-1;
    .right{
      float: right;
    }
  }
}
</style>
