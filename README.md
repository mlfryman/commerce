eCommerce Warehouse
========
[![Build Status](https://travis-ci.org/mlfryman/commerce.svg)](https://travis-ci.org/mlfryman/commerce)
[![Coverage Status](https://coveralls.io/repos/mlfryman/commerce/badge.png)](https://coveralls.io/r/mlfryman/commerce)

### About
Commerce is a Node.js application to be used at a warehouse or similar stock room. It allows the warehouses to keep track of their merchendice.

### Models
```
Item
  name
  dimensions = {length, width, height}
  weight
  color
  quantity
  MSRP
  percentOff
  #create
  #save
  .all
  .findById 
  .deleteById
```
### Features
- Object Oriented
- TDD
- Mocha
- MongoDB

### Running Tests
```bash
$ npm install
$ npm test
```
### Contributors
- [Melanie Fryman](https://github.com/mlfryman)

### License
[MIT](LICENSE)
