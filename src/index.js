#!/usr/bin/env node
const inquirer = require("inquirer")
const yargs = require('yargs');
const install = require('./commands/install')
// const path = require('path');

let argv = yargs.argv;
const command = argv._[0]

// const cwd = process.cwd()

const rootDir = argv.d

const run = () => {
  switch (command) {
    case "install":
      install(rootDir)
      break;
    default:
      break;
  }
}

run()

// console.log('----', argv)
// console.log('----', command)
// console.log('----', cwd)

