<template>
  <div class="task">
    <header1 title="我的任务"></header1>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/task/goodsWait">
        <span class="tab-link">待取货</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/task/goodsTransport">
        <span class="tab-link">配送中</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/task/goodsAchieve">
        <span class="tab-link">已完成</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'

export default {
  components: {
    Header1
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.task{
  .tab{
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: @font-size-medium;
    .tab-item{
      flex: 1;
      text-align: center;
      border-bottom: 1px solid @color-border-1;
      border-right: 1px solid @color-border-1;
      &:last-child{
        border-right: none;
      }
      .tab-link{
        padding-bottom: 5px;
        color: @color-text;
      }
      &.router-link-active{
        background-color: @color-background-1;
        .tab-link{
          color: #fff;
        }
      }
    }
  }
}
</style>
