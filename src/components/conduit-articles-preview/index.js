
import Vue from 'vue'
import template from './template.html'

export default function () {
  Vue.component("conduit-articles-preview", {
    template,
    props: ["article"],
  })
};
