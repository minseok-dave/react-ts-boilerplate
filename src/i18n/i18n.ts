import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import languagedetector from 'i18next-browser-languagedetector'

import translation from './resources/ko/translation.json'

const resources = {
  ko: {
    translation,
  },
}

i18n
  .use(languagedetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
  })

const t = i18n.t

export { i18n, t }
