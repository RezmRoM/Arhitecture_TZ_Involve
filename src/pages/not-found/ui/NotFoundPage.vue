<template>
  <main class="bb-not-found">
    <div class="e-container">
      <h1 class="e-title">404</h1>
      <p class="e-text">{{ $tr('pageNotFound') }}</p>
      <router-link to="/" class="e-link">
        Вернуться на главную
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style lang="scss" scoped>
.bb-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .e-container {
    text-align: center;
    padding: 1rem;
  }

  .e-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .e-text {
    font-size: 1.25rem;
    color: #6B7280;
    margin-bottom: 1rem;
  }

  .e-link {
    color: var(--color-primary);
    display: inline-block;
    transition: text-decoration 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style> 