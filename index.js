const routes = [
  {
    path: "/",
    name: "conduit-pages-home",
    component: ConduitPagesHome,
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
