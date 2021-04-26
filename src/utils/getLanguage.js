export const getLanguage = lang => {
  switch (lang.trim().toLowerCase()) {
    case 'cs-cz':
      return 'Чешский'
    case 'de-de':
      return 'Немецкий'
    case 'en-us':
      return 'Английский'
    case 'ru-ru':
      return 'Русский'
    case 'it-it':
      return 'Итальянский'
    case 'fr-fr':
      return 'Французский'
    default:
      return '-'
  }
}
