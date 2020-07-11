const ConduitPagesHome = {
  template: `
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <conduit-articles-feeds
              v-bind:feeds="feeds"
              v-bind:selected="selectedFeed"
              v-on:select="onFeedSelected($event)"
            ></conduit-articles-feeds>

            <conduit-articles-list v-bind:articles="articles">
              <conduit-articles-list-item
                v-for="article in articles"
                :key="article.slug"
                v-bind:article="article"
              >
                <conduit-articles-preview v-bind:article="article">
                  <conduit-articles-meta v-bind:article="article">
                    <conduit-buttons-favorite
                      v-bind:article="article"
                      v-on:favorited="onFavoritedArticle(article)"
                    ></conduit-buttons-favorite>
                  </conduit-articles-meta>
                </conduit-articles-preview>
              </conduit-articles-list-item>
            </conduit-articles-list>
          </div>
          <div class="col-md-3">
            <tags-popular
              v-bind:tags="tags"
              v-on:select="onTagSelected($event)"
            ></tags-popular>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      tags: undefined,
      feeds: [
        { id: "personal", name: "Your feed" },
        { id: "all", name: "Global Feed" },
      ],
      selectedFeed: "all",
      articles: undefined,
    };
  },
  created() {
    ConduitPagesHomeService.fetchTags().then((tags) => (this.tags = tags));
    ConduitPagesHomeService.fetchArticles({
      limit: 10,
      offset: 0,
      feed: { id: "all", name: "Global Feed" },
    }).then((articles) => (this.articles = articles));
  },
  methods: {
    onTagSelected(tag) {
      const tagFeed = {
        id: tag.toLowerCase(),
        name: "#" + tag,
      };
      this.feeds[2] = tagFeed;
      this.selectedFeed = tagFeed.id;
      ConduitPagesHomeService.fetchArticles({
        limit: 10,
        offset: 0,
        feed: tagFeed,
      }).then((articles) => (this.articles = articles));
    },
    onFeedSelected(selectedFeed) {
      this.selectedFeed = selectedFeed.id;
      ConduitPagesHomeService.fetchArticles({
        limit: 10,
        offset: 0,
        feed: selectedFeed,
      }).then((articles) => (this.articles = articles));
    },
    onFavoritedArticle(article) {
      console.log(article);
    },
  },
};
