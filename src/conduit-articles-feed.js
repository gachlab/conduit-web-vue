Vue.component("conduit-articles-feeds", {
  template: `
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li v-for="feed in feeds" :key="feed.id" class="nav-item">
        <a
          class="nav-link"
          v-bind:class="{'active': feed.id===selected}"
          v-on:click="onSelect(feed)"
        >{{feed.name}}</a>
      </li>
    </ul>
  </div>
  `,
  props: ["feeds", "selected", "onSelect"],
});
