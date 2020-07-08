Vue.component("conduit-articles-meta", {
  template: `
  <div class="article-meta">
  <a>
    <img v-bind:src="article.author.image" />
  </a>
  <div class="info">
    <a
      class="author"
      v-bind:href="'#/profile/'+article.author.username"
    >{{article.author.username}}</a>
    <span class="date">{{new Date(article.createdAt)}}</span>
  </div>
  <slot></slot>
</div>
  `,
  props: ["article"],
});
