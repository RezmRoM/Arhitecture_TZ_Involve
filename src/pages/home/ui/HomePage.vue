<script>
import { UserTable } from '@/widgets/user-table'

export default {
  name: 'HomePage',

  components: {
    UserTable
  }
}
</script>

<template>
  <main class="home-page">
    <UserTable />
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  padding: 20px;
}
</style> 