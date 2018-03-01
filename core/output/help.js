const chalk = require('chalk')

module.exports = () => chalk.grey(`


                            ${chalk.bgBlue.black(' Vuels Component Builder')} 
                                      ${chalk.cyan('(vcb)')}

    ${chalk.yellow.italic('> Part of the Vuels libraries')}

    ${chalk.cyan.bold('Usage')}
    vcb <command> [options]

    ${chalk.cyan.bold('Options')}
    --help                  output help information
    --version               output app version

    ${chalk.cyan.bold('Commands')}
    generate <app-name>     generate a component build structure
    test                    run tests on a generated component
    lint                    run linting on a generated component
    run                     build and run a component in a standalone environment

    For more information go to ${chalk.yellow.underline('https://github.com/vuejs/')}


`)