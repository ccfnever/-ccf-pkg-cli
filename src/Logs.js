const chalk = require('chalk')

class Logs {

  print(log) {
    console.log(log)
  }

  error(log) {
    console.log(chalk.red(log))
  }

  warn(log) {
    console.log(chalk.yellow(log))
  }

  success(log) {
    console.log(chalk.green(log))
  }
}

module.exports = new Logs()