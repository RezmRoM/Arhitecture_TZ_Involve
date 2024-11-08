<script>
import { BBButton } from '@/shared/ui'
import { formatDate } from '@/shared/lib/date-formatter'

export default {
  name: 'UserList',

  components: {
    BBButton,
  },

  props: {
    users: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String,
      default: null,
    },
    sortBy: {
      type: String,
      default: null,
    },
    sortOrder: {
      type: String,
      default: 'asc',
      validator: value => ['asc', 'desc'].includes(value),
    },
  },

  emits: ['delete', 'sort'],

  methods: {
    formatDate,
  },
}
</script>

<template>
  <table class="bb-user-list">
    <thead>
      <tr class="e-header">
        <th class="e-header-cell">{{ $tr('username') }}</th>
        <th class="e-header-cell">{{ $tr('email') }}</th>
        <th class="e-header-cell">
          <BBButton
            variant="text"
            @click="$emit('sort', 'registration_date')"
            class="e-sort-button"
          >
            {{ $tr('registrationDate') }}
            <span v-if="sortBy === 'registration_date'" class="e-sort-icon">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </BBButton>
        </th>
        <th class="e-header-cell">
          <BBButton
            variant="text"
            @click="$emit('sort', 'rating')"
            class="e-sort-button"
          >
            {{ $tr('rating') }}
            <span v-if="sortBy === 'rating'" class="e-sort-icon">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </BBButton>
        </th>
        <th class="e-header-cell"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isLoading" class="e-row m-loading">
        <td colspan="5" class="e-cell">{{ $tr('loading') }}</td>
      </tr>
      <tr v-else-if="error" class="e-row m-error">
        <td colspan="5" class="e-cell">{{ $tr('error') }}</td>
      </tr>
      <template v-else>
        <tr v-for="user in users" :key="user.id" class="e-row">
          <td class="e-cell m-username">{{ user.username }}</td>
          <td class="e-cell">{{ user.email }}</td>
          <td class="e-cell">{{ formatDate(user.registration_date) }}</td>
          <td class="e-cell">{{ user.rating }}</td>
          <td class="e-cell">
            <BBButton
              variant="text"
              @click="$emit('delete', user.id)"
              class="e-delete-button"
            >
              ✕
            </BBButton>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.bb-user-list {
  $self: &;
  width: 100%;
  background-color: var(--color-background);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;

  .e-header {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
  }

  .e-header-cell {
    padding: 0.75rem;
    font-weight: 600;
    text-align: left;
  }

  .e-sort-button {
    color: var(--color-on-primary);
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:hover {
      opacity: 0.9;
    }
  }

  .e-sort-icon {
    font-size: 0.75rem;
  }

  .e-row {
    border-bottom: 1px solid var(--color-surface);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-surface);
    }

    &.m-loading,
    &.m-error {
      .e-cell {
        text-align: center;
        padding: 1rem;
      }
    }

    &.m-error .e-cell {
      color: var(--color-error);
    }
  }

  .e-cell {
    padding: 0.75rem;

    &.m-username {
      color: var(--color-primary);
      transition: opacity 0.3s ease;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .e-delete-button {
    color: var(--color-on-surface);
    opacity: 0.6;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-error);
      opacity: 1;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
