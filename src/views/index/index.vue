<template>
  <div>
    <Row>
      <Col span="4" style="height: calc(100vh); background: #495060">
        <left-menu></left-menu>
      </Col>
      <Col span="20">
        <Affix>
          <header-menu></header-menu>
        </Affix>
        <router-view class="index-router"></router-view>
      </Col>
    </Row>
  </div>
</template>
<script>
  import leftMenu from '../../components/leftMenu/leftMenu'
  import headerMenu from '../../components/headerMenu/headerMenu'
  export default {
    name: 'index',
    data() {
      return {
      }
    },
    components: {
      'left-menu': leftMenu,
      'header-menu': headerMenu
    },
    methods: {}
  }
</script>
<style scoped>
  .index-router {
    background: #f3f3f3;
    height: calc(100vh - 60px);
  }
</style>