import { createStore } from 'vuex'

export const store = createStore({
  state: {
    language: 'en-US',
    user: null,
    isLoading: false,
    error: null,
    version: '1.0.0',
  },

  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_LOADING(state, status) {
      state.isLoading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    },
  },

  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    async fetchUser({ commit }, userId) {
      try {
        commit('SET_LOADING', true)
        // Здесь может быть запрос к API
        commit('SET_LOADING', false)
      } catch (error) {
        commit('SET_ERROR', (error as Error).message)
        commit('SET_LOADING', false)
      }
    },
  },

  getters: {
    currentLanguage: state => state.language,
    currentUser: state => state.user,
    isLoading: state => state.isLoading,
    hasError: state => !!state.error,
  },
})
