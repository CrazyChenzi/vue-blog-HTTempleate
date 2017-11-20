<template>
  <div>
    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
      <div class="layout-logo-left">
        <div class="logo-font"><h2>Black_blog后台管理系统</h2></div>
      </div>
      <hr/>
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
<style scoped>
  .logo-font {
    color: #fff;
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    border-radius: 3px;
    margin: 15px auto;
  }
  hr {
    border: 0.5px solid #666;
  }
</style>