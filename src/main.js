// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import Axios from 'axios'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

const iview = require('iview')

Vue.use(iview)
// Vue.use(mavonEditor)

// if (process.browser) {
//   const VueQuillEditor = require('vue-quill-editor/ssr')
//   Vue.use(VueQuillEditor)
// }

Vue.prototype.$http = Axios;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
