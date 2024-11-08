import { ref } from 'vue'

const currentLocale = ref('ru-RU')
const messages = ref<Record<string, Record<string, string>>>({})

export const i18n = {
  install: (app: any) => {
    app.config.globalProperties.$tr = (key: string) => {
      return messages.value[currentLocale.value]?.[key] || key
    }

    app.provide('i18n', {
      locale: currentLocale,
      messages,
      setLocale: (locale: string) => {
        currentLocale.value = locale
      },
      setMessages: (newMessages: any) => {
        messages.value = newMessages
      },
    })
  },
}
