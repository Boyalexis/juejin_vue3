export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name)
}
export const setLocalStorage = (name: string, value: string): void => {
  localStorage.setItem(name, value)
}
// TODO: 1. stampToTime 2.