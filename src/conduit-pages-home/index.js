import template from './template.html'
import Service from './service'

export default {
  template,
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
    Service
      .init()
      .then((state) => (this.state = Object.assign({}, state)));
  },
  methods: {
    onTagSelected(tag) {
      Service
        .onTagSelected({ tag, state: Object.assign({}, this.state) })
        .then((state) => (this.state = Object.assign({}, state)));
    },
    onFeedSelected(feed) {
      Service
        .onFeedSelected({ feed, state: Object.assign({}, this.state) })
        .then((state) => (this.state = Object.assign({}, state)));
    },
    onPageSelected(page) {
      Service
        .onPageSelected({ page, state: Object.assign({}, this.state) })
        .then((state) => (this.state = Object.assign({}, state)));
    }
  },
};

