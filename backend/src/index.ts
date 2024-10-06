'use strict'

import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const statusRoutes = require('./routes/status.ts')
const gameRoutes = require('./routes/game.ts')
const authRoutes = require('./routes/auth.ts')
const app  = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api', statusRoutes)
app.use('/api', gameRoutes)
app.use('/api', authRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log(`Press Ctrl+C to quit.`)
})
