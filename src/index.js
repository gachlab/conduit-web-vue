import Vue from 'vue'
import VueRouter from 'vue-router'
import conduitArticlesFeed from './components/conduit-articles-feed';
import conduitArticlesList from './components/conduit-articles-list';
import conduitArticlesListItem from './components/conduit-articles-list-item';
import conduitArticlesMeta from './components/conduit-articles-meta';
import conduitArticlesPreview from './components/conduit-articles-preview';
import conduitButtonsFavorite from './components/conduit-buttons-favorite';
import conduitTagsPopular from './components/conduit-tags-popular';
import conduitLayoutFooter from './conduit-layout-footer';
import conduitLayoutHeader from './conduit-layout-header';
import ConduitPagesHome from './conduit-pages-home'

conduitLayoutHeader({Vue})
conduitLayoutFooter({Vue})
conduitArticlesFeed()
conduitTagsPopular()
conduitArticlesList()
conduitArticlesListItem()
conduitArticlesPreview()
conduitArticlesMeta()
conduitButtonsFavorite()

Vue.use(VueRouter)

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



new Vue({
  router,
}).$mount("#app");

