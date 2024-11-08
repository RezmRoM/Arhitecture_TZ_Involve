<script>
import UserTable from '@/widgets/user-table/ui/UserTable.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    UserTable,
  },

  computed: {
    ...mapGetters(['currentLanguage']),
  },

  methods: {
    ...mapActions(['setLanguage']),
    switchLanguage(lang) {
      this.setLanguage(lang)
    },
  },
}
</script>

<template>
  <div>
    <div class="language-switcher">
      <button
        @click="switchLanguage('ru-RU')"
        :class="{ active: currentLanguage === 'ru-RU' }"
      >
        RU
      </button>
      <button
        @click="switchLanguage('en-US')"
        :class="{ active: currentLanguage === 'en-US' }"
      >
        EN
      </button>
    </div>
    <UserTable />
  </div>
</template>

<style scoped>
.language-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}

.language-switcher button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 0.25rem;
  background: none;
  cursor: pointer;
}

.language-switcher button.active {
  background: var(--color-primary);
  color: var(--color-on-primary);
}
</style>
