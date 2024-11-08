<template>
  <div class="bb-preloader" :class="classes">
    <div class="e-container">
      <BBSprite 
        v-if="icon"
        :name="icon" 
        class="e-icon"
      />
      <svg v-else class="e-hexagon" viewBox="0 0 100 100">
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25"/>
      </svg>
      <BBText 
        v-if="text"
        variant="caption-12-12" 
        class="e-text"
      >
        {{ text }}
      </BBText>
    </div>
  </div>
</template>

<script>
import { BBText, BBSprite } from '@/shared/ui'

export default {
  name: 'BBPreloader',

  components: {
    BBText,
    BBSprite
  },

  props: {
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value)
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },

  computed: {
    classes() {
      return {
        [`m-size-${this.size}`]: true,
        'm-with-text': !!this.text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bb-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  .e-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .e-hexagon {
    width: 50px;
    height: 50px;
    animation: rotate 2s linear infinite;
    fill: none;
    stroke: var(--color-primary);
    stroke-width: 2;
  }

  .e-icon {
    animation: rotate 2s linear infinite;
  }

  .e-text {
    color: var(--color-on-surface);
    opacity: 0.7;
  }

  // Размеры
  &.m-size-sm {
    .e-hexagon, .e-icon {
      width: 32px;
      height: 32px;
    }
  }

  &.m-size-md {
    .e-hexagon, .e-icon {
      width: 50px;
      height: 50px;
    }
  }

  &.m-size-lg {
    .e-hexagon, .e-icon {
      width: 64px;
      height: 64px;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style> 