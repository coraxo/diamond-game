'use strict'

import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'

const statusRoutes = require('./routes/status')
const gameRoutes = require('./routes/game')
const authRoutes = require('./routes/auth')
const app  = express()

app.use(express.static(path.join(__dirname, '../public')))

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log(`Press Ctrl+C to quit.`)
})
