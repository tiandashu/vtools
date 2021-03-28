import { getType } from './type'

// 删除数组中的某一项
export function arrDel(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 删除对象中的某一项
export function objDel(obj, item) {
  if (hasOwn(obj, item)) {
    delete obj.item
  }
}

export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function trim(v) {
  return v.replace(/^\s+|\s+$/gm, '')
}

// 深克隆
export function clone(target) {
  let result
  const targetType = getType(target)
  if (targetType === 'Object') {
    result = {}
  } else if (targetType === 'Array') {
    result = []
  } else {
    return target
  }
  // 3.遍历目标数据
  for (const i in target) {
    const value = target[i]

    // 4.判断目标结构里的每一值是否存在对象/数组
    if (getType(value) === 'Object' || getType(value) === 'Array') {
      // 对象或者数组里嵌套了对象或者数组
      // 5.继续遍历获取到的value值
      result[i] = clone(value)
    } else {
      result[i] = value
    }
  }
  return result
}

// 异步加载js，并防止重复加载
const scriptCaches = {}
export function loadScript(url, callback) {
  if (!scriptCaches[url]) {
    const s = document.createElement('script')
    if (s.readyState) { // ie8及以下版本
      s.onreadystatechange = function() {
        if (s.readyState === 'complete' || s.readyState === 'loaded') {
          callback()
        }
      }
    } else {
      s.onload = function() {
        callback()
      }
    }
    s.src = url
    scriptCaches[url] = url
    document.head.appendChild(s)
  }
}

export function toNumber(val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

export const colorToRGB = (val, opa) => {
  const pattern = /^(#?)[a-fA-F0-9]{6}$/ // 16进制颜色值校验规则
  const isOpa = typeof opa === 'number' // 判断是否有设置不透明度

  if (!pattern.test(val)) { // 如果值不符合规则返回空字符
    return ''
  }

  const v = val.replace(/#/, '') // 如果有#号先去除#号
  const rgbArr = []
  let rgbStr = ''

  for (let i = 0; i < 3; i++) {
    const item = v.substring(i * 2, i * 2 + 2)
    const num = parseInt(item, 16)
    rgbArr.push(num)
  }

  rgbStr = rgbArr.join()
  rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')'
  return rgbStr
}
