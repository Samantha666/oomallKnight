<template>
  <div class="footer2">
    <button class="kaigong foot-btn" type="button">开工</button>
    <button class="refresh foot-btn" type="button">刷新列表</button>
    <router-link class="task" to="/">
      <div class="notice"></div>
      <i class="icon-task has-task"></i>
      <span class="text">我的任务</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="less">
@import "../../common/less/variable";
.footer2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: white;
  border-top: 1px solid @color-border-1;
  .foot-btn{
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
    padding-right: 0;
  }
  .kaigong{
    width: 65px;
    padding-left: 30px;
    color: white;
    background-color: #738ffe;
    background-image: url("./moto.png");
    background-repeat: no-repeat;
    background-size: 25px 20px;
    background-position: 5px 5px;
  }
  .refresh{
    width: 90px;
    padding-left: 25px;
    border: 1px solid #aaa;
    border-radius: 15px;
    text-align: left;
    background-color: white;
    background-image: url("./refresh.png");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 5px 6px;
  }
  .task{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 50px;
    text-align: center;
    .text{
      line-height: 1.2;
    }
    .icon-task{
      display: inline-block;
      position: relative;
      width: 20px;
      height: 18px;
      background: url("./task.png") no-repeat center;
      background-size: 100% 100%;
    }
    .has-task:after{
      content: '';
      position: absolute;
      top: -1px;
      right: -1px;
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: red;
      border-radius: 50%
    }
  }
}
</style>
