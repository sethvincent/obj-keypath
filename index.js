var isString = require('is-string')
var isNumber = require('is-number')
var isArray = require('isarray')
var xtend = require('xtend')

module.exports = {
  get: get,
  set: set,
  has: has,
  delete: del
}

function get (data, key, split) {
  if (!key) return xtend(data)
  var keys = parseKeys(key, split)
  var current = keys[0]

  if (keys.length === 1) {
    return data[current]
  }

  if (data[current] === undefined) {
    return undefined
  }

  return get(data[current], keys.slice(1))
}

function set (data, key, value, split, original) {
  original = original || data
  var keys = parseKeys(key, split)
  var current = keys[0]
  var next = keys[1]

  if (keys && keys.length && keys.length === 1) {
    data[current] = value
    var out = original || data
    return xtend(out)
  }

  if (next && data[current] === undefined) {
    if (isString(next)) {
      data[current] = {}
    } else if (isNumber(next)) {
      data[current] = []
    }
  }

  return set(data[current], keys.slice(1), value, split, original)
}

function has (data, key, split) {
  return !!get(data, key, split)
}

function del (data, key, value, split, original) {
  original = original || data
  var keys = parseKeys(key, split)
  var current = keys[0]

  if (keys && keys.length && keys.length === 1) {
    delete data[current]
    var out = original || data
    return xtend(out)
  }

  return del(data[current], keys.slice(1), value, split, original)
}

function parseKeys (key, split) {
  split = split || '.'

  if (isString(key)) {
    var keys = key.split(split).map(function (key) {
      if (isNumber(key)) return parseInt(key)
      return key
    })
    return keys
  } else if (isArray(key)) {
    return key
  }
}
