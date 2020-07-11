Vue.component("tags-popular", {
  template: ` <div class="sidebar">
    <p>Popular Tags</p>

    <div v-if="!tags">Loading tags...</div>

    <div v-if="(tags && tags.length === 0)">No tags are here... yet.</div>

    <div class="tag-list" v-if="(tags && tags.length > 0)">
      <a
        class="tag-default tag-pill"
        v-for="tag in tags"
        :key="tag.id"
        v-on:click="select(tag)"
      >{{ tag }}</a>
    </div>
  </div>`,
  props: ["tags"],
  methods: {
    select(tag) {
      this.$emit("select", tag);
    },
  },
});
