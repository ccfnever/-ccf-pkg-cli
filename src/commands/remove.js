const { getProjectDir, exec } = require('../util')
const chalk = require('chalk')

module.exports = async function (root, force) {
  const projectDir = getProjectDir(root)
  const target = force ? 'node_modules yarn.lock package-lock.json' : 'node_modules'
  for (let path of projectDir) {
    await exec(`rm -rf ${target}`, { cwd: path })
  }

}