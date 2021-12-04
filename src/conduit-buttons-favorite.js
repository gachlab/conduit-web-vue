Vue.component("conduit-buttons-favorite", {
  template: `
  <div class="pull-xs-right">
    <button class="btn btn-sm btn-outline-primary" v-on:click="onFavorited(article)">
      <i class="ion-heart"></i>
      {{article.favoritesCount}}
    </button>
  </div>
  `,
  props: ["article", "onFavorited"],
});
