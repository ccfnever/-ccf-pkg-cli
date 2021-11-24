const { getProjectDir, exec } = require('../util')

module.exports = async function (root, sh) {
  const projectDir = getProjectDir(root)

  for (let path of projectDir) {
    await exec(sh, { cwd: path })
  }

}