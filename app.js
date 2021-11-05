import express from 'express'
import * as path from 'path'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import LOGGER from './server/utils/logger'

// import router
import usersRouter from './server/api/user'
import bankInfoRouter from './server/api/bank-info'
import tradeRouter from './server/api/trade'
import couponRouter from './server/api/coupon'

// admin router
import authRouter from './server/api/auth'

// set up dependencies
const app = express()
require('dotenv').config()

// Middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'server/public')))
app.use(helmet())

// HOST + PORT
const host = process.env.HOST
const port = process.env.PORT

// logger
app.use((req, res, next) => {
  LOGGER.HTTP.request(req)
  next()
})

// Routes
const { PREFIX } = process.env
app.use(`${PREFIX}/user`, usersRouter)
app.use(`${PREFIX}/bank-info`, bankInfoRouter)
app.use(`${PREFIX}/trade`, tradeRouter)
app.use(`${PREFIX}/coupon`, couponRouter)

// Admin routes
app.use(`${PREFIX}/auth`, authRouter)

// Handle unknown route
app.use((req, res) => {
  res.status(404).send({
    result: false,
    message: `${req.method}: ${req.url} not found!`
  })
})

app.listen(port, () => {
  console.log(`Server is listening on ${host}:${port}`)
})
