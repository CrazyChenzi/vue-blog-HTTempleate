<template>
  <div>
    <div class="layout-logo">Black-Blog</div>
    <Menu :active-name="$router.currentRoute.path" theme="dark" width="auto" :open-names="[$router.currentRoute.path.split('/')[1]]" 
    style="margin-top: 30px" @on-select="changePage">
      <template v-for="item in menuData">
        <Submenu :name="item.submenuId">
          <template slot="title">
            <Icon :type="item.title.icon"></Icon>
            {{ item.title.context }}
          </template>
          <template v-for="option in item.Option">
            <MenuItem :name="option.id"><span>{{ option.context }}</span></MenuItem>
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
      }
    },
    props: {
      menuData: {
        type: Array
      }
    },
    created() {
    },
    components: {
    },
    mounted() {
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