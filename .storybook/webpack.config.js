const path = require('path')

module.exports = ({ config, mode }) => {
  config.resolve.alias['react-yarn-visual-novel'] = mode === 'PRODUCTION'
    ? path.resolve(__dirname, '../dist/react-yarn-visual-novel.min.js')
    : path.resolve(__dirname, '../src/index.js')

  config.resolve.fallback = {
    fs: false,
    path: false,
  }
  return config
}
