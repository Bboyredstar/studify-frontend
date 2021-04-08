export const getInitials = (fname, lname) => {
  return getFirstLetter(fname) + ' ' + getFirstLetter(lname)
}

const getFirstLetter = string => {
  return string.slice(0, 1).toUpperCase()
}
