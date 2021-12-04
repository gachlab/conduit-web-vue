
import Vue from 'vue'
import template from './template.html'

export default function () {
  Vue.component("conduit-buttons-favorite", {
    template,
    props: ["article", "onFavorited"],
  })
};
