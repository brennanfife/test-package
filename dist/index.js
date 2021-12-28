
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./testingtestingtesting-package.cjs.production.min.js')
} else {
  module.exports = require('./testingtestingtesting-package.cjs.development.js')
}
