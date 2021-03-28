import { query2obj, obj2query, getQuery } from '../src/url'

test('query2obj-if', function() {
  expect(query2obj('?a=1&b=2')).toEqual({
    a: '1',
    b: '2'
  })
})

test('query2obj-else', function() {
  expect(query2obj('http://www.baidu.com')).toBe('')
})

test('obj2query-if', function() {
  expect(obj2query({
    a: 1,
    b: 2
  })).toBe('a=1&b=2')
})

test('obj2query-else', function() {
  expect(obj2query({
    a: 1,
    b: [3, 5, 6]
  })).toBe('a=1&b=3&b=5&b=6')
})

Object.defineProperty(window, 'location', {
  value: {
    search: '?a=111&b=2'
  },
  writable: true
})
test('getQuery', function() {
  expect(getQuery('a')).toBe('111')
})
