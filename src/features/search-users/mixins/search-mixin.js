export const searchMixin = {
  data() {
    return {
      searchQuery: ''
    }
  },

  computed: {
    filteredItems() {
      if (!this.searchQuery || !Array.isArray(this.items)) {
        return this.items
      }

      const query = this.searchQuery.toLowerCase()
      return this.items.filter(item =>
        this.searchFields.some(field =>
          String(item[field]).toLowerCase().includes(query)
        )
      )
    }
  },

  methods: {
    updateSearchQuery(value) {
      this.searchQuery = value
    },
    
    clearSearch() {
      this.searchQuery = ''
    }
  }
} 