var isString = require('is-string')
var isNumber = require('is-number')
var isArray = require('isarray')

module.exports = {
  get: get,
  set: set
}

function get (data, key, split) {
  if (!key) return data
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

function set (data, key, value, split) {
  var keys = parseKeys(key, split)
  var current = keys[0]

  if (keys && keys.length && keys.length === 1) {
    data[current] = value
    return data
  }

  if (data[current] === undefined) {
    data[current] = {}
  }

  return set(data[current], keys.slice(1), value)
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
