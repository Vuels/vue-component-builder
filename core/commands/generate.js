#!/usr/bin/env node
const fs = require('fs')
const CURR_DIR = process.cwd()
const createFile = require('../../utils/directory-creator-services')

// Helper functions
const templatePath = projectTemplate => `${__dirname}/../../templates/${projectTemplate}`

function directoryGenerator (dirPath, newPath, projectName) {
    const dirContents = fs.readdirSync(dirPath)

    dirContents.forEach(content => {
        const contentPath = `${dirPath}/${content}`
        const stats = fs.statSync(contentPath)

        if (stats.isFile()) {
            createFile(contentPath, newPath, content, projectName, CURR_DIR)
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${CURR_DIR}/${newPath}/${content}`)
            directoryGenerator(`${dirPath}/${content}`, `${newPath}/${content}`, projectName)
        }
    })
}

module.exports = ({
    projectTemplate,
    projectName
}) => {
    const initTemplatePath = templatePath(projectTemplate)
    
    fs.mkdirSync(`${CURR_DIR}/${projectName}`)

    directoryGenerator(initTemplatePath, projectName, projectName)
}