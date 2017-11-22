<template>
  <div v-if="menuData.length>0">
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
  </div>
</template>
<script>
  export default {
    name: 'menu',
    data() {
      return {

      }
    },
    props: {
      menuData: {
        type: Array,
        default: []
      }
    }
  }
</script>