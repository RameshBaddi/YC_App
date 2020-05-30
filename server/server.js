
require('babel-polyfill')

import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../src/App'

const app = express()
const PORT = 8000

app.get('/', async (req, res, next) => {
    const indexFile = path.resolve(__dirname, '..', 'build/index.html')
    await fs.readFile( indexFile , 'utf-8', async (err, data) => {
        if(err) {
            return res.status(500).send('Server error')
        }
        const ReactApp = `<div id="root">${renderToString(<App />)}</div>`
        const html =  await data.replace(`<div id="root"></div>`, ReactApp);
        return res.status(200).send(html)
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})