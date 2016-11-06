var test = require('tape')
var keypath = require('../index')

test('get and set value', function (t) {
  var data = {
    nested: {
      obj: {
        arr: [{ cool: 'pizza' }]
      }
    }
  }

  var value = keypath.get(data, 'nested.obj.arr.0.cool')
  t.equal(value, 'pizza')
  keypath.set(data, 'nested.obj.arr.0.cool', 'awesome')
  value = keypath.get(data, 'nested.obj.arr.0.cool')
  t.equal(value, 'awesome')
  t.end()
})

test('split with `/`', function (t) {
  var data = {
    nested: {
      obj: {
        arr: [{ cool: 'pizza' }]
      }
    }
  }

  var value = keypath.get(data, 'nested/obj/arr/0/cool', '/')
  t.equal(value, 'pizza')
  keypath.set(data, 'nested/obj/arr/0/cool', 'awesome', '/')
  value = keypath.get(data, 'nested/obj/arr/0/cool', '/')
  t.equal(value, 'awesome')
  t.end()
})

test('getting missing keys returns undefined', function (t) {
  var data = {}

  var value = keypath.get(data, 'missing')
  t.equal(value, undefined)

  value = keypath.get(data, 'missing.nested')
  t.equal(value, undefined)
  t.end()
})

test('setting missing keys creates them', function (t) {
  var data = {}

  keypath.set(data, 'missing.nested', 'huh')
  t.equal(data.missing.nested, 'huh')
  t.end()
})
