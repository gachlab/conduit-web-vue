
import Vue from 'vue'
import template from './template.html'

export default function () {
  Vue.component("tags-popular", {
    template,
    props: ["tags", "onSelect"],
  })
};
