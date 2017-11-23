<!--<template>
  <div>
    <Row>
      <Col :span="spanLeft" style="height: calc(100vh); background: #495060">
        <left-menu :menuData="menuData"></left-menu>
      </Col>
      <Col :span="spanRight">
        <header-menu>
          <Button type="text" @click="toggleClick" slot="zooming">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </header-menu>
        <router-view class="index-router"></router-view>
      </Col>
    </Row>
  </div>
</template>
<script>
  import leftMenu from '../../components/leftMenu/leftMenu'
  import headerMenu from '../../components/headerMenu/headerMenu'
  import shrinkableMenu from '../main-components/shrinkable-menu/shrinkable-menu';
  export default {
    name: 'index',
    data() {
      return {
        menuData: JSON.parse(localStorage.getItem('menuData')),
        spanLeft: 4,
        spanRight: 20
      }
    },
    components: {
      'left-menu': leftMenu,
      'header-menu': headerMenu,
      'shrinkable-menu': shrinkableMenu
    },
    created() {
    },
    methods: {
      toggleClick: function() {
        this.spanLeft = 1
        this.spanRight = 23
        this.menuData.forEach((item, index) => {
          let params = {}
          params.submenuId = item.submenuId
          params.title = {}
          params.title.icon = item.title.icon
          this.$set(this.menuData, index, params)
        })
        console.log(this.menuData)
      }
    }
  }
</script>
<style scoped>
  .index-router {
    background: #f3f3f3;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
</style>-->

<style lang="less">
    @import "./main.less";
</style>
<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <shrinkable-menu 
        :shrink="shrink"
        :menu-list="menuList">
        <div slot="top" class="logo-con">
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
        <div class="header-avator-con">
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Avatar icon="person" style="background: #619fe7;margin-left:10px;"></Avatar>
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
        menuList: [
          {
            name: 'ceshi1',
            path: '/i',
            title: 'ceshi1',
            icon: 'ios-folder',
            children: [
              {
                icon: 'ios-paper-outline',
                name: '/index/article',
                // path: '/index/article',
                title: 'page1'
              },
              {
                icon: 'ios-paper-outline',
                name: 'page2',
                path: 'page2',
                title: 'page2'
              }
            ]
          }
        ]
      };
    },
    computed: {
    },
    methods: {
      toggleClick () {
        this.shrink = !this.shrink;
      },
      handleClickUserDropdown () {
        this.$router.push({
          name: 'login'
        });
      }
    },
    mounted () {
    }
  }
</script>
