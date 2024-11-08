<template>
  <div class="bb-search">
    <div class="e-container" :class="{ 'm-filter-active': !isFilterActive }">
      <div class="e-input-wrapper">
        <svg
          class="e-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input
          :value="searchQuery"
          @input="$emit('update:searchQuery', $event.target.value)"
          type="text"
          :placeholder="$tr('searchByNameOrEmail')"
          class="e-input"
        />
      </div>
    </div>
    <div v-if="isFilterActive" class="e-filter">
      <img
        src="@shared/assets/icons/common/clean.png"
        alt="Clean"
        class="e-filter-icon"
      />
      <BBButton
        variant="text"
        @click="$emit('clearFilters')"
        class="e-filter-button"
      >
        {{ $tr('clearFilter') }}
      </BBButton>
    </div>
  </div>
</template>

<script>
import { BBButton } from '@/shared/ui'

export default {
  name: 'SearchBar',

  components: {
    BBButton,
  },

  props: {
    searchQuery: {
      type: String,
      required: true,
    },
    isFilterActive: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['update:searchQuery', 'clearFilters'],
}
</script>

<style lang="scss" scoped>
.bb-search {
  $self: &;
  margin-bottom: 1rem;

  .e-container {
    background-color: var(--color-background);
    border-radius: 0.5rem 0.5rem 0 0;
    box-shadow: 0 1px 2px rgba(#000000, 0.05);
    padding: 0.75rem 0.9375rem;

    &.m-filter-active {
      border-radius: 0.5rem;
    }
  }

  .e-input-wrapper {
    position: relative;
  }

  .e-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
  }

  .e-input {
    width: 100%;
    padding: 0.75rem;
    padding-left: 3rem;
    border-radius: 0.5rem;
    background-color: #eceff0;
  }

  .e-filter {
    background-color: #ffffff;
    padding: 0.75rem;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
  }

  .e-filter-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }

  .e-filter-button {
    color: #6b7280;
    transition: color 0.2s;

    &:hover {
      color: #000000;
    }
  }
}
</style>
