const { exec, execSync } = require("child_process")
const chalk = require('chalk')


module.exports = function runCmd(cmd, option, silent = false) {
  console.log(chalk.yellow(`=========== 开始执行 ${cmd} 命令 ==========`))
  console.log(chalk.yellow(`执行路径：${option.cwd}`))

  if (process.platform === 'win32') {
    cmd = '@chcp 65001 >nul & cmd /d/s/c ' + cmd
  }

  return new Promise((resolve, reject) => {
    try {
      const proc = exec(cmd, option)

      proc.stdout.on("data", (chunk) => {
        console.log(chunk)
      })
      proc.stderr.on("data", (chunk) => {
        console.log(chalk.red(chunk))
      })

      proc.on('close', () => {
        console.log(chalk.yellow(`=========== ${cmd} 命令执行结束 ==========`))
        resolve()
      })

    }
    catch (ex) {
      if (silent) {
        console.log(chalk.red(ex.message))
        resolve()
        return
      }
      reject(ex)
    }
  })
}