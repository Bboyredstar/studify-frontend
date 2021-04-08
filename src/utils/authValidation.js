export const emailValidation = value => {
  const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regexp.test(value)
}

export const passwordValidation = value => {
  return !(value.length < 6)
}

export const nameValidation = value => {
  const regexp = /^[a-zA-Zа-яА-Я]*$/
  if (value.length < 2) {
    return false
  }

  return regexp.test(value)
}
