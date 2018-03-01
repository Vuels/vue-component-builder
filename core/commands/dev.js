// Programmatic - Webpack Dev Server
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.config')

// Constants
const port = 8080
const path = require('path')

const options = {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    content: 'www',
    stats: { color: true }
}

const server = new WebpackDevServer(webpack(config), options)

module.exports = () => {
    server.listen(port, 'localhost', function (err) {
        if (err) {
            console.log(err)
        }
        console.log('Vuels Component is running on http://localhost:' + port)
    })
}