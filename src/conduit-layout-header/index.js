import Vue from 'vue'
import template from './template.html'

export default function () {
  Vue.component("conduit-layout-header", {
    template,
    data: () => ({
      isAuthenticated: false,
    }),
  });
}
