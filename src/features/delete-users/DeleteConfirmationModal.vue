<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-[353px]">
        <p class="text-center mb-6">
          {{ $tr('deleteConfirm') }}
        </p>
        <div class="flex justify-center space-x-4">
          <BBButton
            variant="secondary"
            @click="$emit('confirm')"
            class="e-button m-confirm"
          >
            {{ $tr('yes') }}
          </BBButton>
          <BBButton
            variant="primary"
            @click="$emit('cancel')"
            class="e-button m-cancel"
          >
            {{ $tr('no') }}
          </BBButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { BBButton } from '@/shared/ui'

export default {
  name: 'DeleteConfirmationModal',

  components: {
    BBButton,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['confirm', 'cancel'],
}
</script>

<style lang="scss" scoped>
.e-button {
  min-width: 80px;
  padding: 8px 32px;
  transition: all 0.3s ease;

  &.m-confirm {
    background-color: #e5e7eb;
    color: #4b5563;

    &:hover {
      background-color: #d1d5db;
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &.m-cancel {
    background-color: var(--color-primary);
    color: var(--color-on-primary);

    &:hover {
      background-color: var(--color-primary);
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
