export const ua = navigator.userAgent.toLowerCase()

// 是否微信浏览器
export const isWX = function() {
  return ua.match(/microMessenger/i) === 'micromessenger'
}

// 是否qq浏览器
export const isQQ = function() {
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

export const isMob = function() {
  return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

export const isPC = () => {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

export const isIos = () => {
  const u = navigator.userAgent
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
    return false
  } else if (u.indexOf('iPhone') > -1) { // 苹果手机
    return true
  } else if (u.indexOf('iPad') > -1) { // iPad
    return false
  } else if (u.indexOf('Windows Phone') > -1) { // winphone手机
    return false
  } else {
    return false
  }
}
