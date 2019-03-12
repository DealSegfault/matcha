<template>
  <div class="post">
    <h1>Add Post</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITLE" v-model="title"/>
      </div>
      <div>
        <input type="text" name="description" placeholder="DESCRIPTION" v-model="description"/>
      </div>
      <div>
        <button class="app_post_btn" @click="addPost">Add</button>
      </div>
    </div>
  </div>
</template>

<script>

import PostService from '@/services/PostsService'

export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostService.addPost({
        title: this.title,
        description: this.description
      })
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>
