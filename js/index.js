import router from './router.js'
import './components.js'

Vue.config.devtools = true

const app = new Vue({
  router: router
}).$mount('#app');

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;