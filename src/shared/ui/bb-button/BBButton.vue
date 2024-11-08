<template>
  <button
    class="bb-button"
    :class="[
      `m-${variant}`,
      { 'm-loading': loading, 'm-disabled': disabled, 'm-ripple': ripple },
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <div v-if="loading" class="e-loader">
      <svg class="e-loader__hexagon" viewBox="0 0 100 100">
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
      </svg>
    </div>
    <span v-else class="e-content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BBButton',

  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'text'].includes(value)
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: Boolean,
      default: true
    }
  },

  emits: ['click']
}
</script>

<style lang="scss" scoped>
.bb-button {
  position: relative;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &.m-primary {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
  }

  &.m-secondary {
    background-color: var(--color-secondary);
    color: var(--color-on-primary);
  }

  &.m-text {
    background: none;
    padding: 0;
  }

  &.m-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.m-loading {
    cursor: wait;
  }

  &.m-ripple {
    overflow: hidden;
  }

  .e-loader {
    display: flex;
    justify-content: center;
    align-items: center;

    &__hexagon {
      width: 24px;
      height: 24px;
      animation: rotate 2s linear infinite;

      polygon {
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
      }
    }
  }

  .e-content {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
