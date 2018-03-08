<template>
  <div class="goods-transport">
    <scroll ref="scroll" class="transport-scroll" :data="discList">
      <div>
        <div v-for="(item, index) in discList" :key="index" class="menu">
          <div class="part1">
            <span class="price">￥{{item.brokerage}}</span>
            <span class="time">
          {{
              item.needTime? `需${item.needTime}内送达`
                : item.overTime? `已超时${item.overTime}`:''
              }}
        </span>
          </div>
          <menu-item :data="item"></menu-item>
          <div class="part3">
            <a :href="`wtai://wp//wc;${item.storePhone}`" class="store">商家</a>
            <a :href="`wtai://wp//wc;${item.buyerPhone}`" class="buyer">卖家({{item.buyerName}})</a>
            <button class="sure">确认送达</button>
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
          needTime: '00:59:52',
          storePhone: '18523694587',
          buyerPhone: '13756942548',
          buyerName: '周伯通'
        },
        {
          brokerage: 7,
          from: '181菜篮子-大佛寺东街店',
          fromDistance: '4.6公里',
          fromDetail: '北京市东城区大佛寺东街24号',
          to: '北京市东城区大王府井天主教堂王府井大街74号正邦楼',
          toDistance: '1.2公里',
          overTime: '00:05:50',
          storePhone: '18523649587',
          buyerPhone: '13756942584',
          buyerName: '张无忌'
        },
        {
          brokerage: 7,
          from: '181菜篮子-大佛寺东街店',
          fromDistance: '4.6公里',
          fromDetail: '北京市东城区大佛寺东街24号',
          to: '北京市东城区大王府井天主教堂王府井大街74号正邦楼',
          toDistance: '1.2公里',
          overTime: '00:05:50',
          storePhone: '18523649587',
          buyerPhone: '13756942584',
          buyerName: '张无忌'
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
.goods-transport{
  position: absolute;
  width: 100%;
  top:85px;
  bottom: 0;
  .transport-scroll{
    height: 100%;
    overflow: hidden;
    &>div{
      padding-bottom: 10px;
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
        color: red;
        font-size: @font-size-medium;
        font-weight: bold;
      }
      .time{
        float: right;
        color: @color-text-2;
        font-size: @color-text-2;
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
      .buyer{
        flex: 0 110px;
        box-sizing: border-box;
        padding-left: 23px;
        width: 110px;
        color: #fff;
        background-color: @color-background-4;
        background-image: url("../../common/image/phone.png");
        background-repeat: no-repeat;
        background-position: 7px center;
      }
      .sure{
        flex: 1;
        background-color: @color-background-1;
      }
    }
  }
}
</style>
