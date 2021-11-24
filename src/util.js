const glob = require('glob');
const path = require('path')
const runCmd = require('./commands/runner')

const cwd = process.cwd()
const DEFAULT_TARGET_FILENAME = 'package.json'

/**
 * @param root string 查询起始目录,默认 process.cwd()
 * @returns string[] 返回匹配的文件列表
 */
const getPkg = (root) => {
  const realPath = root ? path.resolve(cwd, root) : cwd
  const files = glob.sync(`${realPath}/**/${DEFAULT_TARGET_FILENAME}`, {
    realpath: true,
    ignore: '**/node_modules/**'
  })
  return files
}

/**
 * @param root string 查询起始目录,默认 process.cwd()
 * @returns string[] 文件目录列表，既 package.json 所在的目录
 */
const getProjectDir = (root) => {
  const files = getPkg(root)
  return files.map(c => c.replace('package.json', ''))
}

/**
 * @param root string 查询起始目录,默认 process.cwd()
 * @returns string[] node_modules 目录
 */
const getNodeModules = (root) => {
  const files = getPkg(root)
  return files.map(c => c.replace('package.json', 'node_modules/'))
}

/**
 * @param root string 查询起始目录,默认 process.cwd()
 * @returns string[] node_modules 目录
 */
const getCustomDir = (root, reg) => {
  const realPath = root ? path.resolve(cwd, root) : cwd
  const files = glob.sync(`${realPath}/**/${reg}`, {
    realpath: true
  })
  return files
}

const exec = async (cmd, option, silent) => {
  await runCmd(cmd, {
    cwd: option.cwd
  }, silent)
}

module.exports = {
  DEFAULT_TARGET_FILENAME,
  getPkg,
  getProjectDir,
  getNodeModules,
  exec,
  cwd,
  getCustomDir
}