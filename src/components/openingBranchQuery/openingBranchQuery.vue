<template>
    <div class="openingBranchQuery">
      <header1 title="开户支行查询办法"></header1>
      <div class="content">
        <ul class="questionList">
          <li>
            <div>1.什么是开户行</div>
            <div>开户行指你在办理银行卡所在的银行名称一般是以“某某支行”为名称</div>
          </li>
          <li>
            <div>2.如何知道开户行</div>
            <div>如果你有保留银行卡办理手续收据等凭证可以在凭证上找到</div>
            <div>如果你没有保留任何凭证，请拨打你办理银行卡的银行客服电话进行查询（可能需要你的卡号信息和身份证信息)</div>
            <div>
              以下是常用银行的客服电话：
              <ul class="telList">
                <li v-for="(item,index) in telList" :key="index">{{item}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'
export default {
  data () {
    return {
      telList: [
        '中国工商银行： 95588',
        '中国农业银行： 95599',
        '中国建设银行： 95533',
        '招商银行： 95555',
        '中国银行： 95566',
        '交通银行： 95559',
        '中国邮政储蓄银行： 95580',
        '平安银行： 95511',
        '广发银行： 95508',
        '中信银行： 95558',
        '民生银行： 95568',
        '兴业银行： 95561',
        '中国广大银行： 95595'
      ]
    }
  },
  components: {
    Header1
  }
}
</script>

<style scoped lang="less">
.openingBranchQuery {
  font-size: 14px;
  .content {
    margin-top: 10px;
    padding: 0 20px;
    .questionList {
      li {
        margin: 10px 0;
        div {
          margin-top: 20px;
          .telList {
            margin-top: 20px;
            li{
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
