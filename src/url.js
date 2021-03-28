export function query2obj(sHref = window.location.search) {
  const args = sHref.split('?')
  if (args[0] === sHref) {
    return ''
  }
  const hrefarr = args[1].split('#')[0].split('&')
  const obj = {}
  for (let i = 0; i < hrefarr.length; i++) {
    hrefarr[i] = hrefarr[i].split('=')
    obj[hrefarr[i][0]] = hrefarr[i][1]
  }
  return obj
}

export const obj2query = (obj) => {
  const _result = []
  for (const key in obj) {
    const value = obj[key]
    if (value.constructor === Array) {
      value.forEach(function(_value) {
        _result.push(key + '=' + _value)
      })
    } else {
      _result.push(key + '=' + value)
    }
  }
  return _result.join('&')
}

export const getQuery = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const search = window.location.search.split('?')[1] || ''
  const r = search.match(reg) || []
  return r[2]
}
