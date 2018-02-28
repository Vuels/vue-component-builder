const pkg = require('../../package.json')

module.exports = projectName => `
{
    "name": "${projectName}",
    "version": "0.0.1",
    "description": "Component ${projectName}",
    "main": "${projectName}.vue",
    "scripts": {
        "dev": "",
        "unit": ""
    },
    "author": {
        "name": "",
        "email": "",
        "url": ""
    },
    "dependencies": {
      "@vuels/vcb": "^${pkg.version}"
    }
}
`