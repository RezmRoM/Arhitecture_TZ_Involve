export const paginationMixin = {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
    }
  },

  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      return this.items.slice(startIndex, startIndex + this.itemsPerPage)
    },

    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
  },

  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
  },

  watch: {
    totalPages(newValue) {
      this.currentPage = Math.min(this.currentPage, Math.max(1, newValue))
    },
  },
}
