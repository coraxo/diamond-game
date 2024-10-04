'use strict'

import express from 'express'
const cors = require('cors')
const statusRoutes = require('./routes/status.ts')
const gameRoutes = require('./routes/game.ts')
const authRoutes = require('./routes/auth.ts')

const app  = express()

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}))

app.use(express.json())

app.use('/api', statusRoutes)
app.use('/api', gameRoutes)
app.use('/api', authRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log(`Press Ctrl+C to quit.`)
})
