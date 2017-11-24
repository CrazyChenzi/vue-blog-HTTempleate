<style lang="less">
  @import "./main.less";
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
    margin-bottom: 10px;
  }
</style>
<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <shrinkable-menu 
        :shrink="shrink"
        :menu-list="menuList"
        @on-change="changeRouter"
        :openNames="shrink ? [] : $router.currentRoute.path.indexOf('home') > -1 ? [] : [$router.currentRoute.path.split('/')[1]]">
        <div slot="top" class="logo-con">
          <div class="layout-logo" v-show="!shrink">Black-Blog</div>
          <div class="layout-logo" v-show="shrink">B</div>
            <!-- <img v-show="!shrink"  src="../images/logo.jpg" key="max-logo" />
            <img v-show="shrink" src="../images/logo-min.jpg" key="min-logo" /> -->
        </div>
      </shrinkable-menu>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
      <div class="main-header">
        <div class="navicon-con">
          <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>
        <Breadcrumb style="display: inline-block">
          <BreadcrumbItem to="/index/home">首页</BreadcrumbItem>
          <template v-for="(item, index) in breadcrumbList.breadcrumb">
            <BreadcrumbItem :to="index === breadcrumbList.breadcrumb.length-1 ? breadcrumbList.path : ''" >
              {{ item }}
            </BreadcrumbItem>
          </template>
        </Breadcrumb>
        <div class="header-avator-con">
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Avatar icon="person" style="background: #619fe7;margin-left:10px;margin-right: 10px"></Avatar>
              <a @click="exit">注销</a>
            </Row>
          </div>
        </div>
      </div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
      <div class="single-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import shrinkableMenu from '../main-components/shrinkable-menu/shrinkable-menu.vue';
  export default {
    components: {
      shrinkableMenu
    },
    data () {
      return {
        shrink: false,
        userName: '',
        menuList: JSON.parse(localStorage.getItem('menuData')),
        breadcrumbList: {}
      }
    },
    computed: {
    },
    methods: {
      toggleClick: function() {
        this.shrink = !this.shrink;
      },
      exit: function() {
        this.$Loading.start();
        this.$router.push({
          path: '/login'
        });
        this.$Loading.finish();
      },
      changeRouter: function(name) {
        this.$Loading.start();
        this.$router.push({ path: name })
        this.$Loading.finish();
        setTimeout(() => {
          if(this.$router.currentRoute.meta.name !== undefined) {
            let params = {
              breadcrumb: this.$router.currentRoute.meta.name.split('/'),
              path: name
            }
            this.breadcrumbList = params
          }
        }, 200);
      }
    },
    mounted () {
      if(this.$router.currentRoute.meta.name !== undefined) {
        let params = {
          breadcrumb: this.$router.currentRoute.meta.name.split('/'),
          path: this.$router.currentRoute.path
        }
        this.breadcrumbList = params
      }
    }
  }
</script>
