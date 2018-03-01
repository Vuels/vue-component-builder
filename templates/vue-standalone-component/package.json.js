const pkg = require('../../package.json')

module.exports = (projectName, projectFolderName) => `
{
    "name": "${projectName}",
    "version": "0.0.1",
    "description": "Component ${projectFolderName}",
    "main": "${projectFolderName}.vue",
    "scripts": {
        "dev": "",
        "unit": ""
    },
    "author": {
        "name": "",
        "email": "",
        "url": ""
    },
    "devDependencies": {
      "@vuels/vcb": "^${pkg.version}"
    }
}
`