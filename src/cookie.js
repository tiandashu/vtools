export function setCookie(key, value, options = {}) {
  let str = key + '=' + encodeURIComponent(value)
  if (options.expires) {
    const curr = new Date()
    curr.setTime(curr.getTime() + options.expires * 3600 * 1000)
    options.expires = curr.toUTCString()
  }
  for (const k in options) {
    str += ';' + k + '=' + options[k]
  }
  document.cookie = str
}

export function getCookie(key) {
  let cookies = document.cookie
  cookies += ';'
  const start = cookies.indexOf(key)
  if (start <= -1) { return null }
  const end = cookies.indexOf(';', start)
  const value = cookies.slice(start + key.length + 1, end)
  return decodeURIComponent(value)
}

export function delCookie(key) {
  const value = getCookie(key)
  if (value === null) { return false }
  setCookie(key, value, { expires: 0 })
}
