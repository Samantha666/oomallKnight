<template>
  <div class="cards">
    <header3 @showTan="showTan" title="我的卡包"></header3>
    <ul class="cards-content">
      <li class="card" v-for="(item,index) in cards" :key="index">
        <bankcard :card="item"></bankcard>
        <div class="buttons">
          <button @click="del_card(index)" class="btn">删除账户</button><button @click="set_default(index)" class="btn">设为默认账户</button>
        </div>
      </li>
    </ul>
    <tan1 @hideTan="hideTan" v-show="show_tan"></tan1>
  </div>
</template>

<script type="text/ecmascript-6">
import Header3 from 'base/header3/header3'
import Tan1 from 'base/tan1/tan1'
import Bankcard from 'base/bankcard/bankcard'

export default {
  data () {
    return {
      show_tan: false,
      cards: [
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
  methods: {
    showTan () {
      this.show_tan = true
    },
    hideTan () {
      this.show_tan = false
    },
    del_card (i) {
      this.cards.splice(i, 1)
    },
    set_default (i) {
      this.cards[0].acquiesce = ''
      this.cards[i].acquiesce = '默认'
      this.cards.unshift(this.cards[i])
      this.cards.splice(i + 1, 1)
    }
  },
  components: {
    Header3,
    Tan1,
    Bankcard
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.cards{
  .cards-content{
    li.card{
      padding-bottom: 5px;
      border-bottom: 1px solid @color-border-1;
      .buttons{
        width: 100%;
        button{
          width: 50%;
          height: 40px;
          background-color: @color-background-1;
          color: #fff;
        }
        button:first-child{
          border-right: 1px solid #fff;
        }
      }
    }
  }
}
</style>
