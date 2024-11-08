export const sortMixin = {
  data() {
    return {
      sortBy: null,
      sortOrder: 'asc',
    }
  },

  methods: {
    toggleSort(field) {
      if (this.sortBy === field) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortBy = field
        this.sortOrder = 'asc'
      }
    },
  },

  computed: {
    sortedItems() {
      if (!this.sortBy || !Array.isArray(this.items)) return this.items

      return [...this.items].sort((a, b) => {
        const aValue = a[this.sortBy]
        const bValue = b[this.sortBy]
        if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1
        if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1
        return 0
      })
    },
  },
}
