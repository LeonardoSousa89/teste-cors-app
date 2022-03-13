const _Port = process.env.PORT || 3003

const view    = require('./view/index')
const log     = require('morgan')
const express = require('express')

const app = express()

app.use(log('dev'))
app.use('/',view)

app.listen(_Port)