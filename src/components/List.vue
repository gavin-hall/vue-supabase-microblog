<template>
  <section class="px-2 pt-16 pb-6 bg-white md:px-0">
    <div class="container max-w-6xl px-8 mx-auto xl:px-5">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
        <template v-for="(post, index) in posts">
          <list-item
            :key="`post-${index}`"
            :id="post.id"
            :title="post.title"
            :description="post.description"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import ListItem from "./ListItem";
import DatabaseService from "../Database.service";

export default {
  name: "List",
  components: {
    ListItem,
  },
  data: () => ({
    posts: [],
    database: null,
  }),
  created() {
    const database = new DatabaseService();
    this.database = database.getInstance();
  },
  async mounted() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      let { error, data } = await this.database
        .from("posts")
        .select()
        .order("id");
      if (error) {
        console.error(error);
        return;
      }

      this.setPosts(data);
    },
    setPosts(posts) {
      this.posts = posts;
    },
  },
};
</script>
