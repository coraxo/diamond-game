'use strict'

import express from 'express'
const router = express.Router()

router.get('/status', (req, res) => {
  const data = {
      "status": "Running"
  }

  res.status(200).send(data)
})

module.exports = router