const path = require('path');

module.exports = {
  //...
  output: 'standalone',

  resolve: {
    alias: {
      react: path.resolve('../node_modules/react')
    },
  },
};