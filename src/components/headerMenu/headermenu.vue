<template>
  <div class="layout">
    <div class="layout-exit">注销</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

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
    z-index: 11;
  }
  .layout-exit {
    width: 100px;
    height: @heights;
    float: right;
    position: relative;
    top: @heights / 2;
    right: @heights - 10;
    color: #000;
    text-align: center;
    line-height: @heights;
  }
</style>

