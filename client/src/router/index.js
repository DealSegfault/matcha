import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/post/new',
      name: 'NewPost',
      component: NewPost
    }
  ]
})
