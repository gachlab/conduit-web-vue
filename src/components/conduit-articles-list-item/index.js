
import Vue from 'vue'
import template from './template.html'

export default function () {
  Vue.component("conduit-articles-list-item", {
    template,
    props: ["article"],
    methods: {
      onFavoritedArticle(article) {
        console.log(article);
      },
    },
  })
};
