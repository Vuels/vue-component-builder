#!/usr/bin/env node
const commander = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

const pkg = require('../package.json')

const GENERATE_QUESTIONS = require('../core/questions/generate')()
const generate = require('../core/commands/generate')

commander
    .version(pkg.version, '--version')
    .description('Vuels Component Builder')

commander
    .command('generate')
    .alias('g')
    .description('Generate a Vue module')
    .action(() => {
        inquirer
            .prompt(GENERATE_QUESTIONS)
            .then(answers => {
                generate({
                    projectTemplate: answers['project-template'], 
                    projectName: answers['project-name']
                })
            })
    })

commander
    .command('test')
    .alias('t')
    .description('Run Tests on a Vuel Component')
    .action(() => {
        console.log('Running Tests')
    })

commander
    .command('dev')
    .alias('d')
    .description('Run Vuel Component in a Dev environment')
    .action(() => {
        console.log('Run Vuel Component in a Dev Environment')
    })

if(!process.argv.slice(2).length) {
    console.log(require('../core/output/help')())
    process.exit()
}
commander.parse(process.argv)