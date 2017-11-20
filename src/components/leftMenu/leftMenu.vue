<template>
  <div>
    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
      <div class="layout-logo-left">
        <div class="logo-font"><h2>Black_blog后台管理系统</h2></div>
      </div>
      <hr/>
      <template v-for="item in menuData">
        <Submenu :name="item.submenuId">
          <template slot="title">
            <Icon :type="item.title.icon"></Icon>
            {{ item.title.context }}
          </template>
          <template v-for="option in item.Option">
            <MenuItem :name="option.id">{{ option.context }}</MenuItem>
          </template>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>
<script>
  export default {
    name: 'leftMenu',
    data() {
      return {
        menuData: []
      }
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