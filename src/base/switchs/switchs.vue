<template>
  <div class="switchs">
    <div class="switch-box" :class="isOpen?'on':'off'">
      <div class="qiu" @click.stop="toggle_switch"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggle_switch (e) {
      this.$emit('toggle_switch')
    }
  }
}
</script>

<style lang="less">
.switch-box{
  position: relative;
  width: 40px;
  height:22px;
  border-radius: 22px;
  transition: backgroundColor 200ms ease-in;
  .qiu{
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fff;
    transition: left 200ms ease-in;
  }
  &.on{
    border: 1px solid #00E266;
    background-color: #00E266;
    .qiu {
      left: 18px;
    }
  }
  &.off{
    border: 1px solid #ccc;
    background-color: #ccc;
    .qiu {
      left: 0px;
    }
  }
}
</style>
