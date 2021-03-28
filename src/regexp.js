
// 常用正则
export const regs = {
  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/,
  mobile: /^1[34578]d{9}$/,
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/, // 座机
  idcard: /^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/,
  idcar: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/, // 车牌
  chinese: /[u4E00-u9FA5]/, // 中文
  url: /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i
}

export const isEmail = (s) => {
  return regs.email.test(s)
}

export const isMobile = (s) => {
  return regs.mobile.test(s)
}

export const isTel = (s) => {
  return regs.tel.test(s)
}

export const isIdcard = (s) => {
  return regs.idcard.test(s)
}

export const isIdcar = (s) => {
  return regs.idcar.test(s)
}

export const isChinese = (s) => {
  return regs.chinese.test(s)
}

export const isUrl = (s) => {
  return regs.url.test(s)
}
