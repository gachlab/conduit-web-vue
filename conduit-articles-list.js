Vue.component("conduit-articles-list", {
  template: `
  <div>
  <slot></slot>
  </div>
  `,
  props: ["articles"],
});
