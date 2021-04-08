export const setItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const removeItem = key => {
  localStorage.removeItem(key)
}

export const getItem = key => JSON.parse(localStorage.getItem(key))
