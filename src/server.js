import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import chalk from 'chalk'
import path from 'path'
import winston from 'winston-color'
import favicon from 'serve-favicon'
import config from './_config'
import getRouter from './routes'

const _parentDir = path.dirname(__dirname)
const _pkg = require(path.join(_parentDir, 'package.json'))

const options = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: winston,
  config: config
}

const { app, port, logger } = options

const server = http.Server(app)
const router = getRouter(options)

const io = require('socket.io')(server)
// const netServer = net.createServer()

io.on('connection', (socket) => {
  console.log('connected')
  socket.on('temp', (data) => {
    io.emit('render', data)
  })
})

app.use(favicon(path.join(__dirname, 'resources', 'images', 'favicon.png')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/css', express.static(path.join(_parentDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use('/images', express.static(path.join(__dirname, 'resources', 'images')))
app.use('/fonts', express.static(path.join(_parentDir, 'node_modules', 'bootstrap', 'fonts')))
app.use(express.static(path.join(__dirname, 'static')))

app.use('/api', router)

// server.on('request', (req, res) => {
//   logger.info(req.method, req.url)
// })

server.on('listening', () => {
  logger.info(`${chalk.bgBlack.cyan(_pkg.name)} version ${chalk.bgBlack.yellow(_pkg.version)} is listening on port ${chalk.bgBlack.green(port)}...`)
})

io.listen(8001)
server.listen(port)

export default server
