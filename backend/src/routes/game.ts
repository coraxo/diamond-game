'use strict'

import express from 'express'
const router = express.Router()

router.get('/diamondCount', (req, res) => {
  const data = {
      "diamonds": 1500
  }

  res.status(200).send(data)
})

module.exports = router