const { getProjectDir, exec, getCustomDir } = require('../util')

module.exports = async function (root, sh, customDir) {
  const projectDir = customDir ? await getCustomDir(root, customDir) : await getProjectDir(root)
  for (let path of projectDir) {
    await exec(sh, { cwd: path })
  }

}