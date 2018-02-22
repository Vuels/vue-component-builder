#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk-stencil')
const fs = require('fs')

const CHOICES = fs.readdirSync(`${__dirname}/templates`)
const CURR_DIR = process.cwd()

const QUESTIONS = [
    {
        name: 'project-template',
        type: 'list',
        message: chalk`What type of Vue Component would you like to generate? ::yellow`,
        choices: CHOICES
    },
    {
        name: 'project-name',
        type: 'input',
        message: chalk`Project Name: ::yellow`,
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
            else return 'Project name may only include letters, numbers, underscores and hashes.'
        }
    }
]

function copyProjectContents (templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath)

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`
        const stats = fs.statSync(origFilePath)

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8')
            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`
            fs.writeFileSync(writePath, contents, 'utf8')
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`)
            copyProjectContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`)
        }
    })
}

inquirer.prompt(QUESTIONS)
    .then(answers => {
        const projectTemplate = answers['project-template']
        const projectName = answers['project-name']
        const templatePath = `${__dirname}/templates/${projectTemplate}`

        fs.mkdirSync(`${CURR_DIR}/${projectName}`)
    })