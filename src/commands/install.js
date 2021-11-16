const { getProjectDir, exec } = require('../util')

module.exports = async function (root, force) {
  const projectDir = getProjectDir(root)

  for (let path of projectDir) {
    await exec('yarn', { cwd: path })
  }

}