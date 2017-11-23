<template>
  <div class="layout">
    <slot name="zooming"></slot>
    <Avatar class="header-img" @click.native="changeImg">U</Avatar>
    <div class="layout-exit">注销</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      changeImg: function() {
        alert(1)
      }
    }
  }
</script>
<style lang="less" scoped>
  @heights: 30px;
  .layout {
    background: #fff;
    height: 2 * @heights;
    position: relative;
    z-index: 2000;
    box-shadow: 0px 2px 5px #888888;
  }
  .layout-exit {
    width: @heights;
    height: @heights;
    float: right;
    position: relative;
    top: @heights / 2;
    right: @heights - 10;
    color: #000;
    text-align: center;
    line-height: @heights;
  }
  .header-img {
    float: right;
    height: @heights;
    float: right;
    position: relative;
    top: @heights / 2;
    right: 4 * @heights - 20;
    text-align: center;
    line-height: @heights;
    color: #f56a00;
    background-color: #fde3cf;
    cursor: pointer;
  }
</style>

