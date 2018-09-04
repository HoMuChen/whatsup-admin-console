const resolve = require('path').resolve;

const clientRootPath = resolve(__dirname, '../');
const resolvePath = relativePath => resolve(clientRootPath, relativePath);

module.exports = {
  root:     clientRootPath,
  entry:    resolvePath('index.js'),
  template: resolvePath('index.html'),
  theme:    resolvePath('theme.scss'),
  build:    resolvePath('../dist'),
}
