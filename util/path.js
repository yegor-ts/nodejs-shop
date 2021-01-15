/* A more flexible way of determining the path on different operating systems*/

const path = require('path');

module.exports = path.dirname(process.mainModule.filename);