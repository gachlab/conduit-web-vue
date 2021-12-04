Vue.component("conduit-articles-preview", {
  template: `
    <div>
      <div class="article-preview">
        <slot></slot>
        <a class="preview-link" v-bind:href="article.href">
          <h1>{{article.title}}</h1>
          <p>{{article.description}}</p>
          <span>Read more...</span>
          <ul class="tag-list">
            <li
              v-for="tag in article.tagList"
              v-bind:key="tag"
              class="tag-default tag-pill tag-outline"
            >
              {{tag}}
            </li>
          </ul>
        </a>
      </div>
    </div>
  `,
  props: ["article"],
});
