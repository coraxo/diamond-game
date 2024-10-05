'use strict'

import express from 'express'
const router = express.Router()
const auth = require('../auth.ts')

router.get('/diamondCount', auth, (req, res) => {
  const data = {
      "diamonds": 1500
  }

  res.status(200).send(data)
})

module.exports = router