const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
