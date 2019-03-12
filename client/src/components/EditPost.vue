<template>
  <div class="posts">
    <h1>Edit Post</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITLE" v-model="title">
      </div>
      <div>
        <input type="text" name="description" placeholder="DESCRIPTION" v-model="description">
      </div>
      <div>
        <button class="app_post_btn" @click="updatePost">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '@/services/PostsService'
export default {
  name: 'EditPost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostService.fetchPosts({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
    },
    async updatePost () {
      await PostService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({name: 'Posts'})
    }
  }
}
</script>

<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
