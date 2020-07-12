const ConduitPagesHome = (function (dependencies) {
  const template = `
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
          v-bind:onSelect="onFeedSelected"
        ></conduit-articles-feeds>

           <div
            v-for="article in articles"
            :key="article.slug"
           >
            <conduit-articles-preview v-bind:article="article">
              <conduit-articles-meta v-bind:article="article">
                <conduit-buttons-favorite
                  v-bind:article="article"
                  v-bind:onFavorited="onFavoritedArticle"
                ></conduit-buttons-favorite>
              </conduit-articles-meta>
            </conduit-articles-preview>
          </div>
       </div>
      <div class="col-md-3">
        <tags-popular
          v-bind:tags="tags"
          v-bind:onSelect="onTagSelected"
        ></tags-popular>
      </div>
    </div>
  </div>
</div>
`;

  return {
    template: template,
    data() {
      return {
        tags: undefined,
        feeds: undefined,
        selectedFeed: undefined,
        articles: undefined,
      };
    },
    created() {
      dependencies.service.init().then((state) => this.setState(state));
    },
    methods: {
      onTagSelected(tag) {
        dependencies.service
          .onTagSelected({ tag, state: this.getState() })
          .then((state) => this.setState(state));
      },
      onFeedSelected(feed) {
        dependencies.service
          .onFeedSelected({ feed, state: this.getState() })
          .then((state) => this.setState(state));
      },
      onPageSelected(page) {
        dependencies.service
          .onPageSelected({ page, state: this.getState() })
          .then((state) => this.setState(state));
      },
      onFavoritedArticle(article) {
        console.log(article);
      },
      getState() {
        return JSON.parse(
          JSON.stringify({
            articles: this.articles,
            pages: this.pages,
            tags: this.tags,
            feeds: this.feeds,
            selectedFeed: this.selectedFeed,
            selectedPage: this.selectedPage,
          })
        );
      },
      setState(input) {
        this.articles = input.articles;
        this.pages = input.pages;
        this.tags = input.tags;
        this.feeds = input.feeds;
        this.selectedFeed = input.selectedFeed;
        this.selectedPage = input.selectedPage;
      },
    },
  };
})({ service: ConduitPagesHomeService });
