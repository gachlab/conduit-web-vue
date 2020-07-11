const routes = [
  {
    path: "/",
    name: "home",
    component: ConduitHomePage,
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
