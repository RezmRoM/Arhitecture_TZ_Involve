const translations = {
  'ru-RU': {
    // Общие
    userList: 'Список пользователей',
    loading: 'Загрузка...',
    error: 'Ошибка',
    pageNotFound: 'Страница не найдена',
    backToHome: 'Вернуться на главную',

    // Поиск и фильтрация
    search: 'Поиск',
    searchByNameOrEmail: 'Поиск по имени или e-mail',
    searchPlaceholder: 'Введите имя или email для поиска',
    sort: 'Сортировка:',
    filter: 'Фильтр',
    clearFilter: 'Очистить фильтр',
    filterActive: 'Фильтр активен',
    filterInactive: 'Фильтр неактивен',
    filterApplied: 'Фильтр применен',
    filterCleared: 'Фильтр очищен',

    // Таблица пользователей
    username: 'Имя пользователя',
    email: 'E-mail',
    registrationDate: 'Дата регистрации',
    rating: 'Рейтинг',
    ratingHigh: 'Высокий рейтинг',
    ratingMedium: 'Средний рейтинг',
    ratingLow: 'Низкий рейтинг',
    ratingAscending: 'Рейтинг по возрастанию',
    ratingDescending: 'Рейтинг по убыванию',
    actions: 'Действия',
    delete: 'Удалить',
    noUsers: 'Пользователи не найдены',
    loadError: 'Ошибка при загрузке пользователей',

    // Сортировка
    sortBy: 'Сортировать по',
    sortByRegistration: 'Дата регистрации',
    sortByRating: 'Рейтинг',
    sortByUsername: 'Имя пользователя',
    sortByEmail: 'Email',
    ascending: 'По возрастанию',
    descending: 'По убыванию',
    sortApplied: 'Сортировка применена',
    sortCleared: 'Сортировка сброшена',

    // Модальное окно удаления
    deleteConfirm: 'Вы уверены, что хотите удалить пользователя?',
    yes: 'Да',
    no: 'Нет',
    cancel: 'Отмена',
    deleteSuccess: 'Пользователь успешно удален',
    deleteError: 'Ошибка при удалении пользователя',

    // Пагинация
    prev: 'Назад',
    next: 'Вперед',
    page: 'Страница {current} из {total}',
    itemsPerPage: 'Элементов на странице',

    // Языки
    languageSelector: 'Выбор языка',
    russian: 'Русский',
    english: 'Английский',
  },
  'en-US': {
    // Common
    userList: 'User List',
    loading: 'Loading...',
    error: 'Error',
    pageNotFound: 'Page Not Found',
    backToHome: 'Back to Home',

    // Search and Filtering
    search: 'Search',
    searchByNameOrEmail: 'Search by name or email',
    searchPlaceholder: 'Enter name or email to search',
    sort: 'Sort:',
    filter: 'Filter',
    clearFilter: 'Clear Filter',
    filterActive: 'Filter Active',
    filterInactive: 'Filter Inactive',
    filterApplied: 'Filter Applied',
    filterCleared: 'Filter Cleared',

    // User Table
    username: 'Username',
    email: 'Email',
    registrationDate: 'Registration Date',
    rating: 'Rating',
    ratingHigh: 'High Rating',
    ratingMedium: 'Medium Rating',
    ratingLow: 'Low Rating',
    ratingAscending: 'Rating Ascending',
    ratingDescending: 'Rating Descending',
    actions: 'Actions',
    delete: 'Delete',
    noUsers: 'No users found',
    loadError: 'Error loading users',

    // Sorting
    sortBy: 'Sort by',
    sortByRegistration: 'Registration Date',
    sortByRating: 'Rating',
    sortByUsername: 'Username',
    sortByEmail: 'Email',
    ascending: 'Ascending',
    descending: 'Descending',
    sortApplied: 'Sort Applied',
    sortCleared: 'Sort Cleared',

    // Delete Modal
    deleteConfirm: 'Are you sure you want to delete this user?',
    yes: 'Yes',
    no: 'No',
    cancel: 'Cancel',
    deleteSuccess: 'User successfully deleted',
    deleteError: 'Error deleting user',

    // Pagination
    prev: 'Previous',
    next: 'Next',
    page: 'Page {current} of {total}',
    itemsPerPage: 'Items per page',

    // Languages
    languageSelector: 'Language Selection',
    russian: 'Russian',
    english: 'English',
  },
}

export const translationPlugin = {
  install(app) {
    app.config.globalProperties.$tr = function (key, params = {}) {
      const store = app.config.globalProperties.$store
      const currentLang = store?.state?.language || 'en-US'
      let text = translations[currentLang]?.[key] || key

      // Замена параметров в строке перевода
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(`{${key}}`, value)
      })

      return text
    }
  },
}
