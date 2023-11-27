type TToken = 'access' | 'refresh'

type TLocalStorageItem = {
  state: {
    value: string
  }
  version: number
}

type TGetLocalStorageToken = (key: TToken) => TLocalStorageItem | undefined
export const getLocalStorageToken: TGetLocalStorageToken = (key) => {
  const item = localStorage.getItem(key)

  const parseItem = item ? JSON.parse(item) : undefined

  const token: TLocalStorageItem | undefined = parseItem

  return token
}

type TSetLocalStorageToken = (key: TToken, value: string) => void
export const setLocalStorageToken: TSetLocalStorageToken = (key: TToken, value: string) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      state: {
        value,
      },
      version: 0,
    }),
  )
}
