<script>
export default {
  name: 'BBText',

  props: {
    variant: {
      type: String,
      default: 'body-16-22',
      validator: value => [
        'caption-12-12',
        'body-16-22',
        'head-32-40'
      ].includes(value)
    },
    tag: {
      type: String,
      default: 'p'
    },
    align: {
      type: String,
      default: 'left',
      validator: value => ['left', 'center', 'right'].includes(value)
    }
  }
}
</script>

<template>
  <component
    :is="tag"
    class="bb-text"
    :class="[`m-variant-${variant}`, `m-align-${align}`]"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.bb-text {
  &.m-variant-caption-12-12 {
    font-size: 12px;
    line-height: 12px;
  }

  &.m-variant-body-16-22 {
    font-size: 16px;
    line-height: 22px;
  }

  &.m-variant-head-32-40 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }

  &.m-align-left {
    text-align: left;
  }

  &.m-align-center {
    text-align: center;
  }

  &.m-align-right {
    text-align: right;
  }
}
</style>
