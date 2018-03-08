<template>
  <div class="bindAccount">
    <header1 title="账号绑定"></header1>
    <ul class="list">
      <li>
        <router-link class="block" to="/">
          <div class="phone">
            <div class="icon-img icon-phone"></div>
            <span class="text">绑定手机号</span>
            <div class="left">
              <span class="text">已绑定</span>
              <i class="icon-img icon-right"></i>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link class="block" to="/bindAccount">
          <div class="bind_qq">
            <div class="icon-img icon-qq"></div>
            <span class="text">账号QQ</span>
            <div class="left">
              <span class="text">未绑定</span>
              <i class="icon-img icon-right"></i>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link class="block" to="/bindAccount">
          <div class="clear_weixin">
            <div class="icon-img icon-weixin"></div>
            <span class="text">绑定微信</span>
            <div class="left">
              <span class="text">未绑定</span>
              <i class="icon-img icon-right"></i>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link class="block" to="/bindAccount">
          <div class="check_update">
            <div class="icon-img icon-weibo"></div>
            <span class="text">绑定微博</span>
            <div class="left">
              <span class="text">未绑定</span>
              <i class="icon-img icon-right"></i>
            </div>
          </div>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import Header1 from 'base/header1/header1'

export default {
  components: {
    Header1
  }
}
</script>

<style lang="less">
  @import '../../common/less/variable';

  .bindAccount{
    .list{
      .block{
        display: block;
        padding: 12px 10px;
        border-bottom:1px solid #eee;
      }
      .left {
        float: right;
      }
      .text{
        margin-left: 6px;
        line-height: 20px;
        vertical-align: middle;
        font-size: @font-size-medium;
      }
      .icon-img{
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        background-size: contain;
      }
      .icon-phone{
        background: url("./phone.png") no-repeat center;
      }
      .icon-right{
        background: url("./to_right.png") no-repeat center;
      }
      .icon-qq{
        background: url("./qq.png") no-repeat center;
      }
      .icon-weibo{
        background: url("./weibo.png") no-repeat center;
      }
      .icon-weixin{
        background: url("./weixin.png") no-repeat center;
      }
    }
  }
</style>
