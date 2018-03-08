<template>
  <div class="home">
    <div class="bottom">
      <leftDrawer></leftDrawer>
    </div>
    <div class="top" :class="openMenu?'open-menu':''">
      <header2 :title="title" :bell="bell" @menu="operate_menu"></header2>
      <div class="menus">
        <scroll ref="scroll" class="menu-content" :data="discList">
          <div>
            <div v-if="activity.length" class="slider-wrapper" ref="sliderWrapper">
              <slider>
                <div v-for="(item,index) in activity" v-bind:key="index">
                  <img @load="loadImage" :src="item" class="needsclick">
                </div>
              </slider>
            </div>
            <div class="menu-list">
              <div v-for="(item, index) in discList" :key="index" class="menu-item">
                <div class="part1">
                  <span class="price">￥{{item.brokerage}}</span>
                  <span class="time">需{{item.needTime}}内送达</span>
                </div>
                <menu-item :data="item"></menu-item>
                <div class="part3">
                  接单
                </div>
              </div>
            </div>
          </div>
        </scroll>
      </div>
      <div @close="close_Approve" v-show="isLogin&&!isApprove" class="approve_content">
        <approve></approve>
      </div>
      <div v-if="!isLogin" class="foot foot1">
        <footer1></footer1>
      </div>
      <div v-else-if="isLogin" class="foot foot2">
        <footer2></footer2>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header2 from 'base/header2/header2'
import Footer1 from 'base/footer1/footer1'
import Footer2 from 'base/footer2/footer2'
import Approve from 'base/home_approve/home_approve'
import MenuItem from 'base/menu-item/menu-item'
import LeftDrawer from 'components/leftDrawer/leftDrawer'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'

export default {
  data () {
    return {
      isLogin: false,
      isApprove: false,
      title: '抠抠骑士',
      bell: {
        link: this.isLogin ? '/message' : 'login',
        num: 0
      },
      openMenu: false,
      activity: [
        'https://pro.modao.cc/uploads/images/2265781/raw_1453974277.png',
        'https://pro.modao.cc/uploads/images/2265771/raw_1453974248.png',
        'https://pro.modao.cc/uploads/images/2265773/raw_1453974263.png'
      ],
      discList: [
        {
          brokerage: 12.8,
          from: '永辉超市-恒基店',
          fromDistance: '1.1公里',
          fromDetail: '北京市东城区建国门内大街18号恒基商城B2层',
          to: '北京市东城区大洋宜宾胡同35号院2号楼4单元602',
          toDistance: '882米',
          needTime: '00:59:52'
        },
        {
          brokerage: 7,
          from: '181菜篮子-大佛寺东街店',
          fromDistance: '4.6公里',
          fromDetail: '北京市东城区大佛寺东街24号',
          to: '北京市东城区大王府井天主教堂王府井大街74号正邦楼',
          toDistance: '1.2公里',
          needTime: '00:59:52'
        },
        {
          brokerage: 6,
          from: '客来忙便利店',
          fromDistance: '800米',
          fromDetail: '北京市朝阳区建国门内大街24号燕华苑2座302',
          to: '北京市朝阳区永安里3号院2号楼1单元201',
          toDistance: '1.5公里',
          needTime: '00:59:52'
        }
      ]
    }
  },
  methods: {
    operate_menu () {
      this.openMenu = !this.openMenu
    },
    loadImage () {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    close_Approve () {
      this.Approve = true
    }
  },
  components: {
    Header2,
    Footer1,
    Footer2,
    Approve,
    MenuItem,
    LeftDrawer,
    Slider,
    Scroll
  }
}
</script>

<style lang="less">
@import "../../common/less/variable";

.home{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .bottom, .top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #efefef;
  }
  .top{
    z-index: 10;
    box-shadow: 0 0 10px #333333;
    transition: left 150ms ease-in;
    &.open-menu{
      left: 76%;
    }
    .approve_content{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 41px;
      z-index: 90;
    }
    .foot{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
    }
  }
  .menus{
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 40px;
    .menu-content{
      height: 100%;
      overflow: hidden;
      .slider-wrapper{
        position: relative;
        width: 100%;
        height: 128px;
        overflow: hidden;
      }
      .menu-item{
        margin-top: 5px;
        background-color: white;
        .part1, .part2{
          border-bottom: 1px solid @color-border-1;
        }
        .part1{
          height: 35px;
          line-height: 35px;
          padding: 0 10px;
          border-top: 1px solid @color-border-1;
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
        .part2{
          padding: 10px;
          .from, .from-detail, .to{
            display: flex;
            justify-content: space-between;
            p{
              flex: 0 50px;
              font-size: @font-size-small;
              text-align: right;
              color: @color-background-1;
            }
          }
          .from, .to{
            line-height: 20px;
            .qiu{
              flex: 0 8px;
              position: relative;
              top: 5px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              &.blue{
                background-color: @color-background-1;
              }
              &.red{
                background-color: red;
              }
            }
            h3{
              flex: 1;
              padding-left: 10px;
              font-size: @font-size-medium;
              text-align: left;
            }
          }
          .from-detail{
            margin: 10px 0;
            line-height: 18px;
            position: relative;
            .xian{
              flex: 0 8px;
              position: absolute;
              left: 0;
              top:0;
              bottom: 0;
              width: 8px;
              height: 100%;
              background: url("../../base/menu-item/to_bottom.png") repeat-y center 1px;
              background-size: 8px;
            }
            h4{
              flex: 1;
              padding-left: 10px;
              margin-left: 8px;
            }
          }
        }
        .part3{
          height: 35px;
          line-height: 35px;
          text-align: center;
          background-color: @color-background-1;
          color: white;
          font-size: @font-size-medium;
        }
      }
    }
  }
}
</style>
