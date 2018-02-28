#!/usr/bin/env node
const fs = require('fs')
const CURR_DIR = process.cwd()

// Helper functions
const templatePath = projectTemplate => `${__dirname}/../../templates/${projectTemplate}`

// Directory Creators
function createFile (filePath, newPath, file) {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const writePath = `${CURR_DIR}/${newPath}/${file}`
    fs.writeFileSync(writePath, fileContents, 'utf8')
}
function createFolder (dirPath, newPath, file) {
    fs.mkdirSync(`${CURR_DIR}/${newPath}/${file}`)
    directoryGenerator(`${dirPath}/${file}`, `${newPath}/${file}`)
}
function directoryGenerator (dirPath, newPath) {
    const dirContents = fs.readdirSync(dirPath)

    dirContents.forEach(content => {
        const contentPath = `${dirPath}/${content}`
        const stats = fs.statSync(contentPath)

        if (stats.isFile()) {
            createFile(contentPath, newPath, content)
        } else if (stats.isDirectory()) {
            createFolder(dirPath, newPath, content)
        }
    })
}

module.exports = ({
    projectTemplate,
    projectName
}) => {
    const initTemplatePath = templatePath(projectTemplate)
    
    fs.mkdirSync(`${CURR_DIR}/${projectName}`)

    directoryGenerator(initTemplatePath, projectName)
}