import service from "@/utils/require";

export default {
    // Get all articles
    getArticles(params) {
        return service.get('/articles', { params })
    },
    
    // Get article by ID
    getArticleById(id) {
        return service.get(`/articles/${id}`)
    },
    
    // Create new article
    createArticle(data) {
        return service.post('/articles', data)
    },
    
    // Update article
    updateArticle(id, data) {
        return service.put(`/articles/${id}`, data)
    },
    
    // Delete article
    deleteArticle(id) {
        return service.delete(`/articles/${id}`)
    },
    
    // Get categories
    getCategories() {
        return service.get('/categories')
    },
    
    // Get tags
    getTags() {
        return service.get('/tags')
    },
    
    // Search articles
    searchArticles(keyword) {
        return service.get('/articles/search', { params: { q: keyword } })
    }
}