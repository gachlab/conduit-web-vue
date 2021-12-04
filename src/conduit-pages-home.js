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
              v-bind:feeds="state.feeds"
              v-bind:selected="state.selectedFeed"
              v-bind:onSelect="onFeedSelected"
            ></conduit-articles-feeds>

            <conduit-articles-list v-bind:articles="state.articles">            
            </conduit-articles-list>
          </div>
          <div class="col-md-3">
            <tags-popular
              v-bind:tags="state.tags"
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
        state: {
          tags: undefined,
          feeds: undefined,
          selectedFeed: undefined,
          articles: undefined,
        },
      };
    },
    created() {
      dependencies.service
        .init()
        .then((state) => (this.state = Object.assign({}, state)));
    },
    methods: {
      onTagSelected(tag) {
        dependencies.service
          .onTagSelected({ tag, state: Object.assign({}, this.state) })
          .then((state) => (this.state = Object.assign({}, state)));
      },
      onFeedSelected(feed) {
        dependencies.service
          .onFeedSelected({ feed, state: Object.assign({}, this.state) })
          .then((state) => (this.state = Object.assign({}, state)));
      },
      onPageSelected(page) {
        dependencies.service
          .onPageSelected({ page, state: Object.assign({}, this.state) })
          .then((state) => (this.state = Object.assign({}, state)));
      }
    },
  };
})({ service: ConduitPagesHomeService });
