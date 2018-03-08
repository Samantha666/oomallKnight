<template>
  <div class="goods-achieve">
    <scroll ref="scroll" class="achieve-scroll" :data="discList">
      <div>
        <div class="search">
          <span class="icon-search"></span>
          <input type="text" placeholder="关键字搜索">
          <span class="icon-del">×</span>
        </div>
        <div class="notice">
          <span class="icon-message"></span>
          <span class="time">08:21分</span>
          <span class="money">进账156.8元</span>
        </div>
        <div v-for="(item, index) in discList" :key="index" class="menu">
          <div class="part1">
          <span class="time">
            {{
            item.time? `${item.time}`:''
            }}
            {{item.is_over? '完成': '取消'}}
          </span>
            <span class="price"><b>￥{{item.brokerage}}</b> {{item.is_over? '已完成': '已取消'}}</span>
          </div>
          <menu-item :data="item"></menu-item>
          <div class="part3">
            <a :href="`wtai://wp//wc;${item.storePhone}`" class="store">商家</a>
            <button class="del">删除订单</button>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import MenuItem from 'base/menu-item/menu-item'
import Scroll from 'base/scroll/scroll'

export default {
  data () {
    return {
      discList: [
        {
          brokerage: 12.8,
          from: '永辉超市-恒基店',
          fromDistance: '1.1公里',
          fromDetail: '北京市东城区建国门内大街18号恒基商城B2层',
          to: '北京市东城区大洋宜宾胡同35号院2号楼4单元602',
          toDistance: '882米',
          storePhone: '18523694587',
          is_over: true,
          time: '19:08'
        },
        {
          brokerage: 7,
          from: '181菜篮子-大佛寺东街店',
          fromDistance: '4.6公里',
          fromDetail: '北京市东城区大佛寺东街24号',
          to: '北京市东城区大王府井天主教堂王府井大街74号正邦楼',
          toDistance: '1.2公里',
          is_over: false,
          time: '17:05'
        },
        {
          brokerage: 6,
          from: '客来忙便利店',
          fromDistance: '800米',
          fromDetail: '北京市朝阳区建国门内大街24号燕华苑2座302',
          to: '北京市朝阳区永安里3号院2号楼1单元201',
          toDistance: '1.5公里',
          is_over: true,
          time: '13:05'
        }
      ]
    }
  },
  components: {
    MenuItem,
    Scroll
  }
}
</script>

<style lang="less">
@import "../../common/less/variable";
.goods-achieve{
  position: absolute;
  width: 100%;
  top:85px;
  bottom: 0;
  .achieve-scroll{
    height: 100%;
    overflow: hidden;
    &>div{
      padding-bottom: 5px;
    }
  }
  .search{
    display: flex;
    margin: 5px 10px;
    padding: 5px 10px;
    border: 1px solid @color-border-1;
    border-radius: 5px;
    .icon-search{
      flex: 0 14px;
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: top;
      background: url("./search.png") no-repeat center;
      background-size: contain;
    }
    input{
      flex: 1;
      box-sizing: border-box;
      padding-left: 5px;
      height: 14px;
      line-height: 14px;
      vertical-align: top;
    }
    .icon-del{
      flex: 0 14px;
      line-height: 14px;
      vertical-align: top;
      font-size: 18px;
    }
  }
  .notice{
    padding: 5px 10px;
    border-top: 1px solid @color-border-1;
    border-bottom: 1px solid @color-border-1;
    background-color: @color-background-2;
    .icon-message{
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
      vertical-align: top;
      background: url("./message.png") no-repeat center;
      background-size: contain;
    }
    .money{
      float: right;
      padding-right: 5px;
    }
  }
  .menu{
    margin-top: 5px;
    background-color: white;
    .part1{
      height: 35px;
      line-height: 35px;
      padding: 0 10px;
      border-top: 1px solid @color-border-1;
      border-bottom: 1px solid @color-border-1;
      .price{
        float: right;
        color: red;
        font-size: @font-size-small;
        b{
          font-weight: bold;
          font-size: @font-size-medium;
        }
      }
      .time{
        font-size: @font-size-medium;
      }
    }
    .part3{
      display: flex;
      height: 35px;
      line-height: 35px;
      color: white;
      font-size: @font-size-medium;
      button{
        color: #fff;
      }
      .store{
        flex: 0 80px;
        box-sizing: border-box;
        padding-left: 33px;
        width: 80px;
        color: #fff;
        background-color: darkblue;
        background-image: url("../../common/image/phone.png");
        background-repeat: no-repeat;
        background-position: 12px center;
      }
      .del{
        flex: 1;
        background-color: @color-background-1;
      }
    }
  }
}
</style>
