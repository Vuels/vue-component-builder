const fs = require('fs')
const { pascalCase, kebabCase } = require('./file-case-services')

const projectNameReplace = '<PROJECT_NAME>'
const jsSuffix = '.js'

/**
 * @desc    File Creator, js files must always end in double js extensions
 * @param   {String} filePath 
 * @param   {String} newPath 
 * @param   {String} file 
 * @param   {String} projectName 
 * @param   {String} cwd
  */
function createFile (filePath, newPath, file, projectName, cwd) {
    let fileContents 
    const fileName = file.replace(projectNameReplace, pascalCase(projectName)).replace(/(\.js)/, '')

    if (file.indexOf(jsSuffix, jsSuffix.length - jsSuffix.length) !== -1) {
        fileContents = require(filePath)(kebabCase(projectName), pascalCase(projectName))
    } else {
        fileContents = fs.readFileSync(filePath, 'utf8')
    }

    const writePath = `${cwd}/${newPath}/${fileName}`
    fs.writeFileSync(writePath, fileContents, 'utf8')
}

module.exports = createFile