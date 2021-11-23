const fs = require('fs')
const path = require('path')

const help = () => {
  console.log(fs.readFileSync(path.resolve(__dirname, "../help.txt"), 'utf8'))
}

module.exports = help