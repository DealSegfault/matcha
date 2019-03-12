<template>
  <div class="posts">
      <h1>Posts</h1>
      <tr
        v-for="post in posts"
        :key=post.title
      >
        <td>
          <h2>{{ index }}</h2>
          <span><b>{{ post.title }}</b></span><br/>
          <span>{{ post.description }}</span>
        </td>
      </tr>
  </div>
</template>

<script>

import PostService from '@/services/PostsService'

export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostService.fetchPosts()
      this.posts = response.data
      console.log(this.posts)
    }
  }
}

</script>
