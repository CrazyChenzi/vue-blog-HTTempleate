<template>
  <div>
    <div class="layout-logo">Black-Blog</div>
    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" style="margin-top: 30px">
      <menu-more :menuData="menuData"></menu-more>
    </Menu>
  </div>
</template>
<script>
  import menu from './menu/menu'
  export default {
    name: 'leftMenu',
    data() {
      return {
        menuData: []
      }
    },
    components: {
      'menu-more': menu    
    },
    created() {
      this.$http.get('http://localhost:8080/src/components/leftMenu/leftMenu.json').then(response => {
        this.menuData = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    methods: {
      
    }
  }
</script>
<style lang="less" scoped>
  @heights: 30px;
  .layout-logo {
    width: 80%;
    height: @heights;
    background: #f5f7f9;
    border-radius: @heights / 10;
    position: relative;
    top: @heights / 2;
    text-align: center;
    line-height: @heights;
    margin: auto;
  }
</style>