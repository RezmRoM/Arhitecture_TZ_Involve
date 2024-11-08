<template>
  <div class="bb-user-table">
    <div class="e-header">
      <BBText variant="head-32-40" tag="h1">{{ $tr('userList') }}</BBText>
      <div class="e-language-switcher">
        <button
          @click="switchLanguage('ru-RU')"
          :class="{ 'm-active': currentLanguage === 'ru-RU' }"
          class="e-lang-button"
        >
          RU
        </button>
        <button
          @click="switchLanguage('en-US')"
          :class="{ 'm-active': currentLanguage === 'en-US' }"
          class="e-lang-button"
        >
          EN
        </button>
      </div>
    </div>

    <div class="e-content">
      <SearchBar
        :search-query="searchQuery"
        :is-filter-active="isFilterActive"
        @update:search-query="updateSearchQuery"
        @clear-filters="clearAllFilters"
      />

      <SortButtons :sort-by="sortBy" @sort="handleSort" />

      <BBPreloader 
        v-if="isLoading" 
        size="md"
        :text="$tr('loading')"
      />
      
      <template v-else>
        <UserList
          :users="paginatedItems"
          :is-loading="isLoading"
          :error="error"
          :sort-by="sortBy"
          :sort-order="sortOrder"
          @delete="openDeleteModal"
          @sort="handleSort"
        />

        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @prev="prevPage"
          @next="nextPage"
        />
      </template>
    </div>

    <DeleteConfirmationModal
      :is-open="isDeleteModalOpen"
      @confirm="confirmDelete"
      @cancel="closeDeleteModal"
    />
  </div>
</template>

<script>
import DeleteConfirmationModal from '@/features/delete-users/DeleteConfirmationModal.vue'
import SearchBar from '@/shared/ui/search-bar/SearchBar.vue'
import SortButtons from '@/features/sort-users/SortButtons.vue'
import UserList from '@/widgets/user-list/ui/UserList.vue'
import Pagination from '@/shared/ui/pagination/Pagination.vue'
import { userService } from '@/entities/user/api/user-service'
import { mapGetters, mapActions } from 'vuex'
import { BBText, BBPreloader } from '@/shared/ui'

export default {
  name: 'UserTable',

  components: {
    BBText,
    BBPreloader,
    DeleteConfirmationModal,
    SearchBar,
    SortButtons,
    UserList,
    Pagination,
  },

  data() {
    return {
      users: [],
      isLoading: false,
      error: null,
      searchQuery: '',
      sortBy: null,
      sortOrder: 'asc',
      currentPage: 1,
      itemsPerPage: 5,
      isDeleteModalOpen: false,
      userToDelete: null,
    }
  },

  computed: {
    ...mapGetters(['currentLanguage']),

    isFilterActive() {
      return this.searchQuery !== '' || this.sortBy !== null
    },

    filteredItems() {
      if (!this.searchQuery) return this.users

      const query = this.searchQuery.toLowerCase()
      return this.users.filter(
        user =>
          user.username.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query),
      )
    },

    sortedItems() {
      if (!this.sortBy) return this.filteredItems

      return [...this.filteredItems].sort((a, b) => {
        const aValue = a[this.sortBy]
        const bValue = b[this.sortBy]
        const modifier = this.sortOrder === 'asc' ? 1 : -1

        return aValue > bValue ? modifier : -modifier
      })
    },

    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.sortedItems.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.sortedItems.length / this.itemsPerPage)
    },
  },

  mounted() {
    this.fetchUsers()
  },

  methods: {
    ...mapActions(['setLanguage']),

    switchLanguage(lang) {
      this.setLanguage(lang)
    },

    async fetchUsers() {
      this.isLoading = true
      this.error = null

      try {
        this.users = await userService.getUsers()
      } catch (err) {
        this.error = 'Ошибка при загрузке пользователей'
        console.error('Ошибка при загрузке пользователей:', err)
      } finally {
        this.isLoading = false
      }
    },

    updateSearchQuery(value) {
      this.searchQuery = value
      this.currentPage = 1
    },

    handleSort(field) {
      if (this.sortBy === field) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortBy = field
        this.sortOrder = 'asc'
      }
      this.currentPage = 1
    },

    clearAllFilters() {
      this.searchQuery = ''
      this.sortBy = null
      this.sortOrder = 'asc'
      this.currentPage = 1
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },

    openDeleteModal(userId) {
      this.userToDelete = userId
      this.isDeleteModalOpen = true
    },

    closeDeleteModal() {
      this.isDeleteModalOpen = false
      this.userToDelete = null
    },

    confirmDelete() {
      if (this.userToDelete !== null) {
        this.users = this.users.filter(user => user.id !== this.userToDelete)
        this.closeDeleteModal()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bb-user-table {
  .e-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .e-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
  }

  .e-language-switcher {
    display: flex;
    gap: 0.5rem;
  }

  .e-lang-button {
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-primary);
    border-radius: 0.25rem;
    background: none;
    color: var(--color-primary);
    cursor: pointer;
    transition: all 0.3s ease;

    &.m-active {
      background: var(--color-primary);
      color: var(--color-on-primary);
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .e-content {
    background-color: #f7f7f7;
    padding: 1rem;
    border-radius: 0.5rem;
  }
}
</style>
