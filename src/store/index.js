import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem('token') || null,
    isLoggedIn: !!localStorage.getItem('token'),
    articles: [],
    categories: [],
    tags: []
  },
  getters: {
    isAuthenticated: state => state.isLoggedIn,
    currentUser: state => state.user,
    allArticles: state => state.articles,
    allCategories: state => state.categories,
    allTags: state => state.tags
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isLoggedIn = true
    },
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
      state.isLoggedIn = true
    },
    LOGOUT(state) {
      state.user = null
      state.token = null
      state.isLoggedIn = false
      localStorage.removeItem('token')
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_TAGS(state, tags) {
      state.tags = tags
    },
    ADD_ARTICLE(state, article) {
      state.articles.unshift(article)
    }
  },
  actions: {
    login({ commit }, { token, user }) {
      commit('SET_TOKEN', token)
      commit('SET_USER', user)
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
    fetchArticles({ commit }) {
      // Placeholder for now - will be replaced with API call
      const mockArticles = [
        {
          id: 1,
          title: 'Vue.js开发实践',
          content: '这是一篇关于Vue.js开发实践的文章。Vue.js是一个渐进式的JavaScript框架，非常适合构建用户界面。它具有响应式数据绑定、组件系统、虚拟DOM等特性，使得开发者能够高效地构建交互式的Web应用程序。在本文中，我们将深入探讨Vue.js的核心概念和最佳实践。',
          summary: 'Vue.js是一个渐进式的JavaScript框架，非常适合构建用户界面。',
          author: '抗抗清',
          publishDate: '2023-06-25',
          category: '前端开发',
          tags: ['Vue.js', 'JavaScript', '前端'],
          views: 128,
          image: null
        },
        {
          id: 2,
          title: 'Element UI组件库使用指南',
          content: '这是一篇关于Element UI的使用指南。Element UI是一套为开发者、设计师和产品经理准备的基于Vue 2.0的组件库。它提供了丰富的组件，包括基础组件、表单组件、数据展示组件、反馈组件等，能够帮助开发者快速构建功能丰富、界面美观的Web应用程序。',
          summary: 'Element UI是一套为开发者、设计师和产品经理准备的基于Vue 2.0的组件库。',
          author: '抗抗清',
          publishDate: '2023-06-24',
          category: 'UI框架',
          tags: ['Element UI', 'Vue.js', '组件库'],
          views: 95,
          image: null
        },
        {
          id: 3,
          title: 'JavaScript异步编程详解',
          content: '这是一篇关于JavaScript异步编程的详细解析。在现代Web开发中，异步编程是一个重要的概念。JavaScript提供了多种处理异步操作的方式，包括回调函数、Promise、async/await等。理解这些概念对于编写高质量的JavaScript代码至关重要。',
          summary: '深入理解JavaScript中的异步编程，包括Promise、async/await等。',
          author: '抗抗清',
          publishDate: '2023-06-23',
          category: 'JavaScript',
          tags: ['JavaScript', '异步编程', 'Promise'],
          views: 156,
          image: null
        }
      ]
      commit('SET_ARTICLES', mockArticles)
    },
    fetchCategories({ commit }) {
      const mockCategories = [
        { name: '前端开发', count: 15 },
        { name: 'JavaScript', count: 8 },
        { name: 'Vue.js', count: 12 },
        { name: 'UI框架', count: 6 },
        { name: '后端开发', count: 9 },
        { name: '数据库', count: 4 },
        { name: '算法', count: 7 },
        { name: '工具使用', count: 5 }
      ]
      commit('SET_CATEGORIES', mockCategories)
    },
    fetchTags({ commit }) {
      const mockTags = [
        { label: 'Vue.js', type: 'success' },
        { label: 'JavaScript', type: '' },
        { label: 'Element UI', type: 'info' },
        { label: '前端', type: 'warning' },
        { label: 'CSS', type: 'danger' },
        { label: 'Node.js', type: 'success' },
        { label: 'Express', type: 'info' },
        { label: 'MongoDB', type: 'warning' },
        { label: 'Git', type: 'danger' },
        { label: '算法', type: '' }
      ]
      commit('SET_TAGS', mockTags)
    }
  },
  modules: {
  }
})
