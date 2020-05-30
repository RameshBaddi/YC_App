require('ignore-styles')

require('@babel/register')({
    babelrc: false,
    ignore:  [/node_modules/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})


require('./server')