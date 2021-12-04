Vue.component("conduit-articles-list-item", {
  template: `
    <div>
      <conduit-articles-preview v-bind:article="article">
        <conduit-articles-meta v-bind:article="article">
          <conduit-buttons-favorite
            v-bind:article="article"
            v-bind:onFavorited="onFavoritedArticle"
          ></conduit-buttons-favorite>
        </conduit-articles-meta>
      </conduit-articles-preview>
    </div>
  `,
  props: ["article"],
  methods: {
    onFavoritedArticle(article) {
      console.log(article);
    },
  },
});
