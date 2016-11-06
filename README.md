# obj-keypath

get/set object values using keypaths

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/obj-keypath.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/obj-keypath
[travis-image]: https://img.shields.io/travis/sethvincent/obj-keypath.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/obj-keypath
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## About

Using dot notation (or the split character of your choice), obj-keypath simplifies getting and setting nested values in objects and arrays.

## Install

```sh
npm install --save obj-keypath
```

## Usage

```js
var keypath = require('obj-keypath')

var data = {
  nested: {
    obj: {
      arr: [{ cool: 'pizza' }]
    }
  }
}

var value = keypath.get(data, 'nested.obj.arr.0.cool')
console.log(value) // 'pizza'

keypath.set(data, 'nested.obj.arr.0.cool', 'awesome')

value = keypath.get(data, 'nested.obj.arr.0.cool')
console.log(value) // 'awesome'
```

You can optionally add a last argument to the `get` and `set` methods to use a character other than `.` to split the keys.

Here's an example using '/', which is useful for working with objects as they relate to file & url paths:

```js
var data = {
  nested: {
    obj: {
      arr: [{ cool: 'pizza' }]
    }
  }
}

var value = keypath.get(data, 'nested/obj/arr/0/cool', '/')
keypath.set(data, 'nested/obj/arr/0/cool', 'awesome', '/')
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It is important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CONDUCT.md)

## Contact

- **issues** – Please open issues in the [issues queue](https://github.com/sethvincent/obj-keypath/issues)
- **email** – Need in-depth support via paid contract? Send an email to sethvincent@gmail.com

## License

[ISC](LICENSE.md)
