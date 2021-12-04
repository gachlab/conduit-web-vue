Vue.component("conduit-articles-list", {
  template: `
    <div>
      <conduit-articles-list-item
        v-bind:article="article"
        v-for="article in articles"
        :key="article.slug"
      >
      </conduit-articles-list-item>
    </div>
  `,
  props: ["articles"],
});
