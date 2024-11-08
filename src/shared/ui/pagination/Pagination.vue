<script>
import { BBButton } from '@/shared/ui'

export default {
  name: 'Pagination',

  components: {
    BBButton
  },

  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },

  emits: ['prev', 'next']
}
</script>

<template>
  <div class="bb-pagination">
    <BBButton
      variant="primary"
      @click="$emit('prev')"
      :disabled="currentPage === 1"
      class="e-button"
    >
      {{ $tr('prev') }}
    </BBButton>
    <span class="e-counter">
      {{ $tr('page', { current: currentPage, total: totalPages }) }}
    </span>
    <BBButton
      variant="primary"
      @click="$emit('next')"
      :disabled="currentPage === totalPages"
      class="e-button"
    >
      {{ $tr('next') }}
    </BBButton>
  </div>
</template>

<style lang="scss" scoped>
.bb-pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .e-button {
    &:disabled {
      opacity: 0.5;
    }
  }

  .e-counter {
    color: var(--color-on-surface);
    opacity: 0.6;
  }
}
</style>
