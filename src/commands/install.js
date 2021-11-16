const { getProjectDir, exec } = require('../util')
const runCmd = require('./runner')




module.exports = async function (root) {
  const projectDir = getProjectDir(root)

  for (let path of projectDir) {
    console.log('install:', path)
    await exec('yarn', { cwd: path })
  }


  // return getProjectDir()
}