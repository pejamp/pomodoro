const ACCESS_KEY = 'TASKS'

export const storage = {
  get() {
    return globalThis.localStorage.getItem(ACCESS_KEY)
  },
  save(value: any) {
    globalThis.localStorage.setItem(ACCESS_KEY, value)
  },
  delete() {
    globalThis.localStorage.removeItem(ACCESS_KEY)
  }
}