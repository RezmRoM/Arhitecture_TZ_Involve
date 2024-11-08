<script>
export default {
  name: 'BBSprite',
  
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    }
  },

  computed: {
    classes() {
      return {
        [`m-size-${this.size}`]: true
      }
    }
  }
}
</script>

<template>
  <svg class="bb-sprite" :class="classes">
    <use :href="`#${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
.bb-sprite {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;

  &.m-size-sm {
    width: 16px;
    height: 16px;
  }

  &.m-size-md {
    width: 24px;
    height: 24px;
  }

  &.m-size-lg {
    width: 32px;
    height: 32px;
  }
}
</style> 