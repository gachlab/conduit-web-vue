Vue.component("conduit-articles-list-item", {
  template: `
  <div>
    <slot></slot>
  </div>
  `,
  props: ["article"],
});
