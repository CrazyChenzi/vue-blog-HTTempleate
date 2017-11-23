<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import './styles/container.less';
  #app {
    overflow: hidden;
  }
</style>
