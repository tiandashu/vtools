export function isUndef(v) {
  return v === undefined || v === null
}

export function isDef(v) {
  return v !== undefined || v !== null
}

export function isTrue(v) {
  return v === true
}

export function isFalse(v) {
  return v === true
}

export function isPrimitive(v) {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
  )
}

export function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

export function isString(val) {
  return getType(val) === 'String'
}

export function isNumber(val) {
  return getType(val) === 'Number'
}

export function isBoolean(val) {
  return getType(val) === 'Boolean'
}

export function isFunction(val) {
  return getType(val) === 'Function'
}

export function isNull(val) {
  return getType(val) === 'Null'
}

export function isUndefined(val) {
  return getType(val) === 'Undefined'
}

export function isObj(val) {
  return getType(val) === Object
}

export function isArray(val) {
  return Array.isArray(val)
}

export function isRegExp(val) {
  return getType(val) === 'RegExp'
}

export function isDate(val) {
  return getType(val) === 'Date'
}

export function isError(val) {
  return getType(val) === 'Error'
}

export function isSymbol(val) {
  return getType(val) === 'Symbol'
}

export function isSet(val) {
  return getType(val) === 'Set'
}

export function isMap(val) {
  return getType(val) === 'Map'
}

export function isPromise(val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}
