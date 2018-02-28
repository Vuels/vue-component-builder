const fs = require('fs')
const CHOICES = fs.readdirSync(`${__dirname}/../../templates`)

module.exports = () => [
    {
        name: 'project-template',
        type: 'list',
        message: 'What type of Vue Component would you like to generate?',
        choices: CHOICES
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project Name: ',
        validate: function (input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
            else return 'Project name may only include letters, numbers, underscores and hashes.'
        }
    }
]