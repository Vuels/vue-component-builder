const webpack = require('webpack')
const path = require('path')
const PROD = process.env.NODE_ENV === 'production'

module.exports = cwd => {
    
    return {
        entry: PROD
            ? path.resolve(``)
            : path.resolve(``),
        output: {
            path: path.resolve(``)
        }    
    }
}
