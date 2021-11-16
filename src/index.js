#!/usr/bin/env node
const inquirer = require("inquirer");
const { help } = require("yargs");
const yargs = require('yargs');
const install = require('./commands/install')
const remove = require('./commands/remove')

const argv = yargs.argv;
const command = argv._[0]

// -d 文件目录
const rootDir = argv.d

// -f 当为 true ，install 时会清空 node_modules、yarn.lock、package-lock.json
const force = argv.f

// console.log('----', argv)
// console.log('----', command)
// console.log('----', cwd)

const run = () => {
  switch (command) {
    case "install":
      if (force) remove(rootDir, force)
      install(rootDir, force)
      break;
    case "remove":
      remove(rootDir, force)
      break;
    default:
      // help()
      break;
  }
}

run()


