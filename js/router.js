// 1. Define route components.
// These can be imported from other files
let HomePage = httpVueLoader('/js/Pages/HomePage.vue')
let ProfilePage = httpVueLoader('/js/Pages/ProfilePage.vue')

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/profile', name: 'ProfilePage', component: ProfilePage }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router