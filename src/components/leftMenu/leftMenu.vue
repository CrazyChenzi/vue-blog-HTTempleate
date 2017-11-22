<template>
  <div>
    <div class="layout-logo">Black-Blog</div>
    <Menu :active-name="$router.currentRoute.path" theme="dark" width="auto" :open-names="[$router.currentRoute.path.split('/')[1]]" 
    style="margin-top: 30px" @on-select="changePage">
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
    mounted() {
      console.log(this.$router.currentRoute.path.split('/')[1])
    },
    methods: {
      changePage: function (name) {
        this.$router.push({ path: name })
      }
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