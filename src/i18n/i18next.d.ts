import 'i18next'

// t 리턴값에 null 반환하는걸 막아줍니다.
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}
