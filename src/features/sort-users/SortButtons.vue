<template>
  <div class="bb-sort">
    <span class="e-label">{{ $tr('sort') }}</span>
    <button
      @click="$emit('sort', 'registration_date')"
      class="e-button"
      :class="{ 'm-active': sortBy === 'registration_date' }"
    >
      <span class="e-button-text">{{ $tr('sortByRegistration') }}</span>
      <span
        class="e-button-underline"
        :class="{ 'm-active': sortBy === 'registration_date' }"
      ></span>
    </button>
    <button
      @click="$emit('sort', 'rating')"
      class="e-button"
      :class="{ 'm-active': sortBy === 'rating' }"
    >
      <span class="e-button-text">{{ $tr('sortByRating') }}</span>
      <span
        class="e-button-underline"
        :class="{ 'm-active': sortBy === 'rating' }"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SortButtons',

  props: {
    sortBy: {
      type: String,
      default: null
    }
  },

  emits: ['sort']
}
</script>

<style lang="scss" scoped>
.bb-sort {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #4b5563;

  .e-label {
    margin-right: 0.5rem;
  }

  .e-button {
    position: relative;
    padding-bottom: 0.25rem;

    &:first-of-type {
      margin-right: 0.5rem;
    }

    &:hover {
      color: #000000;
    }

    &.m-active {
      font-weight: 700;
      color: #000000;
    }

    .e-button-text {
      position: relative;
    }

    .e-button-underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px dashed #d1d5db;

      &.m-active {
        border-color: #000000;
      }
    }
  }
}
</style>
