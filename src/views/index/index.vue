<template>
  <div>
    <Row>
      <Col span="4" style="height: 100vh; background: #495060">
        <left-menu></left-menu>
      </Col>
      <Col span="20">
        右侧内容
      </Col>
    </Row>
  </div>
</template>
<script>
  import leftMenu from '../../components/leftMenu/leftMenu'
  export default {
    name: 'index',
    data() {
      return {
      }
    },
    components: {
      'left-menu': leftMenu
    },
    methods: {}
  }
</script>
<style scoped>
</style>